---
name: email-cleanup-triage
description: "Clean and triage an email inbox: classify mail by sender open-ratio and labels, protect never-spam categories like government, VA, disability, legal and medical mail, and consolidate confirmed spam senders into one trashcan label for one-tap mass deletion. Use when asked to clean up, organize, de-spam, or triage email. Not for composing or sending mail."
metadata:
  version: '1.0'
  author: Tam Ngo
---

# Email Cleanup & Spam Triage

## When to Use This Skill

- Clean up, organize, or de-spam an inbox or spam folder
- Decide whether mail is spam; rescue mislabeled mail
- Set up ongoing triage rules or a "trashcan label" system

## Core Rules

1. **Never-spam categories** — government agencies, veterans/VA, disability and benefits, class-action and settlement claims, active case correspondence (law firm, medical, travel, records services), and any sender the user consistently opens. These override every spam signal. Check sender and content before labeling: real correspondence can look like marketing.
2. **Open-ratio is the master signal** — consistently opened = important, keep visible; consistently unopened in bulk = spam.
3. **Multi-label = user-marked important** — a message carrying several of the user's own labels was flagged as mattering, unless the open-ratio says otherwise.
4. **Bulk-unopened = confirmed spam** — roughly 20+ emails from one sender with none or almost none opened.
5. **Always-spam on sight** — credit card offers, crypto promotions, loan lead-gen, job bait, benefit scams, adult content, phishing lookalikes.
6. **Multiple confirmations** — two or more independent signals together mean 90%+ spam probability: apply the spam label without further review.
7. **Survival rule** — old mail that has survived years of cleanups has proven itself important.
8. **One-time codes** — verification/OTP emails are dead after one use: file under a Notifications-style label, never keep in the inbox.

## Workflow

1. **Discover pools.** List mail by label and sender. Email search returns about 100 results per query: paginate with cursors and date-partition ranges until every partition returns fewer than 100. Pools are always bigger than they first appear.
2. **Protect first.** Pull every never-spam category out of any spam pile before touching junk. For ambiguous senders, read the message content — sender names and formats mislead.
3. **Score senders.** Per sender, count total vs unopened. Near-100% unopened with volume is confirmed; near-100% opened is protected.
4. **Consolidate by sender.** Search the whole account for every email from each confirmed spam sender and apply the trashcan label ("Likely Spam") to all of it, so one Select-all → Delete empties the pile.
5. **Re-sweep to stability.** After each removal pass, sweep again — messages hidden behind the result cap surface only after earlier ones are cleared. Stop when a full partitioned sweep finds nothing eligible.
6. **Never delete via API.** Label and archive only. The trashcan label is equivalent to deletion for the user; deleting is the owner's one tap, not the agent's action.
7. **Report.** Give a sender table with counts, what was rescued and why, and the one-tap delete instructions.

## Failure and Remedies

- The provider's built-in Spam folder is separate from labels and cannot be modified by API tools — list those messages for the user to tap "Not spam" themselves.
- If the user reports a removed label still showing, verify the server-side state before redoing work; mobile apps cache labels — advise a refresh or app restart.

Read `references/rulebook.md` when applying rules to a real cleanup, when the user disputes a classification, or when configuring recurring sweeps.
