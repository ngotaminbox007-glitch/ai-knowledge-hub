"""Checks Grok skill files: required sections, approval and usage lines, size limits, no private data."""
import re, sys, pathlib
bad = []
pat = re.compile(r"\b\d{3}-\d{2}-\d{4}\b|\b(sk|pk|ghp|xox)[-_][A-Za-z0-9]{10,}|#\d{6}\b")
for p in sorted(pathlib.Path(__file__).parent.joinpath("skills").glob("*.md")):
    t = p.read_text()
    for need in ("NAME:", "DESCRIPTION:", "INSTRUCTIONS:", "APPROVAL:", "USAGE:"):
        if need not in t: bad.append(f"{p.name}: missing {need}")
    d = re.search(r"DESCRIPTION:(.*?)INSTRUCTIONS:", t, re.S)
    if d and len(d.group(1).strip()) > 1024: bad.append(f"{p.name}: description over 1024 chars")
    if len(t) > 20000: bad.append(f"{p.name}: file over 20000 chars")
    if pat.search(t): bad.append(f"{p.name}: possible private number or key")
print("\n".join(bad) or "All skill files pass.")
sys.exit(1 if bad else 0)
