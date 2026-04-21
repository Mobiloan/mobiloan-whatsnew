---
description: What's New
---

# 4.84.10 - WhatsApp Support Ticketing

## 🚀 New Features

### 4.84.10 - WhatsApp Support Ticketing

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

If you want, I can also match this _exactly_ to your GitBook markdown format (including callouts and cards).

### 4.84.00 - New Work Address Field and Payment Allocation updates

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

***

#### 🆕 Payment Allocation Updates

Insurance Payment allocation in Mobiloan is now fully automated. When a new loan is created (after the promissory step), the system automatically runs the set payment allocation call to amplifin.

This runs only at loan creation (with an overnight retry for same-day loans if needed). It is not triggered manually.

⚠️ Automation requires the branch to have the relevant loan insurance product enabled.&#x20;

***

### 4.83.00 - Government Pension (GEPF) Updates

_Release Date :  27 March 2026_

Mobiloan now supports  [**Fixed payment schedules**](./#fixed-payment-schedules) , [**Government Pension Tracking Days**](./#government-pension-tracking-days), [**Pension Payment Type Selection (Client Profile)**](./#pension-payment-type-selection-client-profile) and other [**related updates**](./#related-updates)

***

#### 🆕 Fixed payment schedules&#x20;

A new **Pension Payment Dates** dialog is available across Setup, Origination, and Collection screens. This provides a clear, fixed reference of Government Pension (GEPF) payment schedules.

<div align="left"><figure><img src=".gitbook/assets/image (1).png" alt="" width="375"><figcaption></figcaption></figure></div>

<table><thead><tr><th width="183.302978515625">Column</th><th>Description</th></tr></thead><tbody><tr><td><strong>Payment Cycle</strong></td><td>The pension month the payment applies to (i.e. which calendar month the pension belongs to).</td></tr><tr><td><strong>End of Month</strong></td><td>Used for <strong>Paid in Arrears</strong> – payment occurs at the end of the month (or nearest preceding working day if it falls on a weekend/public holiday).</td></tr><tr><td><strong>Beginning of Month</strong></td><td>Used for <strong>Paid in Advance</strong> – payment occurs at the start of the month (or nearest preceding working day if it falls on a weekend/public holiday).</td></tr></tbody></table>

***

#### 🆕 Government Pension Tracking Days

A new configuration option has been introduced to support Government Pension collection behaviour.

`Setup Menu > Category Setup > Select a Governemnt Pensioner Category >  Transaction Configuration`&#x20;

<div align="left"><figure><img src=".gitbook/assets/image (2).png" alt="" width="375"><figcaption></figcaption></figure></div>

<table><thead><tr><th width="147.181884765625">Field</th><th width="460">Description</th><th>Options</th></tr></thead><tbody><tr><td><strong>Government Pension Tracking Days</strong></td><td>Defines how long debit collections are tracked relative to GEPF payout timing</td><td>0 (None) to 10 Days</td></tr></tbody></table>

{% hint style="info" %}
#### Special Case: Variable Payment Type

If the **Pension Payment Type is set to  = “Day in month varies”**:

* The fixed GEPF schedule **does not apply**
* Users must manually select:
  * First instalment date
  * First debit date
* Standard tracking days and date adjustment rules are used\
  (same as other DebiCheck categories)
{% endhint %}

***

#### 🆕Pension Payment Type Selection (Client Profile)

When profiling a Government Pension client, you must set **“When does the pensioner get paid?”**

<figure><img src=".gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

<table><thead><tr><th width="269.3636474609375">Option</th><th>Description</th></tr></thead><tbody><tr><td><strong>End of month</strong></td><td>Follows arrears schedule (aligned to GEPF end-of-month dates)</td></tr><tr><td><strong>Beginning of month</strong></td><td>Follows advance schedule (aligned to GEPF start-of-month dates)</td></tr><tr><td><strong>Day in month varies</strong></td><td>Not tied to GEPF schedule; user manually sets instalment and debit details</td></tr></tbody></table>

***

#### Related Updates&#x20;

**Collection Module**

* Now Displays:
  * Pension Payment Type
  * Pension Payout Month (for scheduled types)

**Presentment Dates on Promissory Screen:**

* Hidden for scheduled pension loans
* Visible for “Day in Month Varies” (behaves like standard loans)

**Collection Behaviour:**

* Scheduled → follows GEPF cycles
* Day varies → follows user-defined dates

#### Future Loans

**Scheduled:**

* First instalment aligns with the next GEPF cycle

**Day in Month Varies:**

* Follows manually selected dates and rules



***

### 4.82.48 - Allps Wallet Rights

Allps Wallet Rights are role-based permissions that control which staff users can perform wallet-related actions in Mobiloan.

These actions include:

* Creating card or cellphone wallets
* Linking or unlinking cards
* Linking mailers
* Linking or unlinking cellphones

By default, roles named **“Super User”** and **“Branch Manager”** have these permissions enabled.

#### ⚙️ How to Enable Allps Wallet Rights ?&#x20;

1. Navigate to **Roles** and select an existing role (or create a new one)
2. Open the **Maintenance** section within the role setup
3. Locate **Allps Wallet Rights** (Allps Wallet actions checklist)
4. Select the actions the role should be allowed to perform
5. Save the role

For more information- select the link below :&#x20;

{% embed url="https://docs.mobiloan.io/setup-and-config/setup-menu/role-setup.role_detail/maintenance-rights#allps-wallet-rights" %}

{% hint style="info" %}
* Only users with permission to edit roles can manage these settings
* Super-user restrictions on the role screen may limit access to these options
{% endhint %}

***



### 4.82.41 - Cost Apportionment Improvements

_Release Date :  03 December 2025_

We’ve implemented a better structured Cost Apportionment Rationale within our internal loan transaction apportionment mechanisms which determines exactly how each payment is allocated.&#x20;

Funds now follow a strict hierarchy that safeguards the loan asset, clears penalties first, and applies principal reduction only after all other obligations are met.

This sequence ensures:\
• mandatory protections (like credit life and insurance) stay active\
• penalties and arrears are settled before they grow\
• core fees and interest are fully covered\
• principal and discounts are applied last for accurate balance reduction

#### Related Documentation - [📕Cost Apportionment Priority Rationale](https://docs.mobiloan.io/automation/cost-apportionment-priority-rationale)

***

### 4.81.50 - Apply Early Loan Settlement Schedules

_**Release Date: 22 November**_

We’ve updated how **early loan settlements** are handled to make sure payments are applied correctly and fairly.

When a loan is **settled early (before an instalment is due)**:

* The settlement amount is now applied **only to the outstanding capital**.
* **Future or unrealized charges** (such as interest, service fees, insurance, or credit life) are **no longer included** in the settlement.
* When an **instalment is already due**:
  * The system continues to use the **existing payment allocation order**, just as before.

Previously, early settlements could incorrectly reduce fees and interest that had not yet been earned. This update ensures that:

* Customers only pay what they actually owe at the time of settlement.
* Loan balances and reports remain accurate.

**You will now see a button to apply the early settlement schedule to the loan manually if required. Previously, the loan schedule remained unchanged from the original schedule.**

#### Related Documentation 📕 -  [Applying Early Settlement Schedule (Loan Ledger)](https://docs.mobiloan.io/main-menu/transaction-menu/client-ledger/loan-ledger#id-2-apply-undo-early-settlement-schedule)

***

### 4.81.00 - WhatsApp Document Uploader&#x20;

_Release Date :  27 October 2025_

We’ve introduced a new, easier way to collect documents from clients directly through **WhatsApp**.

* **WhatsApp Document Upload**
  * Consultants can now request documents from clients using WhatsApp.
  * Clients simply scan a QR code or click a shared link to start the conversation in WhatsApp.
  * The client then selects the document type and uploads it directly from their phone (gallery or photos).
* **Automatic Import to Mobiloan**
  * Once documents are submitted via WhatsApp, all the files are automatically imported and organized under **Latest Client Documents**.
* **Multiple Access Points**
  * Available in **Client/Loan menu → Documents tab** and more primarily within **Document Capture step of the New Loan workflow**.

#### Related Documentation 📕 - [How to upload documents using WhatsApp](https://faq.mobiloan.io/main-menu/origination-faq/how-to-upload-documents-using-whatsapp)

***

### 4.80.70 - Component‑Based Commission Rules

_Release Date :_ _07 October_

Previously, commissions were calculated **only on Loan Capital**. We’ve now introduced **component‑based commission calculations**, allowing more flexible and accurate commission structures.

#### Key Enhancements

* **New calculation base options**:\
  Commission can now be calculated on:
  * Loan Capital
  * Voluntary Insurance
  * Credit Life
  * Total Repayment
* **New “Commission Requirement” column**:
  * **Required** – Commission applies only if the component exists
  * **Optional** – Commission applies when the component is present
* **Multiple components per rule**:\
  Define separate commission conditions for different loan components.
* **Backward compatible**:\
  Existing rules continue to use **Loan Capital** by default—no changes needed.

#### Related Documentation 📕 -  [Understanding and Using the Commission Rule Table](https://docs.mobiloan.io/setup-and-config/setup-menu/ccommission-setup.commission_selection#understanding-and-using-the-commission-rule-table)

***

### 4.80.70 - Dual Debit Orders for Bank Switching Scenarios&#x20;

We’ve introduced a new enhancement that allows consultants to set up **two active bank accounts** on a client profile and duplicate debit orders across both.&#x20;

#### Key New  Features

* **Two Active Bank Accounts -** Consultants can now add and activate a secondary bank account on a client profile. Both accounts can be flagged as eligible for **Dual Deductions**.
* **Dual Debit Orders -** Instead of splitting the debit amount across accounts, the system now duplicates the **full debit order** against both active accounts.
* **Automatic Handling During Collection**
  * Debit orders are submitted to both accounts simultaneously.
  * If one debit succeeds and the other fails, the repayment schedule updates with the successful debit.
  * If both succeed, the system prevents over-collection and reconciles or refunds the duplicate payment to maintain client trust.

#### Related Documentation 📕

* Category Setup - [How to enable dual debit orders](https://docs.mobiloan.io/setup-and-config/setup-menu/category-setup.category_detail#allow-dual-debit-order-toggle-switch)
* Origination Workflow- [Adding dual bank accounts in the transaction step](https://docs.mobiloan.io/main-menu/origination-menu/new-loan.origination_status/step-6-transaction#secondary-backup-bank-account-for-dual-debit-order)
* Payout Workflow - [Creating a dual full value mandate](https://docs.mobiloan.io/main-menu/origination-menu/payout-process.payout_status/step-2-debit-order-contract-creation/split-and-dual-mandates)

***

### **4.80.60 – Voice OTP Alternative**

_Release Date : 25 August 2025_

To address situations where OTPs may not be delivered due to carrier issues, we’ve introduced a new option alongside our existing WhatsApp OTP feature — **Voice OTP**.

With this feature, the system automatically initiates a call to the client’s cellphone number. Once the call is answered, an automated voice will clearly read out the **4‑digit OTP three times** before ending the call, ensuring the client has ample time to note and correctly enter the code.

* 📞 _**For more information on using Voice Call as an alternative OTP verification method, click**_ [_**here**_](https://faq.mobiloan.io/main-menu/origination-faq#how-do-i-retrieve-a-voice-otp)
* **⚙️&#x20;**_**For more information on enabling Voice OTP as an additional OTP method, click**_ [_**here**_](https://faq.mobiloan.io/main-menu/origination-faq#how-to-enable-alternative-otp-methods)

***

### **4.80.50 – WhatsApp OTP Alternative**

_Release Date : 19 August 2025_

In response to cases where OTPs are not received due to carrier issues, we’ve added a new feature in **App Configuration** that allows users to select **WhatsApp** as an alternative method for receiving OTPs.

**How to Enable:**

1. Go to **Setup Menu > Configuration> SMS Settings**.
2. Enable the **WhatsApp toggle**.

Once enabled, whenever you request an OTP, Mobiloan will prompt you to choose between **SMS** and **WhatsApp**.

📘 _**For more information on using WhatsApp as an alternative OTP verification method, click**_ [_**here**_](https://docs.mobiloan.io/main-menu/origination-menu/new-loan.origination_status/step-1-new-loan#otp-requirement)

***

### **4.80.34 – Report Sampling on Support Desk**&#x20;

#### Release Date : 29 July 2025

In response to frequent custom report requests, we’ve introduced a new feature on the Support Desk: A **sample data table** in the “New Ticket” dialog.&#x20;

Users can now **input column headers and sample rows** to illustrate the structure of a custom report they’d like the Mobiloan team to develop.

**How to Access:**

* Navigate to the **Hamburger Menu** > **Help and Support** > **Mobiloan Support Desk**
* Click the **“+”** icon to add a new ticket
* Under **“Ticket Type”**, select **“Report Request”**
* Begin entering your **sample data** directly into the table provided

📘 _**For more information on how to sample a custom report within the support desk**_**&#x20;- click**[ _**here**_](https://docs.mobiloan.io/getting-started/help-and-support.zendesk_detail#requesting-a-custom-report)

***

### 4.80.33 - Reassign Collection Tickets Between Operators&#x20;

#### Release Date : 29 July 2025

Users can now **reassign active collection tickets** from one operator to another using the new **“Reassign Collection Tickets”** button, available in the action button group within the **Collection Menu Screen**.

**Access Management:** Ensure your role has the **“Bulk Assign Users For Collection”** permission enabled. If unsure, check with a **super user** or **branch manager**.

1. **Go to:** `Collection Menu` in `Main Menu > Collection Module > All Active Tickets`
2. Click the **secondary options** button (right-hand side, down arrow next to the primary button).
3. Select **"Reassign Collection Tickets"** to open the reassignment dialog.

📕 _**For more information on the-assignment process itself**_**&#x20;-** click [_**here**_ ](https://docs.mobiloan.io/main-menu/collection-menu/all-active-tickets#reassign-ticket-functionality)

📘 _**For more information on the collection role rights that govern the availability**_**&#x20;-** click[ _**here**_ ](https://docs.mobiloan.io/setup-and-config/setup-menu/role-setup.role_detail#step-3-grant-collection-rights)

***

### 4.80.32 - SACRRA File Download Tool - Enhanced Upload Confirmation

#### Release Date : 26 June 2025

The **SACRRA File Download Tool** has been enhanced to further streamline the **verification** and retrieval of credit data submissions. It allows for the downloading of daily, weekly, and monthly SACRRA submissions to credit bureaus, supports data integrity, manages credit data updates, and provides audit trails for compliance.

**Key Improvement**\
A new **Upload Confirmation** feature has been introduced to validate that the selected file was successfully submitted to the credit bureaus.

The tool now includes two buttons under **"Submission Date"**:

* **Retrieve Upload Confirmation** – Use this to **verify submission status** without downloading the file. It opens a modal displaying a summary table of relevant fields and a confirmation status, ensuring the file has been properly submitted.
* **Retrieve File Download** – Use this when you require the **actual submission file** for record-keeping or resubmission. This will initiate a download to your local system.

📕 _For more information about this feature, click_ [_**here**_](https://docs.mobiloan.io/main-menu/reporting/advanced-reporting#saccra-file-download-tool)

***

### 4.80.31 Improve Login UX and Security Handling

**Release Date : 25 June 2025**&#x20;

We’ve enhanced the Mobiloan login experience with a more secure, intuitive, and role-aware design—making it easier to manage sessions and prevent accidental changes.

#### **Key Improvements**

* **Secure Login Fields**: User ID and password fields are now locked while logged in to prevent accidental changes.
* **Smart Button Logic**:
  * See **"Login"** if not signed in.
  * See **"Home"** once logged in.
  * **"Clear"** is now labeled as **"Logout"**.
* **Role-Based Auto-Logout**: Admins can configure session timeouts based on user

#### &#x20;**How to Use ?**&#x20;

1. **Launch the app** – tap **Login** if not signed in
2. Once authenticated, use the **Home** and **Logout** buttons as needed
3. Super User's can update **auto-logout times** per role in **Role Setup**

**📕For more information about this feature, click** [_**here**_](https://docs.mobiloan.io/getting-started/installation-and-login.main#automatic-and-manual-logout-control)

***

### 4.80.30 - Document Rotate Tool

**Release Date: 18 June 2025**

You can now rotate any uploaded image or PDF directly within the **Mobiloan** platform—making it easier to correct incorrectly oriented scans and documents.

#### **Key Features**

* **Rotate Documents:** Apply 90°, 180°, or 270° rotations—or flip horizontally/vertically.
* **Mobile-Ready Dialog:** Access the **Rotate Pages** tool from the document viewer with easy tap controls and clear icons.
* **Permanent Rotation:** Changes are saved directly to the file, not just the preview. Thumbnails and previews are also updated automatically.
* **Secure & Audited:** All rotations are logged with timestamp, user, and applied angle.

#### **How to Use ?**

1. **Open** the document upload screen in Mobiloan.
2. **Tap the secondary options button.**&#x20;
3. **Tap Rotate** Tool to launch the rotation dialog
4. **Choose an angle** or flip option
5. **Confirm & Save** — the updated version replaces the old one immediately

**📕For more information about this feature, click** [_**here**_](https://docs.mobiloan.io/main-menu/origination-menu/new-loan.origination_status/step-7-documents#using-the-rotate-tool)

***

### 4.80.20 - Enhanced Employer Selection

#### Release Date: 13/06/2025

Managing employers just got a major upgrade in the **Maintenance Menu**. Here’s what’s new:

#### **Key Improvements**

* **Loads in Batches of 1,000** – lightning-fast even with large datasets
* **Clean Naming Enforced** – no special characters like `()`, `-`, or symbols allowed
* **Auto-Archiving** – only the most recent 1,000 used employers remain active
* **Restore Prompt** – restore archived employers before adding duplicates
* **Streamlined UI** – color-coded statuses, bold highlights, column customization

#### **How to Use It ?**&#x20;

1. Go to **Maintenance > Employer Selection**
2. In the dialog that appears - browse or search across 1,000-sized groups of employers (in alphabetical order)
3. **Sort & filter** by branch, status, or name

**📕For more information about this feature, click** [_**here**_](https://docs.mobiloan.io/main-menu/maintenance-menu/employer#selecting-employers)

***

### 4.80.14 Password Strength Analyzer for Operators

#### Release Date: 09/06/2025

We've introduced a **Password Strength Analyzer** to enhance security for operator accounts and ensure compliance with organizational password policies.

**Key Features:**

* **Real-time Password Analysis**: As operators create or update passwords, the system instantly evaluates strength based on multiple security factors
* **Visual Feedback**: Color-coded indicators (from black/dangerous to green/very strong) and descriptive ratings help operators understand their password security level at a glance
* **Smart Scoring System**: Passwords are scored on a 1-5 scale based on:
  * Length requirements (minimum 8 characters)
  * Character variety (uppercase, lowercase, numbers, symbols)
  * Similarity to username checks
  * Common password pattern detection

**Security Enhancements:**

* **Automated Account Protection**: Operators without passwords are automatically archived to prevent unauthorized access  If a new user is created without setting a password, the account will be automatically archived within 24 hours. This security measure reduces the risk of another user modifying and potentially misusing the unprotected account
* **Enforced Password Requirements**: System validates that passwords meet minimum security standards including mixed case, numbers, and special characters
* **Username Similarity Prevention**: Passwords too similar to usernames receive lower scores with clear warnings

**How It Works:**\
When setting or changing a password, operators see:

* A strength score (1-5)
* A descriptive rating (Dangerous, Weak, Fair, Strong, Very Strong)
* Specific feedback on what makes their password weak (e.g., "too similar to username" or "must contain upper, lower and number")
* Visual color coding for quick assessment

***

### 4.80.00 - MSQL Aurora & **ElastiCache**

#### Release Date: 16/05/2025

#### AWS Aroura:&#x20;

We’re excited to announce a major upgrade that will significantly enhance both performance and reliability across Mobiloan. Our team has migrated our primary database from AWS RDS MySQL to AWS Aurora MySQL. This strategic move allows us to leverage Aurora's advanced features, such as improved scaling capabilities, better fault tolerance, and increased processing speeds. By implementing Aurora, we aim to provide a faster, more resilient experience for our users, along with better handling of high-traffic loads and reduced latency.

#### Why the change to Aroura?&#x20;

* **Speed:** Aurora delivers up to 5x the throughput of standard MySQL, making it ideal for high-transaction environments like Mobiloan. This significant boost in speed enhances user experience and operational efficiency.
* **Auto-Scaling:** Aurora’s storage automatically expands as your data grows, removing the need for manual intervention and reducing administrative effort. This flexible scaling adapts effortlessly to changing data volumes, ensuring consistent performance without the hassle of managing storage limits.
* **High Availability:** Built on a fault-tolerant, distributed storage architecture, Aurora guarantees exceptional uptime and reliability. It enables seamless failover and uninterrupted service.
* **Improved Backups & Recovery:** Aurora provides continuous backups combined with rapid recovery, drastically reducing the risk of data loss and downtime. Its advanced backup system automatically stores and replicates data. Whether recovering from system failures, or data corruption, Aurora’s fast restore capabilities ensure reliable and efficient data management.

#### AWS **ElastiCache:**&#x20;

To boost our system’s efficiency, we’ve integrated **AWS ElastiCache**, bringing high-speed in-memory caching to the platform. This enhancement dramatically speeds up report generation, ensuring that both new reports and recently generated ones load with minimal delay. Users now enjoy near-instant access to reports when regenerating them. With these improvements, reports that once took significant time to produce can now be delivered faster.

Together, these upgrades mark a significant leap forward in Mobiloan’s performance, reliability, and user experience. By harnessing the power of AWS Aurora MySQL and ElastiCache, we are better equipped to support the growing needs of our clients with faster data processing, seamless scalability, and much faster report generation.&#x20;

***

## 🔧 Improvements

***

### 4.82.41 - Improved CSV to Excel Export

_Release Date :  22 January 2026_

We’ve introduced a new system task that converts **CSV files into XLSX (Excel) files** in a safer and more reliable way.

This improvement focuses on handling **large files** without causing memory issues or system instability.

**Key Improvements**

* **Smart file size handling**\
  The system checks the file size before processing:
  * Files under 5MB are processed quickly using the standard method.
  * Files over 5MB are processed using streaming to reduce memory usage.
* **Improved stability for large reports**\
  Large exports no longer overload system memory, helping prevent crashes during report generation.
* **Multiple data source support**\
  Works with both direct data and files from external links or uploaded attachments.
* **Secure temporary storage and download links**\
  Generated Excel files are stored securely and returned with a downloadable link.
* **Enhanced file information**\
  Exported Excel files now include clear metadata (such as creator and title) for better identification and tracking.
* **Better error monitoring**\
  Errors are automatically logged and reported for faster diagnosis and resolution.

**Why This Matters**

This update makes large report exports **more reliable and safer**, significantly reducing the risk of memory errors and ensuring the reporting system continues to perform well under heavy data loads.

***

### 4.80.73 - Login Broadcast Improvements

_Release Date: 20 October 2025_&#x20;

The User Login Broadcast editor has been enhanced to give administrators more control over scheduling. Date and time fields have now been separated, allowing Start Date, End Date, Start Time, and End Time to be configured independently.&#x20;

This update makes it possible to schedule multiple broadcasts on the same day without overlap, while maintaining strict validation to prevent conflicting visibility periods. All existing broadcasts remain fully compatible with the new format.

***

### 4.80.72 - Internet Proxy

_Release Date: 20 October 2025_

Mobiloan external API calls that previously failed due to browser CORS issues will now automatically route through a new CloudCode proxy endpoint.

This means key Mobiloan tasks no longer rely on direct browser calls, so you don’t need to whitelist or blacklist Mobiloan endpoints or IPs on your firewall when setting up a VPN.

&#x20;The system will detect CORS‑related failures and seamlessly send those requests through the proxy, ensuring stable communication without extra network configuration.

***

### 4.80.41 - Making an Agent Required on a New Loan

We’ve introduced a new feature that enforces the capture of an agent when a specific commission rule is selected.\
This is configured in the commission setup and requires the relevant '**Loan Requirement**' column to be set as **Required**, as shown in the screenshot below.

<figure><img src=".gitbook/assets/image (488).png" alt=""><figcaption></figcaption></figure>

This ensures consistency and prevents agents from being captured and linked to a loan at a later stage, as was possible previously.

***

### 4.80.40 - Converting a Passport to an ID Number&#x20;

We've introduced a new feature to help manage clients **who previously used a passport as their primary identification** switches to a **South African ID Number** - you can now easily update their records in the system.

Select the FAQ link below for step-by-step instructions.

{% embed url="https://faq.mobiloan.io/main-menu/maintenance-faq/how-to-update-a-passport-to-an-id-number" %}

***

### 4.80.36 - Application User Conflict Dialog

We've introduced a new feature that ensures **loan originators can work more efficiently without overlap**.

When you open a loan application, the system automatically checks if another user has been working on it recently.&#x20;

If so, you'll see a conflict warning that shows who last accessed the application and when, allowing you to make an informed decision about whether to proceed- as shown in the screenshot below.

<figure><img src=".gitbook/assets/image (487).png" alt="" width="373"><figcaption></figcaption></figure>

***

### 4.80.35 - Specify interest calculation method&#x20;

Added a radio switch toggle to let users choose their preferred interest calculation method: "Fixed 30 Days" or "Actual Number of Days."

#### How the Weighted Average Works:

1. **Iterates through each month** in the loan period
2. **For partial months**: Calculates only the days that fall within the loan period
3. **For full months**: Includes all days in that month
4. **Final calculation**: `weighted_total / total_days_in_range`

#### Example Calculation Difference:

For a loan from January 15 to March 15:

* **Fixed 30 Days**: Uses 30 days for each month
* **Actual Days**:
  * January: 17 days (from 15th to 31st)
  * February: 28 or 29 days (full month)
  * March: 15 days (1st to 15th)
  * Weighted average would account for these actual days

***

### 4.80.15 - Record and Display Re-evaluator on Loan Summary Table

#### Release Date: 03/06/2025

We've added dedicated support for the "Re-evaluator" role in the loan processing workflow, enhancing how the system tracks evaluation activities. The system now distinguishes between initial evaluations and re-evaluations, capturing the specific operator who performed each action for improved accountability.&#x20;

**How it Works?**&#x20;

The Loan Summary Table has been updated to include a dedicated "Re-evaluator" field alongside existing roles (Agent, Originator, Evaluator, Payer, Canceller), providing complete visibility of all loan processing participants. Re-evaluator actions are now fully integrated into the loan action menu system, allowing operators with re-evaluator roles to access appropriate functions based on their permissions while maintaining consistency with existing role-based workflows.&#x20;

This enhancement ensures accurate tracking and clear differentiation between initial loan assessments and subsequent re-evaluations throughout the loan lifecycle.

***

### 4.80.13 - Surephrase optionally available to all to operators

#### Release Date: 03/06/2025

SurePhrase is no longer limited to specific user roles. Any operator can now enable SurePhrase for enhanced account security.

What is SurePhrase?

SurePhrase Passkey adds an extra layer of protection by requiring users to enter randomized characters from a unique 8-character passkey during login.

**How It Works:**

* **Unique Passkey Setup:**\
  During operator enrollment, create and securely save an 8-character passkey.
* **Dynamic Randomized Prompts:**\
  At each login, the system requests random characters from your passkey — never the full passkey at once — making it much harder for unauthorized users to gain access.

By enabling SurePhrase, you significantly reduce the risk of credential theft and unauthorized access to your account.

***

### 4.80.12 - Google sync now permitted on custom reports

#### Release Date: 05/06/2025

We've expanded our Google Sheets synchronization functionality! While this powerful tool was previously limited to Mobiloan standard reports, it's now available for custom reports as well.

**Key Benefits:**

* **Automated Updates**: Set your preferred synchronization schedule and let the system handle the rest
* **Effortless Access**: No more manual report pulling - simply open your Google Sheets whenever you need the data
* **Shared Collaboration**: Reports automatically sync to your designated shared folder for easy team access
* **Reliable Accuracy**: Data stays current based on your chosen synchronization frequency, ensuring you always work with up-to-date information

This enhancement eliminates the repetitive task of manually generating reports while maintaining data accuracy according to your specified schedule. Access your custom reports directly in Google Sheets with confidence that the results reflect the latest synchronized data.

***

### 4.80.11 - Compare Signature feature now available from the Client Menu

#### Release Date: 02/06/2025

We’ve enhanced the **Compare Signature** feature for greater convenience and security. Previously accessible only during loan origination, this functionality is now available directly from the **Client Menu**.

Evaluators can now compare signatures from the previous loan alongside the current loan’s signature at any time.

***

### 4.80.10 - Trading Name moved from Company to Branch

#### Release Date: 29/05/2025

The **Trading Name** has been moved from the Company level to the Branch level.

This change allows each branch to have its own independent trading name, providing greater flexibility within Mobiloan.

With this update, branches can better reflect their individual branding and operations, enhancing customization across your organization.

***

## 🐛 Bug Fixes

### 4.80.12 - Loan Insurance validation before Payment Allocation

#### Release Date: 03/06/2025

Before confirming insurance setup, the system now checks whether selected branches are correctly activated for loan payment allocation. This helps prevent issues with payment collection down the line.

* Branches that are not properly activated will be automatically removed from the selection.
* A clear summary will show which branches are active and which are not—making it easier to take action.

### 4.80.12 - Restored "Issue Severity" option when creating a support ticket

#### Release Date : 05/06/2025

The **Issue Severity** priority dropdown is back! You can now prioritize your support tickets again when submitting them.

**Why This Matters:**

* **Set Priority Levels**: Choose from Critical, High, Medium, or Low to indicate urgency
* **Faster Resolution**: Help our support team quickly identify and address critical issues first
* **Better Communication**: Ensure your urgent matters get the appropriate attention

When creating a support ticket, simply select the severity level that best matches your issue's impact. This helps us allocate resources effectively and resolve your most pressing concerns promptly.

