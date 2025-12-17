# Quick Start Guide

## Fix ERR_CONNECTION_REFUSED Error

This error means the backend server is not running. Follow these steps:

### Step 1: Start the Backend Server

Open a terminal and run:

```bash
cd backend
npm install  # Only needed first time
npm run dev
```

You should see:
```
Server is running on port 5000
Health check: http://localhost:5000/api/health
```

### Step 2: Verify Server is Running

Open your browser and go to:
```
http://localhost:5000/api/health
```

You should see:
```json
{"status":"OK","message":"Server is running"}
```

### Step 3: (Optional) Set Up MongoDB

The server will start even without MongoDB, but you need it for data storage.

#### Option A: Use MongoDB Atlas (Cloud - Recommended)

1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster
4. Get your connection string
5. Create `backend/.env` file:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/car-blog?retryWrites=true&w=majority
PORT=5000
```

#### Option B: Install Local MongoDB

**Windows:**
1. Download from https://www.mongodb.com/try/download/community
2. Install MongoDB
3. Start MongoDB service:
```bash
net start MongoDB
```

**Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo systemctl start mongodb
```

Then create `backend/.env`:
```env
MONGODB_URI=mongodb://localhost:27017/car-blog
PORT=5000
```

### Step 4: Seed the Database (Optional)

If you have MongoDB set up, populate it with sample data:

```bash
cd backend
npm run seed
```

### Step 5: Start Frontend

In a **new terminal** (keep backend running):

```bash
# Make sure you're in the root directory
npm run dev
```

### Step 6: Verify Everything Works

1. Backend: http://localhost:5000/api/health ✅
2. Frontend: http://localhost:5173 ✅
3. Check browser console - should see API calls working

## Common Issues

### Port 5000 Already in Use

If you see "Port 5000 is already in use":
1. Find what's using it: `netstat -ano | findstr :5000` (Windows)
2. Kill the process or change port in `backend/.env`:
```env
PORT=5001
```

Then update frontend `.env`:
```env
VITE_API_BASE_URL=http://localhost:5001/api
```

### MongoDB Connection Failed

The server will still start! You'll see:
```
⚠️  MongoDB connection error
⚠️  Server is running but database features may not work.
```

The frontend will use fallback data until MongoDB is connected.

### Still Getting ERR_CONNECTION_REFUSED?

1. **Check if backend is actually running:**
   - Look at the terminal where you ran `npm run dev`
   - Should see "Server is running on port 5000"

2. **Check firewall:**
   - Windows Firewall might be blocking Node.js
   - Allow Node.js through firewall

3. **Try different port:**
   - Change PORT in backend/.env
   - Update VITE_API_BASE_URL in frontend .env

4. **Check .env files:**
   - Backend: `backend/.env` should have PORT
   - Frontend: Root `.env` should have VITE_API_BASE_URL

## Need Help?

1. Check browser console (F12) for specific errors
2. Check backend terminal for error messages
3. See TROUBLESHOOTING.md for more details


