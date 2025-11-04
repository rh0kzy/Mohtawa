# AI Social Media Post Scheduler

One app to schedule, auto-generate captions/images with AI, and track analytics across multiple social platforms.

## 🎯 Target Users
- Small businesses
- Influencers
- Marketers

## 🚀 Features
- Multi-platform scheduling (LinkedIn, Instagram, X)
- AI-powered caption generation
- AI image generation
- Analytics & engagement tracking
- Automated posting with queue system
- Subscription & payment integration

## 🛠️ Tech Stack
- **Frontend**: Next.js (React)
- **Backend**: Node.js (Express)
- **Database**: PostgreSQL
- **Queue System**: Redis
- **AI Integration**: OpenAI API
- **Auth**: OAuth 2.0
- **Payments**: Stripe

## 📁 Project Structure
```
ai-social-scheduler/
├── frontend/          # Next.js frontend application
├── backend/           # Node.js backend API
│   ├── src/
│   │   ├── config/    # Configuration files
│   │   ├── models/    # Database models
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── services/  # Business logic
│   │   ├── middleware/
│   │   └── utils/
└── README.md
```

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+)
- PostgreSQL
- Redis
- OpenAI API Key
- Stripe Account

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd ai-social-scheduler
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

4. Set up environment variables (see .env.example files)

5. Run database migrations
```bash
cd backend
npm run migrate
```

6. Start development servers
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

## 📝 License
MIT

## 👨‍💻 Author
Your Name
