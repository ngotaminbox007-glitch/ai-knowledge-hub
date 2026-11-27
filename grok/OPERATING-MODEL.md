# Grok Operating System for Tam's AI Team (Nov 26, 2026)

## Layers
| Layer | What it is | Who/what |
|---|---|---|
| 1. Approver | The only person who approves sending, posting, spending, deleting or changing a live account | Tam |
| 2. Orchestrator | Plans changes, rebuilds and checks the system when Tam asks. Used for one-off jobs only, to save Perplexity credits | Perplexity Computer |
| 3. Main bot | Chief of Staff: one task list, all routines, briefs and alarms, combined decision cards | Morgan (Grok) |
| 4. Support bots | Six lane owners (below) | Eddie, Scarlett, Penny, Max, Luna, Maya (Grok) |
| 5. Data layer | Where the work lives | Notion Business HQ (Tam's One List, Document Catalog, Income Streams, Handoff & Data Documents Index), Google Drive, Dropbox |
| 6. Message board and verification | Public-safe board and checks | AI Hub GitHub repo (Issues = board, file names only), GitHub Actions skill check, Cursor rules and Cloud Agents for code jobs |
| 7. Skills and connectors | How each job is done, and which apps the bots can reach | Grok skill library (shared by all bots), Grok Connect Apps |

## Org network
- Chain: every bot reports status to Morgan. Morgan and Eddie report to Tam. Morgan's call wins when shop work clashes with Tam's life, work or school.
- LIFE lane: Scarlett (mail, calendar, intake), Penny (money), Max (work, school, Local 332), Luna (files, private vault).
- SHOP lane: Eddie (lead: buyer, price, listing copy, sales log), Maya (designs, product files, marketing, ad drafts, web pages), Penny (costs, verified sales), Scarlett (shop mail routing), Luna (storage only, 1:1).
- Flow:
  1. Scarlett catches mail and dates and routes them.
  2. The owner bot works in its own lane.
  3. Finished files go to Luna and the Notion Document Catalog.
  4. Costs, sales and ad spend go to Penny first.
  5. Decisions: life items go owner -> Morgan -> one card to Tam. Shop items go Maya/Penny -> Eddie -> one shop card. Plans go Morgan proposes -> Eddie tests -> one combined card in The Bridge.
- Groups: The Bridge = Morgan, Eddie. The Shop = Morgan, Eddie, Maya, Penny, Scarlett. Home Base = Morgan, Scarlett, Penny, Max, Luna. Private items are handled 1:1.

## Bot roles, skills and known weaknesses
| Bot | Distinct job | Skills (new in bold) | Weakness and guardrail |
|---|---|---|---|
| Morgan, Chief of Staff | Task list, routines, alarms, briefs, combined cards; took over Perplexity Mission Control and Research Analyst | **team-decision-card**, **landing-page-builder** (deploy decisions) | Owns ~10+ routines, which is the biggest usage cost. Keep schedules wide and judge each run against a material bar. |
| Eddie, Advisor & Sales | Shop lead and plan stress-tester | **vbp-etsy-listing-builder**, **vbp-product-research-scorer**, **vbp-etsy-ads-campaign**, **vbp-digital-product-builder**, **team-decision-card**, **market-watch-research** (weekly market read) | Can drift into building new products. Rule: promote existing products first; build only after a verified first sale or Tam asks. |
| Maya, Creative Design & Marketing | Product files, visuals, marketing, ad drafts, landing pages | **marketing-copy-approval-card**, **meta-ads-campaign-builder**, **google-ads-campaign-builder**, **landing-page-builder**, **vbp-digital-product-builder**, **vbp-etsy-listing-builder** (photos and video), **team-decision-card** | Can't publish to Etsy from the cloud browser. One approval card per post or ad. |
| Penny, Money Boss | Ledger, bills, deposits, profit vs. AI costs | **vbp-etsy-ads-campaign** (profit math), **team-decision-card**, document-processor | A recorded sale, a deposited payout and break-even are three separate checks. Read-only on money. |
| Scarlett, Executive Assistant | Inbox, calendar, routing, drafts | **gmail-cleanup-rules**, **team-decision-card** | Labels only, never deletes. Must check which mailbox a slot really opens. |
| Max, Shifts, Skills & School | KAAVE hours, Canvas, Local 332 prep, job leads | **school-assignment-reviewer**, ibew-apprentice-packet, ibew-das103-hours-ledger, **local-332-interview-coach**, **team-decision-card** | Never writes coursework. Hours come from real punches only. |
| Luna, Drive & Dropbox Librarian | Filing, Drive/Dropbox match, private VA lane | document-processor, exact-pdf, dual-vault-index-sync, dropbox-preflight-fact-check, evidence-lane-airlock, **vbp-digital-product-builder** (file storage checks only), **team-decision-card** | Not in The Shop. Shop files reach her 1:1. Nothing private goes to rooms or the Hub. |

## Grok skills added Nov 26, 2026 (13)
vbp-etsy-listing-builder, vbp-product-research-scorer, vbp-digital-product-builder, vbp-etsy-ads-campaign, meta-ads-campaign-builder, google-ads-campaign-builder, marketing-copy-approval-card, landing-page-builder, market-watch-research, gmail-cleanup-rules, school-assignment-reviewer, team-decision-card, local-332-interview-coach. Each one states: when to use it, steps, checks, output, approval boundary and usage rule.

## Research behind the upgrades (checked Nov 26, 2026)
- Etsy title guidance (Nov 3, 2026): lead with what the item is, keep objective details, aim for under 15 words; search also reads attributes, the first photo and reviews. https://www.etsy.com/seller-handbook/article/1399426136697
- Etsy Ads: $1/day minimum; handbook suggests $3-5/day and about 30 days; 15-day wait for new shops; listing strategies at $25+/day. https://help.etsy.com/hc/en-us/articles/360033701174 and https://www.etsy.com/seller-handbook/article/667698209245
- Meta text guidance: primary text 125, headline 40, description 25 for most placements (27 for Facebook Feed headlines). https://business.facebook.com/business/help/223409425500940/
- Google responsive search ads: 3-15 headlines of 30 characters, 2-4 descriptions of 90, paths of 15; 8-10+ unique headlines advised. https://support.google.com/google-ads/answer/7684791 and https://support.google.com/google-ads/answer/6167115
- Grok skills should state when to use, inputs, steps, validation, output and what needs approval. Routines spend weekly usage. https://docs.x.ai/grok-bot/skills-routines-and-automations
- Grok Bot usage is a weekly pool shared with Cursor and the Grok apps; bot-to-bot replies count. https://docs.x.ai/grok-bot/faq

## Safety rules to add in the Grok Bot app (Settings > General > Bot > Custom rules > Ask first)
1. Ask first before sending any email or message outside my own accounts.
2. Ask first before posting, publishing or scheduling anything on any channel or website.
3. Ask first before any purchase, payment, ad spend or subscription change.
4. Ask first before deleting, trashing or archiving any file, email, page, routine or bot.
5. Ask first before changing a live Etsy listing, price, shop setting or storefront.
6. Ask first before creating or changing any routine or schedule.

## Connectors still to connect in Grok (Tam signs in; Settings > Connect Apps)
Notion, GitHub, Canva, Vercel. Optional for marketing later: Buffer or Metricool (scheduling), X Ads. Already connected: mail, calendar, Drive and finance (read-only). Suggested per-tool settings: reads = Always allow; send, post, create = Needs approval; delete = Blocked.

## Perplexity changes
Research Analyst schedules paused on Perplexity (Market sweep, Daily update, Weekly market read). Eddie runs market-watch-research as a single routine, 'Weekly Etsy market read', on Mondays around 6:30 AM PT. Morgan no longer runs any market routines. The Perplexity teammates (Mission Control, Research Analyst) stay in place but should only be woken for one-off jobs.

## Recommended tools, connectors and software per bot (researched Nov 26, 2026)
Free tiers first. Anything paid needs Tam's yes, and Penny logs it before it starts. Etsy blocks the cloud browser, so tools that need an Etsy login run on Tam's own device.

| Bot | Connect in Grok (Connect Apps) | Outside tools and software | Why |
|---|---|---|---|
| Morgan | Notion (critical: Tam's One List and the Document Catalog); GitHub (built in through Cursor); Vercel (Hub deploy status) | Google Sheets as the routine log | Morgan can't update Notion until it's connected |
| Eddie | Stripe (read-only, Kit/app payments) | Etsy Marketplace Insights and Shop Stats (free); eRank Free (5 keyword lookups a day; Basic $5.99/mo if needed); EverBee Hobby (free Chrome extension, Tam's device) | Keyword and demand proof for listings ([RetailPresso](https://retailpresso.com/reviews/best-etsy-seo-tools), [Trendlytic](https://www.trendlytic.io/blog/etsy-analytics-tools)) |
| Maya | Canva; Google Ads, Google Analytics and Search Console (when used); Buffer or Metricool (drafts only; send = Needs approval); Vercel | CapCut (15-second listing videos); Pinterest Business (Tam posts) | Designs, ad drafts and landing pages in one place |
| Penny | Finance (Plaid) already linked; PayPal and Stripe (read-only); Expensify optional | Etsy Payments CSV export | Profit vs. AI costs; a sale, a payout and break-even are checked separately |
| Scarlett | Gmail, Outlook and both calendars already linked | Read.ai (already in use); Calendly only if Tam wants booking links | Inbox and calendar lane |
| Max | Google Calendar (linked) | Canvas (browser); LanguageTool free (grammar checks on Tam's own writing); Anki or Quizlet (Local 332 flashcards) | School review and interview practice; new skill local-332-interview-coach |
| Luna | Dropbox (custom MCP: https://mcp.dropbox.com/mcp, Tam signs in); Google Drive (linked) | Grok Vault for logins (no passwords in chat) | Luna is the Dropbox librarian but Dropbox isn't connected yet ([grokbot.tools](https://grokbot.tools/connectors)) |

Per-tool settings for every connector: reads = Always allow; create, send or post = Needs approval; delete = Blocked ([Grok Bot security docs](https://docs.x.ai/grok-bot/security)).
