# 4.90 Release notes

## 4.90.02 - Safer Cash-Ups, Steadier Connections and the 7.25% Repo Rate

_Released: 2026-09-30_

Mobiloan **4.90.02** builds on **4.90.01** (26 September 2026). Below is what your branches, agents and administrators will notice — summarised for day-to-day use.

**Before rollout:** if you keep your own loan products, review **Setup → Loan Product** after the update (see the repo rate item below). After deploy, staff should fully close and reopen the app.

### 🚀 New

**Cash-ups that prove themselves before they say "done".** When you reconcile the cashbox (or undo a reconciliation), Mobiloan now checks that every transaction you selected is really linked to that reconciliation before it shows success. If anything did not save, nothing is left half-done: you are told it failed, the transactions stay open, and you can try again. This removes the unexplained Cash Over and Cash Short amounts that could appear on the next cash-up after an incomplete one.

**The 7.25% repo rate.** The Reserve Bank repo rate is now **7.25%**, effective **25 September 2026**, and every repo-linked cap follows it (mortgage, credit facility, unsecured credit, small business development and low-income housing). Short-term, incidental and other credit are not repo-linked and do not change.

**Clearer, safer messages on payments and bank requests.** If the connection drops while a payout or an Amplifin request is in flight, you now see **Outcome Unknown** (it may have gone through — check before repeating) or **Request Not Sent** (it definitely did not), and Mobiloan never retries it for you. Other failures now show a plain sentence instead of technical detail, and working offline shows the connection message instead of "Failed to fetch".

**Hyphen now shows its own "Powered by" banner** on the AVS page, the same way Allps and Gathr already do.

***

### 🛠️ Improvements & Fixes

- **Loan Product setup** no longer changes anything just because you open a product. A product with no repo rate of its own is pre-filled on screen only. You can save a repo rate at or below the current Mobiloan default, but no longer above it — this is now a firm block rather than a confirmation prompt. A product already saved above the default shows a notice naming the capped rate.
- Charged and printed rates are now worked out the same way everywhere: the lower of the product's own repo rate and the Mobiloan default, plus its surcharge. As a result, the printed cost of credit can move on some products. The first reprint can show a moved figure for products that never had their own repo rate, products saved above the default (now capped, for example 28.50% becoming 28.25%), and products whose stored printed rate had drifted. A loan's own instalment, balance and repayment amount do not change.
- Two devices signed in as the same operator no longer sign each other out.
- The bank-statement PDF upload now tells you the reason when a file is refused.
- The Standard SMR and Profit and Loss rebuilds run far lighter on your database. If you request an SMR report while its data is refreshing, you see "SMR data refreshing — please try again in a few minutes" instead of a report built on half-refreshed data.
- Text containing a semicolon (for example in a note or description) no longer breaks the sync that feeds your reporting database.
- **GroupsRUS** products: running **Get Rules** and then **Save** no longer clears the insurance options, so the Insurance dropdown stays available at origination. The empty **Voluntary Insurance** column is hidden for GroupsRUS.
- On other insurers (for example King Price or Guardrisk), the **Voluntary Insurance Options** you tick are now saved.

***

Branches need no install — the release is applied centrally. After deploy, force-close and reopen the app (or log out and back in) so the corrected screens load.
