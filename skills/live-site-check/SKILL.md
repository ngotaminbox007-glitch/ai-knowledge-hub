---
name: live-site-check
version: 1.0.0
owner: Software Engineer
status: proposed
source: Software Engineer sign-in
description: "Check a live website once a day the way a visitor sees it: real browser, signed out, public pages only. Includes the private-site check, which confirms a site meant to be private still hides its content. Use for the hub and any site Tam runs."
---

# live-site-check

## 1. How to check
- Open each page in a real browser, signed out. A plain download is often blocked by bot protection, so a 403 from it alone is not proof.
- Wait for the main content to appear before calling a page blank.
- Record the date, page, status, load time and a screenshot in your log.
- One visit per page per day. Don't submit forms, sign in with Tam's account, buy anything or put load on the site.

## 2. What counts as a problem
- An error status, a blank page or an error page.
- A browser console error that wasn't there yesterday.
- A load time more than twice the usual.
- The main element missing, for example the navigation or the skill list.
- Links on the page that stop loading.

Re-check 10 minutes later before calling it real (see `prove-the-problem`).

## 3. Private-site check
Some sites show a "This site is private" page at the main address and keep the real content at a private link.
- Confirm the main address **still shows the private page**. If real content shows up there, report it right away as possible exposure.
- Never paste the private link into the board, an issue, a pull request or a public file. Keep it in your private notes only.

Follows `core-guardrails`.
