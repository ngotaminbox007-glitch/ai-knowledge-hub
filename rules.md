# AI Rules — Email Cleanup & Spam Triage

**Every AI assistant (Perplexity, ChatGPT, Grok, Cursor, or any other) must read and follow these rules before touching any email in this account.** These rules are the single source of truth for how mail is classified, what is never touched, and what happens to spam. A portable installable skill version (email-cleanup-triage) accompanies this page.

## How the whole organization network works

Every AI in this network follows the same loop:

- **The Brain (knowledge wiki)** — every project has a brain that stores durable facts, decisions, contacts, timelines, and lessons. The AI reads it before starting any work and writes new findings back into it. The user teaches once; the brain remembers forever.
- **Skills & abilities** — packaged, installable capabilities (Agent Skills format) that live in the skills library. If a task matches a skill, the AI loads it instead of improvising.
- **Workflows** — saved procedures for recurring work (weekly program checks, monthly records reviews, inbox triage), often on schedules. Every run improves the next.
- **Connections & integrations (plugins)** — authenticated access to services: Gmail, Google Drive, Notion, Box, Dropbox, GitHub, Calendar, and more. Bridges between the brain and the user's data.
- **The flow** — connect → read the brain → load the skills → follow the rules → use the connections → do the work → write results back into the brain.

## The Rules

### 1. Never-spam, never-delete categories — no exceptions
Government agencies, VA and veterans benefits, disability and benefits mail, class-action and settlement claims, active case correspondence (law firm updates, medical appointment and post-op mail, travel itineraries, records-gathering services), and any sender the user consistently opens. These override every other signal — volume, labels, unread status, everything.

### 2. Read content before labeling
Genuine correspondence can look exactly like marketing. Law firm case updates, surgery center reminders, and records-service notices have all been mislabeled as spam by volume-based sweeps. Check the sender and read the message before applying any spam label.

### 3. The open/unopened ratio is the master signal
- Consistently opened (near 100% read) = important. Keep visible, never bury.
- Consistently unopened in bulk = spam.

### 4. Multiple labels = user-marked important
A message carrying several of the user's own category labels (Money, Receipt, Vehicle Sale, Action Required, Needs Reply, etc.) was deliberately flagged — unless its sender's open-ratio says otherwise.

### 5. Bulk-unopened = confirmed spam
Roughly 20 or more emails from one sender with none or almost none opened.

### 6. Always-spam categories
Credit card offers, crypto promotions, loan lead-gen (rotating brand names, personal-name senders), job bait, benefit-claim scams, adult content, psychic/medium mail, payment-verification phishing, and spoofed From names.

### 7. Multiple confirmations = auto-label
Two or more independent signals together = 90%+ spam probability. Apply the spam label without further review.

### 8. Survival rule
Old mail that has survived years of cleanups without deletion has proven itself important. Never delete or spam-label it.

### 9. One-time codes are dead after one use
Verification/OTP emails get filed under a Notifications label or archived — never kept in the inbox.

### 10. The trashcan label — never delete via API
The "Likely Spam" label is the trashcan. Confirmed spam is consolidated there; it equals deletion because the user can empty it with one Select-all → Delete. The agent labels and archives; only the owner deletes. Nothing is lost until the owner chooses.

## Most-Wanted Senders (auto-reject, no review)
finlogixconnect.com · indestata.com · installmentnexus.com · finrpro.com · lakeka-hofinance.com · Core Cap (info-corecapny.com@shared1.ccsend.com) · truecourseroute.com · thecreditcomet.com · insurancematched.com · phenomenalwork.net · joblistify.com · jobs2careers.com · mybenefits-spaoa.com · famehoney.online · lifelineapplyonline.site · benaughty.com · christin-medium.com · blissxo.com · bydfi.com · tradier.promo · referralhero.com · smartresourceguide.com · secureyourbestinsurancehere.xyz · informguildsyslogicpremium.xyz · edealerhub.com · alstspecials.com · autoipacket.com · dealercenter.net · cbdriver.com · callcorzo.com

## Operating Procedure
1. Discover pools by label and sender — search returns ~100 per query, so paginate and date-partition; pools are always bigger than they look.
2. Protect never-spam categories first.
3. Score senders by open-ratio.
4. Consolidate all mail from each confirmed spam sender into the trashcan label.
5. Re-sweep to stability — hidden messages surface as the pile clears.
6. Report: sender table, what was rescued and why, one-tap delete instructions.

## Known Traps
- The provider's built-in Spam folder is separate from labels and cannot be modified by API — list its contents for the user to handle.
- Mobile apps cache labels; verify server-side before redoing work the user reports as "still there."
- Encoded unsubscribe links in old marketing emails are often expired; use the client's built-in Unsubscribe button.
