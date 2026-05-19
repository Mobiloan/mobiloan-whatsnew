# 4.84 Release notes

## 4.84.30 - Collections Simplification & Compliance Tracking

### 🚀 New Features

#### Simpler Collection Tickets (One Per Loan)

Collection tickets have moved from a per-instalment model to a single, consolidated ticket per active loan.

*   **How it Works -** Instead of a separate ticket for every instalment (e.g., 12 tickets for a 12-month loan), there is now only **one active ticket displaying the total outstanding balance**.

    The ticket updates automatically as payments are received and closes automatically once the loan is fully paid and previously suspended tickets will reactivate correctly based on the current balance.
* **The Impact** - Collection staff will see a much cleaner, single-line view per loan rather than a cluttered list of per-instalment entries. This makes prioritizing accounts significantly easier.
* **What to Watch For** -  Fewer Tickets: A massive reduction in overall ticket counts across your branch is completely expected due to this consolidation. If a loan has no ticket, verify if the balance is already fully settled.
* **Action Item for Teams -** Brief your staff immediately: They must know that tickets now reflect the total outstanding loan balance, not a single instalment amount.&#x20;

***

#### Debit Date Alignment Audit Trail

The system now automatically tracks who adjusted SASSA or debit dates on a promissory note and when the change occurred.

*   **How it Works** -  The "Debit dates adjusted" row in the **Promissory User Actions dialog** now explicitly displays the operator's name and a timestamp.

    Tapping this row opens a detailed, instalment-by-instalment breakdown of the alignment result, including tracking and failure statuses. To access this- select the "**Promissory Menu"** primary button in the **'Allps Promissory'** screen and select the "**User Actions"** option from the menu that appears.
* **The Impact** - Branch managers and supervisors get instant, self-service audit visibility.
* **Action Item for Teams -** Inform supervisors and compliance staff: Let them know they can now tap this row for a deep-dive breakdown. Note that the actual process of making date adjustments remains exactly the same.

***

#### FIC KYC Due Date Reminder Notifications

For users with FIC KYC compliance enabled, branch managers can now receive **automated proactive reminders** before a client's KYC review lapses.

* **How it Works** - Reminders are calculated based on the client's current FIC risk level and your system's Risk Relevance Rules. To prevent notification fatigue, the system will send a maximum of one reminder per client, per calendar month.
* **What to Watch For / How to Enable** - Off by Default: This feature is strictly optional and turned off by default. - To activate it, an administrator must navigate to Config → FIC → FIC KYC Due Reminders, toggle it on, and select a preferred reminder lead window (options include 1, 30, 90, 120, 180, or 360 days before the due date).
* **Action Item for Teams** - Because notifications are sent directly to the assigned branch manager of the client's home branch, administrators must ensure that all branch manager assignments are accurately mapped in the system.

***

### 🛠️ Fixed Issues

* Collections: Consolidated multi-ticket loans into a single ticket reflecting the true balance and fixed reactivation of suspended tickets.
* Auditing: Enabled operator name and timestamp logging for promissory debit date adjustments.
* Allps Sessions: Added a validation step before storing session references, significantly reducing intermittent Allps session failures.

***

## 4.84.20 - Stability, Security & Performance Enhancements

_Released: 04 May 2026_

### 🚀 New Features

#### 1. Loan Cancellation — More Reliable Processing

**What changed:** The loan cancellation process has been rebuilt to use the `Journey v4 batch API` instead of the older app-side `OnlineDB.Batch()` approach.

All related records — collection tickets, contra transactions, the Grouprus insurance record, loan transaction rows, and any refund transaction — are now assembled into a single request sent directly to the server. The loan itself is only marked as cancelled after the server confirms that all related records were updated successfully.

If any individual record update fails, subsequent updates are stopped and the loan is not marked as cancelled, leaving the loan in its pre-cancellation state.

{% hint style="info" %}
**Why it matters:**

* Previously, the loan could be marked as cancelled even if related record updates encountered problems, because the loan save and the batch execute were independent sequential operations.
* The loan is now only cancelled once the server has confirmed all related updates succeeded.
* Users will notice a brief server-side processing step before the final loan update completes. This is normal and expected.

**Who is affected:** Any agent performing a loan cancellation, reversal, or write-off of a paid-out loan.
{% endhint %}

#### 2. Security — Encrypted Credentials Across Integrations

**What changed:** Sensitive API tokens and passwords stored in the `config` record are now decrypted at the point of use rather than read as plain text. This affects:

* **Gathr** — `gathr_auth_token` and `gathr_tenant` are now read from the `config` DB record (decrypted) rather than passed as task parameters. Gathr AVS and bank statement webhook flows both use this.
* **Sudonum SMS** — `sudonum_auth_token` is now decrypted before use in the write-off scheduler SMS flow.
* **Loan Product API** — `loan_product_api_pwd` is now decrypted when validating incoming API credentials.

{% hint style="info" %}
**Why it matters:** Credentials are no longer visible in plain text in the database or in task logs. This closes an existing security gap.

**Who is affected:** System administrators who configure credentials in the `config` record — no change in how you set them up, but they must be stored encrypted going forward.
{% endhint %}

#### 3. Allps GUID Scheduler — Improved Error Handling

**What changed:** The Allps GUID scheduler now explicitly throws an error if the Allps API returns anything other than a `reply_cd` of `207` (success). Previously, a failed GUID creation would continue silently, leaving the Allps record without a valid GUID.

{% hint style="info" %}
**Why it matters:** GUID failures are now surfaced immediately in CloudCode logs and will trigger the scheduler's existing retry/reschedule logic rather than being silently swallowed.

**Who is affected:** Lenders using Allps payment integration. Allps admin users who monitor the GUID scheduler task logs.
{% endhint %}

#### 4. Allps API — Keep-Alive Connection Header

**What changed:** All Allps SOAP API calls now include a `Connection: keep-alive` header.

{% hint style="info" %}
**Why it matters:** Reduces connection overhead on high-frequency Allps calls (e.g., payment allocation batch runs and GUID scheduling), improving throughput and reducing timeout-related failures.
{% endhint %}

#### 5. Config Detail — Navigation Refresh Fixed

**What changed:** When a user navigates from the main menu into the Configuration screen and then returns, the global configuration screem is now properly reloaded on the main menu. Previously the stale config values remained active until the next full app reload.

{% hint style="info" %}
**Why it matters:** Config changes take effect immediately on return without needing to log out and back in.

**Who is affected:** Administrators and managers who make config changes during a session.
{% endhint %}

#### 6. Audit Log — Date and Array Comparison Accuracy

**What changed:**

* Date fields are now compared using a normalised `yyyymmdd` format, so cosmetic differences in how a date is represented no longer create spurious audit log entries.
* Array fields are now handled correctly — the sorted, filtered value is returned for comparison instead of falling through to unrelated checks.
* The `date_created` field filter has been removed; changes to `date_created` are now captured in the audit log.

{% hint style="info" %}
**Why it matters:** Audit logs are more accurate — fewer false-positive change entries, and previously untracked `date_created` changes are now visible.
{% endhint %}

#### 7. Removed: QR Image Decoder and S3 Temp Services

**What changed:** Two CloudCode services have been removed:

* `qr_image_decoder` — QR code image decoding service
* `s3_temp` — Temporary S3 utility service

{% hint style="info" %}
**Why it matters:** These services were legacy/scratch utilities no longer in active use. Their removal reduces the CloudCode surface area and build time.
{% endhint %}

***

#### 8. Tools Menu — Label Update

**What changed:** The "Affordability Assessment" button in the Tools menu has been relabelled to **"Affordability"** to fit the button grid layout more cleanly.

**Who is affected:** All users with access to the Tools menu.

***

## 4.84.10 – WhatsApp Support Ticketing

_Released: TBD_

### 🚀 New Features

📱 **New WhatsApp Support Number**

You can now reach our support team directly via WhatsApp using our new dedicated support number.

```
Official Whatsapp Support Number: +1 555-916-2457
```

**How it works:**

* Simply send a message to the WhatsApp number above
* A support ticket will automatically be created
* Our team will respond directly within the chat

That’s it — fast, simple, and seamless support straight from WhatsApp.

***

## 4.84.00 – New Work Address Field and Payment Allocation Updates

_Released: TBD_

### 🚀 New Features

#### 🗃️ New Work Address Field

You can now record a client’s work address separately from their home address, based on product rules. Capture it during loan creation or update it later from the client profile.

_Whether a work address is required depends on the loan category. See the category setup section below for how to enable or configure the work address requirement._

{% embed url="https://docs.mobiloan.io/setup-and-config/setup-menu/category-setup.category_detail#step-5-address-requirements" %}

During loan origination:

* Choose whether an address is home or work
* The summary can display both
* If required, the flow ensures work address is captured

For existing clients:

* Add or update the work address via the client menu
* Home and work addresses remain separate on the profile

_For documentation on the origination address capture workflow, select the user guide link below._

{% embed url="https://docs.mobiloan.io/main-menu/origination-menu/new-loan.origination_status/step-5-client#address-capture" %}

Validation rules for work address match those for home (e.g., street requirements, postal codes, no PO boxes where restricted).

#### 🆕 Payment Allocation Updates

Insurance Payment allocation in Mobiloan is now fully automated. When a new loan is created (after the promissory step), the system automatically runs the set payment allocation call to amplifin.

This runs only at loan creation (with an overnight retry for same-day loans if needed). It is not triggered manually.

⚠️ Automation requires the branch to have the relevant loan insurance product enabled.
