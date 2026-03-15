# 🧠 Nena — Mental Health Chatbot API

> A WhatsApp-based mental health chatbot connecting Kenyans to conversational support in English and Swahili.

In Kenya, **42% of individuals seeking primary care have severe depression**, yet mental health services remain inaccessible to most. Nena bridges this gap by delivering friendly, stigma-free support directly through WhatsApp — no app download, no registration.

---

## 💬 Features
- Conversational mental health support via WhatsApp
- AI-powered responses using Dialogflow Essentials (ES)
- Multilingual-ready — supports both English and Swahili
- Stateless, scalable server hosted on Render

---

## 🏗️ Architecture

```
WhatsApp User
     │
     ▼
  Twilio (WhatsApp API)
     │
     ▼
Node.js / Express Server (Render)
     │
     ▼
  Dialogflow ES (NLP & Intent Matching)
     │
     ▼
  Response → back to WhatsApp User
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Messaging | Twilio WhatsApp API |
| NLP | Dialogflow Essentials (ES) |
| Hosting | Render |

---

## 🚀 Getting Started

**Prerequisites**
- Node.js v18+
- A Twilio account with WhatsApp sandbox enabled
- A Dialogflow ES agent set up
- A Render account for deployment

**Installation**

```bash
git clone https://github.com/innooooo/nena-mental-health-chatbot-api.git
cd nena-mental-health-chatbot-api
npm install
```

**Environment Variables**

Create a `.env` file in the root:

```env
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
DIALOGFLOW_PROJECT_ID=your_project_id
```

**Run locally**

```bash
npm start
```

---

## 👥 Contributors

| Name | Role |
|---|---|
| [Mark Muturi](https://github.com/markmuturi) | Full project — architecture, backend, API integration |
| [innooooo](https://github.com/innooooo) | Collaborator |

---

## 📌 Status

Currently **on hold**. Core functionality is complete. Future plans include:
- Expanding Dialogflow intents for deeper conversations
- Adding a crisis escalation flow (connecting users to hotlines)
- Persistent session support

---

## 📄 License

MIT License — feel free to fork and build on this.

---

> *"For every five Kenyans, one is living with a mental health condition. Nena is a step toward changing that."*
    

