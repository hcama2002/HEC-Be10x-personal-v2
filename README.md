# H-AI Solutions — Personal AI Portfolio Website

A fast, responsive, modern, and interactive personal portfolio website for **Havovy Cama**, Founder of **H-AI Solutions | AI & Automation Specialist**.

Positioned specifically for ambitious owner-led SMEs and individuals to turn AI and automation into practical productivity gains without replacing their people.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (`motion/react`)
- **Icons**: Lucide React (`lucide-react`)
- **Architecture**: Static-first, client-rendered, fast loading, zero database/authentication requirement

---

## 🚀 Getting Started Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website in your browser.

### 3. Build for Production
```bash
npm run build
```
This produces an optimized static build in the `dist/` directory.

---

## 🌐 Deploying to Vercel

This repository is ready for 1-click deployment on **Vercel**:

1. Push this repository to **GitHub**.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository.
4. Framework Preset: **Vite** (detected automatically).
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**.

---

## ✏️ Customization Guide

### 1. Where to Edit Personal Information
All core text, credentials, and links are organized in:
📁 `/src/data/portfolioData.ts`

- **Name, Title, Email, LinkedIn**: Modify `PERSONAL_INFO`.
- **Credibility Badges**: Modify `TRUST_STRIP` and `CREDIBILITY_PILLARS`.
- **About Me Copy**: Edit `corePhilosophy` inside `PERSONAL_INFO`.

### 2. Where to Add Future Projects
Open 📁 `/src/data/portfolioData.ts` and update the `PROJECTS_DATA` array:
```typescript
{
  id: "your-project-id",
  title: "New AI Workflow Name",
  technology: "e.g. n8n + Claude + Airtable",
  description: "Short description of the practical solution...",
  status: "Completed", // or "Work in Progress"
  ctaText: "View Details",
  highlights: [
    "Key outcome 1",
    "Key outcome 2"
  ]
}
```

### 3. Where to Update Services & Capabilities
Edit `SERVICES_DATA` in 📁 `/src/data/portfolioData.ts`. You can update descriptions, deliverables, key benefits, and who each service is ideal for.

### 4. Where to Update the AI Toolkit
Edit `AI_TOOLKIT` in 📁 `/src/data/portfolioData.ts` to add or modify tools as you test new frameworks.

### 5. Where to Change Colours and Typography
- **Fonts**: Loaded in `index.html` via Google Fonts (`Plus Jakarta Sans`).
- **Accent Colours**: Built using standard Tailwind utility classes (`text-blue-600`, `bg-blue-600`, `bg-slate-900`). You can globally change accents by searching and replacing `blue-600` with your desired Tailwind color (e.g. `indigo-600` or `teal-600`).
- **Base styles**: Configured in `src/index.css`.

---

## 📄 License & Attribution
© 2026 Havovy Cama. All rights reserved.
