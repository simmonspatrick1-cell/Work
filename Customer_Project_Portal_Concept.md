# Customer Project Portal — Concept Artifact

Below is a conceptual artifact showing how a customer-facing project management portal for SuiteProjects could look. This demonstrates layout, sections, and information flow from the client perspective.

---

### Login
```
+-------------------------------------+
| Client Portal                      |
|                                     |
| Email: [______________________]     |
| Password: [___________________]     |
|                                     |
| [ Login ]                           |
+-------------------------------------+
```

### Dashboard
```
+-----------------------------------------------+
| Welcome, ClientName                           |
|-----------------------------------------------|
| Project Status Overview                       |
| - Active Projects: 4                          |
| - Invoices Due: $42,300                       |
| - Next Milestone: 'Design Review 2/14'        |
|-----------------------------------------------|
| Projects                                      |
| [Project Alpha] [VIEW] Status: On Track       |
| [ERP Rollout]   [VIEW] Status: At Risk        |
| [Data Migration] [VIEW] Status: On Track      |
+-----------------------------------------------+
```

### Project Detail
```
+-----------------------------------------------+
| Project: ERP Rollout                         |
| Status: At Risk                              |
| % Complete: 64%                              |
|-----------------------------------------------|
| Navigation                                   |
| Overview | Tasks | Deliverables | Invoices |  |
| Files | Messages                             |
|-----------------------------------------------|
| Overview                                     |
| Timeline: [■■■■■■■■■■■■■■■■■]                |
| Budget: $220k / $310k                        |
| Next Milestone: UAT Prep (Due 2/16)          |
| Risks: Scope creep identified                |
+-----------------------------------------------+
```

### Tasks & Deliverables
```
+------------------------------------------------+
| Tasks                                          |
| - Discovery (Done)                             |
| - Config Workshops (In Progress)               |
| - UAT Prep (Not Started)                       |
|------------------------------------------------|
| Deliverables                                   |
| Doc: Requirements Spec Status: Approved        |
| Doc: Design Blueprint Status: Review           |
| Doc: Config Workbook Status: Pending           |
+------------------------------------------------+
```

### Invoices & Payments
```
+-----------------------------------------------+
| Invoice History                              |
|-----------------------------------------------|
| INV-1043 $12,000 Due 2/10 [ PAY NOW ]        |
| INV-1001 $12,000 Paid    [ VIEW ]            |
| INV-0950 $12,000 Paid    [ VIEW ]            |
+-----------------------------------------------+
```

### Messages/Files
```
+-----------------------------------------------+
| Messages & Files                             |
|-----------------------------------------------|
| PM: Uploaded updated timeline.pdf             |
| Client: Approved phase 1 deliverables         |
|-----------------------------------------------|
| Upload File: [Choose File] [ Upload ]         |
| Send Message: [_______________________] Send  |
+-----------------------------------------------+
```

---

## 🚀 Deployment Instructions (Quick)
- Import via GitHub repo
- Download `customer-portal-vercel-git.zip`
- Go to https://github.com/new/import
- Drag, drop, Commit & Create -> you’re ready!
- Deploy to Vercel using included configuration.

---

## 🔌 SuiteScript / NetSuite Integration Planned (Phase 2)
- Suitelet data fetch for Projects
- Token-based auth or OAuth2
- Saved search endpoints:
  - Portal Active Projects
  - Project Tasks
  - Deliverables
  - Invoice List

---

## 🎯 Planned Enhancements

| Upgrade            | Purpose                                 |
|--------------------|-----------------------------------------|
| Mobile-first UI    | Field access for project teams           |
| File uploads       | File Cabinet → approval flow             |
| Message threads    | Customer ↔ PM collaboration              |
| Payments           | Invoice → SuitePayments                  |
| Slack notifications| CSAT → channel alerts                    |
| Role-based access  | Client / Exec / PM                       |
| SuiteApp packaging | Marketplace ready artifact               |

---

## 🗂️ Links Generated

> All assets delivered via ChatGPT file transfers — include them in `/assets/` folder

| File                                 | Notes                |
|---------------------------------------|----------------------|
| customer_portal_clickable_prototype.html | Prototype UI      |
| customer-portal-vercel.zip               | Next.js demo site  |
| customer-portal-vercel-git.zip           | Git-ready repo     |

---

## 🧾 Author Notes

**This project originated from an AI-assisted SuiteApp ideation session**, focused on:
- Extending SuiteProjects offering
- Giving clients high-trust visibility into delivery
- Improving presales storytelling for NetSuite PS

This doc preserves the development trail for transparency and handoff.

---

### 👋 Next Step Ideas
Run:
- Add Suitelet proxy
- Add NetSuite OAuth
- Enterprise mode
- SuiteApp packaging

To continue build activations.

> _Built collaboratively with AI. For internal enablement, proof of concept, and GTM exploration._

---
_Last updated: 2025-11-05_