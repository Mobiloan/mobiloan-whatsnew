# 4.86 Release notes

## 4.86.00 – Digital Documents, Validation & Branch Controls

_Released: 2026-07-27_

Mobiloan **4.86.00** is a single update covering everything delivered since **4.85.00** (21 July 2026). Below is what your branches, agents, and administrators will notice — summarised for day-to-day use.

### 🚀 New Features

#### Origination and documents

When a client has a **valid Gathr digital bank statement** on the repayment account, the **Documents** step no longer requires a scanned bank-statement image before **Acceptance** — the same pattern as skipping AVS on **Transaction** when digital proof is already on file. An info line on Documents explains when the scan is waived. Payout alerts for fraud, expiry, and account mismatch are unchanged.

Loan agreement PDFs now label the instalment schedule **Period Start** and **Instalment Due** (was Start / End), with a short note under the table so payroll teams don't confuse accrual start with the first deduction date. Loan maths are unchanged — only the labels. New agreements pick this up on the next payout.

#### Day-to-day usability

On **Setup → Users**, if an email or cellphone matches an **archived** user, Mobiloan shows an early hint with **Restore Archived Duplicate** — before you finish Profile → Access → Security. Active duplicates still block with a named warning. Self-setup never offers restore into another user's record.

Invalid values are now corrected **while typing** on common setup and origination screens — for example loan amount above product max capital, cooling-off above 30 days, and text fields that exceed their allowed length. This is intentional data-quality protection, not a sync fault.

Setup and maintenance screens are smoother too — for example **Online Webapp** no longer errors when saving an unchanged subdomain, **Fileshare** shows clearer offline messaging, **Audit Logs** keep the Client column intact, **Cashbox** cancel rolls back cleanly, summary lists show counts for Agents / Areas / Employers / Users, and **Broadcast** defaults to about one hour after start instead of a full day.

On advanced affordability, the **NCR living-expenses shortfall** refreshes when gross or bonus income changes instead of staying on an old tier. The origination client screen also recovers if loading stalls instead of staying blank. **Setup → Configuration** stays open when Save fails and jumps to the first invalid field.

***

### 🛠️ Improvements & Fixes

#### Payments and reporting

On Allps Promissory create, edit, and add-instalment, Mobiloan now warns **before** you submit a past presentment date — instead of failing with a vague Allps error. On **New Promissory**, SASSA and Government Pension tracking fields no longer appear together when loan and client categories disagree.

The **Bengil Credit Life Insurance** export now includes loans receipted in the period even when no instalment was due that day. **Payroll Remittance / Batch Receipt** totals refresh after Client Ledger without re-login; excluded instalments no longer inflate the confirm amount.

On **Reporting → BI dashboard**, chart cards on the right (for example **Loan Composition**) are no longer clipped on tablets or narrow desktop windows — swipe or drag horizontally inside the dashboard to reach all charts.

Operators or devices outside **South Africa** (or with a non-SA device timezone) no longer get a false **Token expired. Check device time** when running reports or other background steps from the app, as long as the device clock is correct.

***

### Before you go live

| What to check | Where |
| --- | --- |
| Digital statement waiver on Documents | Category must allow digital bank statements; Gathr statement on repayment account |
| Restore archived user duplicate | Setup → Users — early toast when email/cell matches archived record |
| Field limits while typing | Automatic — no config needed |
| New loan agreement PDF labels | Fresh payout on the loan |
| BI dashboard scroll | No action — applies after the central update |

Branches need no install — the release is applied centrally. After deploy, force-close and reopen the app (or log out and back in) so new fields and rights sync cleanly.
