"""Checks Grok team files.

Default run (CI): every file in grok/ and grok/skills/ is checked for
- skill sections, approval and usage lines, and size limits (skills only),
- private details: SSN, phone, email, card or account numbers, street addresses, keys,
- banned wording about Tam (he is never called an electrician, licensed or certified),
- an exact creator line wherever a "Created by" line appears.

Profile run (local only, profiles stay out of this public repo):
    python grok/check_skills.py --profiles path/to/morgan.txt path/to/eddie.txt
checks each Grok bot profile for the 8,000-character limit, the template
sections and banned wording.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).parent
CREATOR = "Created by a U.S. Navy Electrician's Mate (EM3) veteran and student."
PROFILE_LIMIT = 8000
PROFILE_SECTIONS = ("MISSION", "ROOMS", "WHAT YOU OWN", "WHAT YOU NEVER DO", "SKILLS", "USAGE", "REPLIES")

PRIVATE = [
    ("possible SSN", re.compile(r"\b(?!000|666|9\d\d)\d{3}-(?!00)\d{2}-(?!0000)\d{4}\b")),
    ("possible phone number", re.compile(r"(?:\+?1[-. ]?)?\(?\b\d{3}\)?[-. ]\d{3}[-. ]\d{4}\b")),
    ("possible email address", re.compile(r"\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b")),
    ("possible card or account number", re.compile(r"\b\d(?:[ -]?\d){11,18}\b")),
    ("possible street address", re.compile(r"\b\d{1,6}\s+(?:[A-Z][a-z]+\s){1,3}(?:St|Street|Ave|Avenue|Rd|Road|Blvd|Dr|Drive|Ln|Lane|Ct|Court|Way)\b")),
    ("possible key or token", re.compile(r"\b(sk|pk|ghp|gho|xox[abp])[-_][A-Za-z0-9]{10,}")),
    ("possible application or claim number", re.compile(r"#\d{6}\b")),
]
ALLOWED_EMAIL = re.compile(r"noreply|example\.com", re.I)

# Wording that describes Tam as something he is not. Lines that state the rule
# itself ("Never say ...") or sit under a "WHAT YOU NEVER DO" heading are allowed.
BANNED = re.compile(
    r"\b(licensed|certified|journeyman|master|navy-trained)\s+electrician\b"
    r"|\bTam\b[^.\n]{0,30}\b(is|as|an|the)\s+(an?\s+)?(electrician|licensed|certified)\b"
    r"|\bI'?m\s+an?\s+(licensed\s+|certified\s+)?electrician\b",
    re.I,
)
RULE_LINE = re.compile(r"\b(never|don't|do not|not)\b", re.I)


def wording(name, text):
    out = []
    never_section = False
    for n, line in enumerate(text.splitlines(), 1):
        if line.strip().isupper() or line.startswith("#"):
            never_section = "NEVER" in line.upper()
        is_rule = never_section or RULE_LINE.search(line)
        if BANNED.search(line) and not is_rule:
            out.append(f"{name}:{n}: banned wording about Tam")
        for m in re.finditer(r"Created by[^\n\"]*", line):
            if not m.group(0).startswith(CREATOR) and not RULE_LINE.search(line[: m.start()]):
                out.append(f"{name}:{n}: creator line must read exactly: {CREATOR}")
    return out


def private(name, text):
    out = []
    text = re.sub(r"https?://\S+", "", text)  # page IDs in links are not private numbers
    for label, pat in PRIVATE:
        for m in pat.finditer(text):
            if label == "possible email address" and ALLOWED_EMAIL.search(m.group(0)):
                continue
            out.append(f"{name}: {label} ending in ...{m.group(0)[-4:]}")
    return out


def check_repo():
    bad = []
    for p in sorted(ROOT.joinpath("skills").glob("*.md")):
        t = p.read_text()
        for need in ("NAME:", "DESCRIPTION:", "INSTRUCTIONS:", "APPROVAL:", "USAGE:"):
            if need not in t:
                bad.append(f"{p.name}: missing {need}")
        d = re.search(r"DESCRIPTION:(.*?)INSTRUCTIONS:", t, re.S)
        if d and len(d.group(1).strip()) > 1024:
            bad.append(f"{p.name}: description over 1024 chars")
        if len(t) > 20000:
            bad.append(f"{p.name}: file over 20000 chars")
    for p in sorted(list(ROOT.glob("*.md")) + list(ROOT.joinpath("skills").glob("*.md"))):
        t = p.read_text()
        rel = p.relative_to(ROOT.parent).as_posix()
        bad += private(rel, t) + wording(rel, t)
    return bad, "All Grok files pass."


def check_profiles(paths):
    bad = []
    for path in paths:
        p = pathlib.Path(path)
        t = p.read_text().rstrip("\n")
        if len(t) > PROFILE_LIMIT:
            bad.append(f"{p.name}: {len(t):,} characters, over the {PROFILE_LIMIT:,} limit")
        heads = [l.strip() for l in t.splitlines() if l.strip().isupper()]
        for s in PROFILE_SECTIONS:
            if not any(s in h for h in heads):
                bad.append(f"{p.name}: missing section {s}")
        bad += wording(p.name, t)
    return bad, f"All {len(paths)} profile(s) pass."


if __name__ == "__main__":
    args = sys.argv[1:]
    if args[:1] == ["--profiles"]:
        if len(args) < 2:
            sys.exit("Give one or more profile text files after --profiles.")
        bad, ok = check_profiles(args[1:])
    else:
        bad, ok = check_repo()
    print("\n".join(bad) or ok)
    sys.exit(1 if bad else 0)
