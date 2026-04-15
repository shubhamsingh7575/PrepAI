# 🚀 PrepAI – AI-Powered Career Assistant

PrepAI is a full-stack AI-powered platform designed to help users build strong resumes, generate personalized cover letters, and practice interview questions with real-time feedback.

## ✨ Features

- AI Resume Builder with real-time suggestions powered by Gemini API  
- Cover Letter Generator based on user profile  
- Interview Quiz Practice with instant feedback  
- AI Scorecard Analysis (correct/incorrect answers + explanations)  
- Industry Trends & Skills exploration  
- Secure Authentication using Clerk

## 🌐 Live Demo


## 🛠️ Tech Stack

Frontend:
- Next.js  
- shadcn/ui  
- Tailwind CSS  

Backend & Database:
- Prisma ORM  
- Neon (PostgreSQL)

AI Integration:
- Gemini API  

Authentication:
- Clerk  

Deployment:
- AWS EC2  

## ⚙️ Installation

```bash
git clone https://github.com/your-username/prepai.git
cd prepai
npm install
npm run dev
```

## 🔑 Environment Variables

```
DATABASE_URL=your_neon_db_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
GEMINI_API_KEY=your_gemini_api_key
```

## 🚀 Deployment

- AWS EC2  
- PM2 for process management  
- Nginx for reverse proxy  

## 📌 Future Improvements

- Mock interview (voice-based)  
- Resume ATS score checker  
- Advanced analytics dashboard  

## 📧 Contact

Shubham Singh
