# 4.90 Release notes

## 4.90.01 - A Third Account-Verification Provider, and a Paydate Tracking Fix

_Released: 2026-09-26_

Mobiloan **4.90.01** builds on **4.90.00** (22 September 2026). Below is what your branches, agents and administrators will notice — summarised for day-to-day use.

### 🚀 New

**Hyphen — a third account-verification provider.** Account verification (AVS-R) can now also be carried out through Hyphen, alongside your existing provider. Where a Hyphen check is still waiting on an answer from the bank, the account's AVS History shows **Waiting for bank response**; you can still start a fresh **New AVS-R** at any time, and if a check fails you're offered **Retry**. Ask Mobiloan support about using it.

***

### 🛠️ Improvements & Fixes

- Aligning a loan to a custom paydate group's tracking window now covers the group's full **Last Tracking Date**, instead of finishing one day early. A same-day tracking window now tracks 1 day instead of 0, and the longest a window can track is capped at 10 days either way. This applies to loans aligned from this update on; a loan aligned before it keeps its earlier tracking. If a custom-paydate loan's tracking stops a day short of its Last Tracking Date, ask support to check it.

***

Branches need no install — the release is applied centrally. After deploy, force-close and reopen the app (or log out and back in) so new settings sync cleanly and the corrected screens load.
