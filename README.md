# 🚀 SkillBridge AI  
### Intelligent CV & Job Match Analyzer  

SkillBridge AI is an AI-powered web application that analyzes a user's CV against a job description and provides actionable optimization insights.

It helps job seekers understand how well they match a role before applying — increasing interview chances and reducing blind applications.

---

## 🌍 Live Demo  

🔗 Live URL: https://your-live-link.vercel.app  

---

## 📌 Problem Statement  

Many graduates and job seekers apply for roles without properly tailoring their CVs to specific job descriptions.

As a result:
- Important keywords are missing  
- Applicant Tracking Systems (ATS) reject applications  
- Achievements lack measurable impact  
- Applicants receive rejections without clear feedback  

There is a need for an intelligent tool that evaluates and improves CVs before submission.

---

## 💡 Solution  

SkillBridge AI analyzes:

- CV content  
- Job description  

And generates:

- 📊 Job Match Score (0–100%)  
- 🔎 Missing Skills Detection  
- ✍ Smart Bullet Rewriting  
- 📄 ATS Optimization Feedback  
- ⬇ Downloadable Optimized Output  

All results are generated in real time using AI-assisted text processing.

---

## ✨ Core Features  

### 1️⃣ CV & Job Match Score  
Calculates compatibility percentage based on:
- Keyword overlap  
- Skill alignment  
- Role relevance  

### 2️⃣ Missing Skills Detector  
Extracts required skills from the job description and identifies gaps in the CV.

### 3️⃣ Smart Bullet Rewriter (AI-Powered)  
Transforms weak CV statements into strong, achievement-based bullet points.

**Example:**

Before:
> Worked on a website.

After:
> Developed and deployed a responsive web application using Next.js and TypeScript, improving performance by 30%.

### 4️⃣ ATS Optimization Feedback  
Provides insights on:
- Weak action verbs  
- Missing measurable achievements  
- Generic phrasing  
- Formatting risks  

### 5️⃣ Download Optimized Version  
Users can download AI-enhanced CV content for refinement and submission.

---

## 🏗 System Architecture  

Client → API Route → AI Processing → Structured Response → UI Rendering  

The backend processes structured prompts and returns formatted JSON responses used to generate scores, suggestions, and improvements.

---

## 🛠 Tech Stack  

### Frontend  
- React-router  
- TypeScript  
- Tailwind CSS  

### Backend  
- vite API Routes  
- OpenAI API  

### Deployment  
- Vercel  

### Version Control  
- GitHub  

---

## 📂 Project Structure  

```bash
skillbridge-ai/
│
├── app/
│   ├── component/
        ├── ScoreCard.tsx
│       ├── SkillsList.tsx
│       ├── RewriteSection.tsx
        ├──ats.tsx
│       ├── scoring.ts
│       ├── scoregauge/
│       ├── summary/
│
├── constants/
│   
│
├── public/
│
├── types/
│
└── README.md
```

---

## ⚙ Installation & Setup  

Clone the repository:

```bash
git clone https://github.com/genzybas/skillbridge-ai.git
```

Navigate into the project:

```bash
cd skillbridge-ai
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```
OPENAI_API_KEY=your_api_key_here
```

Run locally:

```bash
npm run dev
```

Open in browser:

```
Your application will be available at `http://localhost:5173`.
```

---

## 🚀 Deployment  

The application is deployed using Vercel.

You can deploy by:

```bash
vercel
```

Or connect your GitHub repository directly to Vercel.

---

## 🧠 AI Implementation  

The AI system:

1. Receives CV + Job Description  
2. Extracts structured insights  
3. Generates:
   - Match score  
   - Missing skills  
   - Rewritten bullets  
   - ATS feedback  
4. Returns structured JSON output for UI rendering  

Prompt engineering is used to ensure consistent and structured responses.

---

## 📈 Scalability Potential  

Future improvements may include:

- User authentication  
- CV upload (PDF parsing)  
- Saved analysis history  
- Industry-specific optimization models  
- LinkedIn profile integration  
- Subscription-based SaaS model  

---

## 👨‍💻 Author  

Genzy Bassey  
Frontend Developer | System Thinker | AI Enthusiast  

---

## 📄 License  

