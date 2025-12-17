# Troubleshooting Guide - Data Not Loading

If data is not loading on your Car Blogging site, follow these steps:

## Quick Checks

### 1. Is the Backend Running?

Check if the backend server is running:
```bash
# In the backend directory
cd backend
npm run dev
```

You should see:
```
Connected to MongoDB
Server is running on port 5000
```

### 2. Check Browser Console

Open your browser's Developer Tools (F12) and check:
- **Console tab**: Look for error messages
- **Network tab**: Check if API requests are being made and their status

Common errors:
- `Failed to fetch` - Backend is not running or CORS issue
- `404 Not Found` - API endpoint doesn't exist
- `500 Internal Server Error` - Backend error

### 3. Check API URL

Verify the API URL in your frontend `.env` file:
```env
VITE_API_BASE_URL=http://localhost:5000/api
```

Make sure:
- No trailing slash
- Correct port (default is 5000)
- Protocol is `http://` (not `https://` for local)

### 4. Is MongoDB Running?

If using local MongoDB:
```bash
# Windows
net start MongoDB

# Mac/Linux
brew services start mongodb-community
# or
sudo systemctl start mongodb
```

If using MongoDB Atlas:
- Check your connection string in `backend/.env`
- Verify your IP is whitelisted

### 5. Is the Database Seeded?

If the database is empty, you'll see no data. Run:
```bash
cd backend
npm run seed
```

This will populate the database with sample blogs.

## Common Issues and Solutions

### Issue: "Cannot connect to server"

**Solution:**
1. Start the backend server: `cd backend && npm run dev`
2. Verify it's running on port 5000
3. Check if another application is using port 5000
4. Try accessing `http://localhost:5000/api/health` in your browser

### Issue: "CORS Error"

**Solution:**
The backend should have CORS enabled. Check `backend/server.js`:
```javascript
app.use(cors());
```

If still having issues, update CORS config:
```javascript
app.use(cors({
  origin: 'http://localhost:5173', // Your Vite dev server port
  credentials: true
}));
```

### Issue: "Empty array returned"

**Solution:**
1. Check if database has data: Run `npm run seed` in backend
2. Check MongoDB connection in backend logs
3. Verify MongoDB URI in `backend/.env`

### Issue: "Network Error"

**Solution:**
1. Check if both frontend and backend are running
2. Verify firewall isn't blocking localhost connections
3. Try accessing the API directly: `http://localhost:5000/api/blogs`

### Issue: "404 Not Found"

**Solution:**
1. Check if routes are properly registered in `backend/server.js`
2. Verify API endpoint paths match (should be `/api/blogs`, not `/blogs`)
3. Check if backend server restarted after route changes

## Testing the API

### Test Backend Health
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{"status":"OK","message":"Server is running"}
```

### Test Blogs Endpoint
```bash
curl http://localhost:5000/api/blogs
```

Should return an array of blogs (or empty array if not seeded).

### Test in Browser
Open: `http://localhost:5000/api/blogs`
You should see JSON data or an empty array `[]`.

## Debugging Steps

1. **Check Backend Logs**
   - Look at the terminal where backend is running
   - Check for MongoDB connection errors
   - Look for route errors

2. **Check Frontend Console**
   - Open browser DevTools (F12)
   - Check Console for errors
   - Check Network tab for failed requests

3. **Verify Environment Variables**
   - Frontend: Check `.env` file has `VITE_API_BASE_URL`
   - Backend: Check `.env` file has `MONGODB_URI` and `PORT`
   - Restart both servers after changing `.env` files

4. **Test API Directly**
   - Use Postman, Thunder Client, or browser
   - Test `GET http://localhost:5000/api/blogs`
   - Verify response format

## Still Not Working?

1. **Clear Browser Cache**
   - Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

2. **Restart Everything**
   ```bash
   # Stop both servers (Ctrl+C)
   # Then restart:
   # Terminal 1:
   cd backend && npm run dev
   
   # Terminal 2:
   npm run dev
   ```

3. **Check Port Conflicts**
   - Backend default: 5000
   - Frontend default: 5173
   - Make sure no other apps are using these ports

4. **Verify File Structure**
   - `backend/server.js` exists
   - `src/lib/api.js` exists
   - Routes are properly imported

5. **Check Node Version**
   ```bash
   node --version  # Should be v14 or higher
   ```

## Getting Help

If none of these solutions work:
1. Check the browser console for specific error messages
2. Check backend terminal for error logs
3. Verify all dependencies are installed: `npm install` in both directories
4. Make sure MongoDB is accessible

## Fallback Data

The frontend now includes fallback data. If the API fails, it will:
- Show a warning message
- Display static data from `src/lib/data/index.js`
- Allow the site to function even without backend

This helps during development and ensures the site works even if backend is temporarily unavailable.


