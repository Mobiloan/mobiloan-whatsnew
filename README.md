# 4.84 Release notes

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

⚠️ Automation requires the branch to have the relevant loan insurance product enabled.&#x20;
