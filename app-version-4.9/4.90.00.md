# 4.90 Release notes

## 4.90.00 - Voice Scripts & Sign-In Reliability

_Released: 2026-09-22_

Mobiloan **4.90.00** builds on **4.89.00** (13 September 2026). Below is what your branches, agents and administrators will notice — summarised for day-to-day use.

**Before rollout:** review **Setup → Configuration → Voice** if you want to customise the wording read to clients during acceptance calls, or turn the feature off. After deploy, staff should fully close and reopen the app.

### 🚀 New

**Read a script to the client during the acceptance call** — On the origination Acceptance screen, tapping **Voice Sign** now opens a **Voice Script** you can read aloud while you're on the call — in English by default, with a manual override to switch language on the spot. It fills in the loan's own details (amount, period, instalment, rate, fees, first payment date) as it goes, and covers the same ground an acceptance call needs to cover: costs, the 5-day quotation, default, early settlement, statements and the client's rights. It opens automatically the moment you connect the call, and **Call Connected** only shows once you close the script yourself. English is ready to use from day one; your own administrator can write and save your own wording for any other language before it's used there instead, insert loan-detail placeholders, and preview it against a sample loan under **Setup → Configuration → Voice**. If you'd rather not use it, it can be switched off there too.

***

### 🛠️ Improvements & Fixes

- Compliance screening spreadsheets now show results **per company**, with a **Results per company** summary table and a company column on every result row — clear proof of who was screened and for which company, even where more than one company shares an instance.
- When your sign-in needs renewing in the background, the app now renews it and tries your request again on its own. Where it truly can't be renewed, you're told plainly to log out and log back in, instead of seeing a generic "temporarily unavailable" message.
- The app no longer hangs when a sign-in renewal comes back incomplete. It stops after a limited number of attempts and shows the usual "Request failed" message instead.
- **Contra** on a POS transaction (cancelling a card payment on the terminal) now actually reaches the payment terminal instead of quietly doing nothing.
- **Message us on WhatsApp** on the Support Desk now opens a conversation your support desk actually receives.
- Insurance premium reports for **Universal**-insured loans no longer link a voluntary life payment to the wrong policy number on a loan that carries both credit life and voluntary life cover.
- Going **Back** after **Fetch missing payments** on Promissory now refreshes the Client Ledger straight away, instead of only showing the fetched payment after a later reload.
- Creating a Promissory with a custom loan reference no longer accepts a reference that could open a second, duplicate debit-order mandate on the same loan; a mandate that's still active is now named and loaded instead of inviting a new one.
- A loan whose settlement receipt was later deleted no longer gets stuck showing as closed — and reported to SACRRA as closed — while a balance is still outstanding.
- Choosing an instalment frequency your loan product doesn't authorise (most relevant to SASSA and government-pension applications) is now refused with a clear message, instead of silently applying no maximum-instalment limit.
- The Companies list under Setup no longer shows **Experian** for every company's credit bureau when the company itself has no bureau on record — the column is blank there instead of showing the wrong bureau; Branch and Category still show your correct bureau.
- A debit-order mandate that was cancelled and replaced with a new one now shows its current, correct status on Client Ledger instead of the superseded "cancelled" one.
- An agent's wallet or EFT commission that hit a connection hiccup mid-payout is no longer left unpaid without anyone being told.

***

### Before you go live

| What to check | Where |
| --- | --- |
| Whether Voice Script should be on for acceptance calls (on by default) | **Setup → Configuration → Voice** |
| Your own wording for the Voice Script — English is on by default; any other language stays on English until you add your own script for it (optional) | **Setup → Configuration → Voice** |

Branches need no install — the release is applied centrally. After deploy, force-close and reopen the app (or log out and back in) so new settings sync cleanly and the corrected screens load.
