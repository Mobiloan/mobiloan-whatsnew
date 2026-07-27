# 4.86 Release notes

## 4.86.00 – Digital Documents, Validation Guardrails & Branch Controls

_Released: 2026-07-27_

4.86.00 is a consolidated release for your branches covering everything shipped since **4.85.00** (21 July 2026). Headline additions are a **digital bank statement waiver on Documents**, **early restore for archived duplicate users**, **validation and field-length guardrails while typing** (MAS-354 / MAS-363), **Setup & maintenance polish** (MOB-909 Phase 4), and clearer **loan agreement instalment schedule** labels. This release also improves origination reliability, Allps promissory date handling, Bengil credit life reporting, payroll remittance totals, **BI dashboard horizontal scroll** on narrow screens, and **report sign-in for operators outside South Africa**.

### 🚀 New Features

#### Digital bank statement waiver on Documents

**What changed:** When a client has a **valid Gathr digital bank statement** on the repayment account, the **Documents** origination step no longer requires scanned bank-statement images before **Acceptance** — aligned with how AVS can already be skipped on **Transaction** when digital proof exists.

**How to use it:**

1. Ensure the category allows digital bank statements and Gathr has an online or USSD statement for the repayment account
2. Open **Origination → Documents**
3. If the waiver applies, an info line explains that scanned bank statements are not required
4. Complete any other required document types; **Acceptance** unlocks when nothing else is pending
{% hint style="info" %}
**Why it matters:** Operators can proceed without re-scanning when Gathr digital proof is already on file.

**Who is affected:** Branches on categories with digital statements enabled; payout fraud/expiry/mismatch alerts are **unchanged**.
{% endhint %}

#### Early archived-duplicate restore when creating users

**What changed:** On **Setup → Users**, entering an email or cellphone that matches an **archived** user now shows an early indigo hint with **Restore Archived Duplicate** — before the operator completes Profile → Access → Security.

**How to use it:**

1. Open **Setup → Users** → **Add** (or edit)
2. Enter email or cellphone matching one archived user
3. Choose **Restore Archived Duplicate** from the indigo toast, or dismiss and enter a different value
4. Review Profile, Access, and Security; **Save and Restore** sets status Active
{% hint style="info" %}
**Why it matters:** Restoring an archived duplicate is a one-tap action from the early toast; save-time blocks use clearer copy naming the colliding record.

**Who is affected:** Setup administrators; self-setup never offers restore into another user. Active collisions still show a named pink warning immediately and at save.
{% endhint %}

#### Validation and field-length guardrails (MAS-354 / MAS-363)

**What changed:** Mobiloan now clamps invalid values **while typing** across setup, origination, affordability, insurance, loan products, and asset register — not only on save.

**Highlights your team will notice:**

- Loan amount capped to product **max capital**; cooling-off capped at **30**; instalment period minimum **1**
- SASSA grant and bank-income mirrors clamp immediately on edit (bonus categories included)
- Commission rates, insurance min/max ages, corporate bank account length, and asset-register negatives
- Credit enquiry consent defaults **unchecked** with an explicit consent step
- Purpose-based **max lengths** on free-text fields repo-wide (MAS-363 Item 15)
{% hint style="info" %}
**Why it matters:** Invalid numbers may snap back or show a toast when stripped — intentional data-quality protection, not a sync fault.

**Who is affected:** All operators on affected screens; no config toggle — guardrails apply automatically after deploy.
{% endhint %}

#### Setup & maintenance polish (MOB-909 Phase 4)

**What changed:** A batch of setup and maintenance fixes improves day-to-day admin work:

- **Online Webapp** — saving an unchanged subdomain no longer fails with “domain already exists”
- **Fileshare** — clearer helper text; offline upload shows a network message first (no false success)
- **Audit Logs** — Client column no longer overwrites Modified From View; Client Filter always visible
- **Cashbox** — cancel rolls back cleanly; “Transfer to…” prefix no longer stacks
- **Loan maintenance** — agent summary refreshes; area dropdown lists all active branch areas
- **Summary columns** — Agents / Areas / Employers / Users show count columns in 2nd position with highlight
- **Broadcast** — new broadcast default end time is ~**1 hour** after start, not ~1 day
- **Users rights** — self-edit from Maintenance → Users matches the Operator path
{% hint style="info" %}
**Why it matters:** Fewer false errors and clearer maintenance workflows for administrators.

**Who is affected:** Setup and maintenance users across branches.
{% endhint %}

#### Loan agreement instalment schedule — clearer column labels

**What changed:** On the loan agreement PDF, schedule columns are now **Period Start** and **Instalment Due** (was Start / End), with a note under the schedule explaining accrual start vs payment due date.
{% hint style="info" %}
**Why it matters:** Payroll teams were misreading row 1 **Start** as the first deduction date.

**Who is affected:** All branches generating loan agreements after deploy. Amortisation maths and section order are unchanged — presentation only. Regenerate via payout or `loan_payout_recreator` to pick up the new template.
{% endhint %}

***

### 🛠️ Improvements & Fixes

#### Origination & affordability

* **NCR living-expenses shortfall refreshes when income changes** (advanced affordability) — changing gross or bonus no longer leaves the shortfall stuck on a prior income tier
* **Configuration save stays on screen** when validation fails — Setup → Configuration jumps to the first invalid field instead of dismissing to Setup
* **Origination client screen** no longer stays blank if async loaders stall — 15s safety timeout unblocks the UI
* **Bonus polish** — shared-expenses payout PDF includes expected bonus; counter-offer rebuild keeps the loan’s discount %; bank-income validation copy mentions bonus when captured

#### Payments & Allps

* **Past presentment dates blocked with a clear warning** on Allps Promissory create/edit/add — no more opaque Allps reject dialogs for past first-instalment dates
* **GEPF / SASSA promissory flags** — New Promissory no longer shows mixed tracking fields when loan and client categories disagree; SEFT Mobile **first_dt** uses grant-indicator dates (matches payout)

#### Reporting & finance

* **Bengil Credit Life Insurance** export now includes loans receipted in the period even when no scheduled transaction falls on those dates (Metrofin parity with Report 74)
* **Payroll Remittance / Batch Receipt** totals refresh after Client Ledger without re-login; excluded instalments no longer inflate confirm amounts
* **BI dashboard — horizontal scroll on narrow screens** — on **Reporting → BI dashboard**, chart cards on the right (e.g. **Loan Composition**) are no longer clipped on tablets or narrow desktop windows. Swipe or drag horizontally inside the dashboard to reach all charts. Vertical scroll stays on the page — not duplicated inside the chart area. No new rights or filters.

#### Reports & background processing

* **False “Token expired” outside South Africa** — operators or devices outside **SAST** (or with a non-SA device timezone) no longer get a false **Token expired. Check device time** when running reports or other background steps from the app, as long as the device clock is correct.

***

### Setup & admin checklist

| Decision | Where |
| --- | --- |
| Digital statement waiver on Documents | Category must allow digital bank statements; Gathr statement on repayment account |
| Restore archived user duplicate | Setup → Users — early toast when email/cell matches archived record |
| Field limits / clamps | Automatic on affected screens — no config toggle |
| Loan agreement PDF labels | Regenerate via payout or recreator task |
| BI dashboard scroll | No action required — applies after the central update |

Branches need no local install — the release is applied centrally. Force-close and reopen the app after deploy so schema and bundle changes sync cleanly.
