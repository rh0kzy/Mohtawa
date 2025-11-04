# PHASE 2: FOUNDATION SETUP - Complete Guide

## ✅ Step 4: Choose Tech Stack
**Status**: COMPLETED ✓

Tech stack defined:
- Frontend: Next.js (React)
- Backend: Node.js (Express)
- Database: PostgreSQL
- Queue: Redis
- AI: OpenAI API
- Auth: OAuth 2.0
- Payments: Stripe

---

## 📋 Step 5: Project Infrastructure

### 5.1 GitHub Repository Setup

```powershell
# Navigate to project folder
cd C:\Users\PC\Desktop\Studies\Mohtawa\ai-social-scheduler

# Initialize Git repository
git init

# Create initial commit
git add .
git commit -m "Initial project setup - Phase 2 complete"

# Create branches
git branch develop
git branch feature/auth
git branch feature/scheduler
git branch feature/ai-integration

# Connect to GitHub (create repo on GitHub first)
git remote add origin https://github.com/YOUR_USERNAME/ai-social-scheduler.git
git push -u origin main
```

### 5.2 Environment Setup

#### Install PostgreSQL
1. Download from: https://www.postgresql.org/download/windows/
2. Install and remember your password
3. Create database:
```powershell
# Open PostgreSQL command line (psql)
psql -U postgres

# In psql:
CREATE DATABASE ai_social_scheduler;
\q
```

#### Install Redis
1. Download from: https://github.com/microsoftarchive/redis/releases
2. Extract and run `redis-server.exe`
3. Or use Docker:
```powershell
docker run -d -p 6379:6379 --name redis redis:alpine
```

#### Install Node.js Dependencies
```powershell
# Install backend dependencies
cd backend
npm install

# Copy environment file
copy .env.example .env

# Edit .env file with your actual credentials
notepad .env
```

### 5.3 Database Structure

Our database has 5 main tables:

1. **Users** - User accounts and subscription info
2. **SocialAccounts** - Connected social media accounts (OAuth tokens)
3. **Posts** - Scheduled and published posts
4. **Analytics** - Engagement metrics for posts
5. **Subscriptions** - Stripe subscription details

All models are already created in `backend/src/models/`

### 5.4 Test the Setup

```powershell
# Make sure PostgreSQL is running
# Make sure Redis is running

# Start the backend server
cd backend
npm run dev

# You should see:
# ✅ Database connection established successfully
# ✅ Database models synchronized
# ✅ Redis client connected
# 🚀 Server is running on port 5000
```

Test the API:
```powershell
# In a new terminal or browser, visit:
curl http://localhost:5000/health
```

Expected response:
```json
{
  "status": "OK",
  "message": "AI Social Scheduler API is running",
  "timestamp": "2025-11-04T..."
}
```

---

## 📁 Current Project Structure

```
ai-social-scheduler/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── database.js      # PostgreSQL config
│   │   │   └── redis.js         # Redis config
│   │   ├── models/
│   │   │   ├── User.js          # User model
│   │   │   ├── SocialAccount.js # Social accounts model
│   │   │   ├── Post.js          # Posts model
│   │   │   ├── Analytics.js     # Analytics model
│   │   │   ├── Subscription.js  # Subscriptions model
│   │   │   └── index.js         # Model relationships
│   │   ├── controllers/         # (To be added in Phase 3)
│   │   ├── routes/              # (To be added in Phase 3)
│   │   ├── services/            # (To be added in Phase 3)
│   │   ├── middleware/          # (To be added in Phase 3)
│   │   ├── utils/               # (To be added in Phase 3)
│   │   └── index.js             # Main server file
│   ├── .env.example             # Environment template
│   ├── .env                     # Your actual environment (not in git)
│   └── package.json             # Dependencies
├── frontend/                     # (To be set up in Phase 3)
├── .gitignore
├── README.md
└── PHASE2_SETUP_GUIDE.md        # This file
```

---

## 🎯 Next Steps (Phase 3)

Once you've completed Phase 2 setup, you'll move to:

**PHASE 3: CORE FEATURES (MVP)**
1. User Authentication (signup/login)
2. OAuth integration (LinkedIn)
3. Post Scheduling System
4. AI Caption Generation
5. Dashboard UI

---

## 🔧 Troubleshooting

### Database Connection Issues
```powershell
# Check if PostgreSQL is running
Get-Service -Name postgresql*

# If not running:
Start-Service postgresql-x64-14  # (version may vary)
```

### Redis Connection Issues
```powershell
# Check if Redis is running
netstat -an | findstr :6379

# If not running, start redis-server.exe
```

### Port Already in Use
```powershell
# Find what's using port 5000
netstat -ano | findstr :5000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

---

## ✅ Phase 2 Checklist

- [x] Project structure created
- [x] Tech stack documented
- [x] Git repository initialized
- [x] Backend package.json configured
- [x] Environment variables template created
- [x] Database configuration set up
- [x] Redis configuration set up
- [x] Database models defined
- [x] Model relationships established
- [x] Basic Express server created
- [ ] PostgreSQL installed and running
- [ ] Redis installed and running
- [ ] Environment variables configured
- [ ] Backend server tested and running
- [ ] GitHub repository created and pushed

---

**Status**: Foundation complete! Ready for Phase 3 🚀
