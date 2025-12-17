# Running Both Backend and Frontend Together

## Quick Start

### Option 1: Using npm script (Recommended) ⭐

Simply run from the root directory:

```bash
npm run dev
```

or

```bash
npm run dev:all
```

This will start both servers simultaneously!

### Option 2: Using Scripts

**Windows:**
```bash
.\start-dev.bat
```

**PowerShell:**
```powershell
.\start-dev.ps1
```

## What Happens

When you run `npm run dev`, it will:

1. ✅ Start the backend server on `http://localhost:5000`
2. ✅ Start the frontend server on `http://localhost:5173`
3. ✅ Show logs from both servers in the same terminal
4. ✅ Color-code the output for easy identification
   - **Backend logs**: Cyan color with `[backend]` prefix
   - **Frontend logs**: Yellow color with `[frontend]` prefix

## Available Scripts

- `npm run dev` - Start both servers together ⭐ (Main command)
- `npm run dev:all` - Same as `npm run dev` (alias)
- `npm run dev:frontend` - Start frontend only
- `npm run dev:backend` - Start backend only

## Output Example

```
[backend] Server is running on port 5000
[backend] Connected to MongoDB
[frontend] VITE v7.0.0  ready in 500 ms
[frontend] ➜  Local:   http://localhost:5173/
```

## Stopping Servers

Press `Ctrl+C` once to stop both servers simultaneously.

## First Time Setup

If you haven't installed dependencies yet, the scripts will automatically install them:

```bash
# The script will check and install:
# - Frontend dependencies (root node_modules)
# - Backend dependencies (backend/node_modules)
# - concurrently package (if missing)
```

Or manually:

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..
```

## Troubleshooting

### Port Already in Use

If you see port errors:
- **Port 5000**: Backend port - change in `backend/.env`
- **Port 5173**: Frontend port - Vite will auto-assign another port if busy

### Concurrently Not Found

If you get an error about `concurrently`:
```bash
npm install --save-dev concurrently
```

### MongoDB Connection Issues

The backend will start even if MongoDB isn't running, but database features won't work. See `QUICK_START.md` for MongoDB setup.

### Scripts Not Working

Make sure you're in the **root directory** of the project (where `package.json` is located).

## Alternative: Separate Terminals

If you prefer separate terminals:

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
npm run dev:frontend
```

## Benefits of Running Together

✅ Single command to start everything  
✅ See all logs in one place  
✅ Easy to stop both at once  
✅ Better development workflow  
✅ No need to manage multiple terminals  
✅ Color-coded output for easy identification  

## Environment Setup

Make sure you have:

1. **Backend `.env` file** (`backend/.env`):
```env
MONGODB_URI=mongodb://localhost:27017/car-blog
PORT=5000
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
```

2. **Frontend `.env` file** (root `.env`):
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

## Quick Commands Reference

```bash
# Start both servers
npm run dev

# Start only frontend
npm run dev:frontend

# Start only backend
npm run dev:backend

# Build for production
npm run build

# Run production preview
npm run preview
```
