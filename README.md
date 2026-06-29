# 🍊 OrangeHRM – Cypress E2E Test Suite

> Automated end-to-end tests for the OrangeHRM web application, built with Cypress.

---

## 👨‍💻 About This Project

This project is part of my journey into **QA automation testing**. Instead of clicking through the app manually every time, I wrote automated tests that do it for me — faster, smarter, and more consistently.

The target application is **OrangeHRM**, an open-source HR management system. All tests run against the live demo environment.

🔗 **App Under Test:** [opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com)

---

## 🧪 What's Being Tested

| Test File | What It Tests |
|---|---|
| `LoginAdmin.cy.js` | Admin login with valid credentials |

> More test cases coming soon: invalid login, dashboard navigation, employee management.

---

## 🛠️ Tech Stack

- **Cypress** v15 — E2E testing framework
- **Node.js** v24 LTS
- **JavaScript** — test language
- **VS Code** — editor

---

## 🚀 How to Run the Tests

### 1. Clone the repo
```bash
git clone https://github.com/YOUR_USERNAME/orangeHRM.git
cd orangeHRM
```

### 2. Install dependencies
```bash
npm install
```

### 3. Open Cypress (interactive mode)
```bash
npx cypress open
```

### 4. Run headless (terminal only)
```bash
npx cypress run
```

---

## 📁 Project Structure

```
orangeHRM/
├── cypress/
│   ├── e2e/
│   │   └── LoginAdmin.cy.js   ← test files
│   ├── fixtures/
│   └── support/
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

---

## 🧠 What I Learned

- Setting up Cypress from scratch in a real project
- Using the Cypress selector playground to find elements
- Writing E2E tests that simulate real user behavior
- Using `beforeEach` to reset state between tests
- Git workflow for a testing project

---

> *"Quality is not an act, it is a habit."* – Aristotle
