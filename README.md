# 🧙 MythicForge — RPG Character Builder with Discord Sync

Welcome to **MythicForge**, a full-stack, fun-focused web app for **creating and managing RPG character sheets**, designed for **Discord-based roleplaying communities**. Built with the modern **T3 Stack** (Next.js, tRPC, Tailwind, Prisma) and powered by **Discord OAuth**, MythicForge helps players craft their heroes and share them with their guilds effortlessly.

---

## ✨ Features

- 🔐 **Discord Authentication** – Secure login via Discord OAuth2  
- 📝 **Character Sheet Builder** – Create rich profiles with stats, backstories, traits, and images  
- 📡 **Guild Sync** – Post or sync characters to Discord channels using webhooks  
- 🧑‍⚖️ **Admin Panel** – Guild leaders can view, approve, or reject character submissions  
- 🔗 **Rich Discord Embeds** – Auto-generate beautifully formatted embeds for approved characters  
- ☁️ **Optional AWS Integration** – Store media (like avatars) in S3, email updates via SES, and log approvals via CloudWatch  

---

## 🚀 Tech Stack

- **Frontend:** Next.js (App Router) + Tailwind CSS  
- **Backend:** tRPC + Prisma (PostgreSQL)  
- **Auth:** NextAuth.js with Discord provider  
- **ORM:** Prisma + PostgreSQL  
- **Hosting:** Vercel / AWS (optional)  

### 🔧 Optional AWS Services

- **S3** – Avatar and image storage  
- **SES** – Email notifications for approvals/rejections  
- **Lambda** – PDF generation or character validation  
- **Secrets Manager** – Securely store Discord tokens and API keys  

---

## 🧪 Upcoming Features

- 🎨 Custom character templates & themes  
- 📜 PDF character sheet export (via AWS Lambda + Puppeteer)  
- 🎭 NPC generation and shared worldbuilding tools  
- 🔍 Search & filter characters by guild, role, or tag  
- 🛡️ Role-based access per guild  

---

## 🧰 Local Development

```bash
git clone https://github.com/yourname/mythicforge.git
cd mythic-forge
npm install
npm eun dev
