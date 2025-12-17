@echo off
echo ========================================
echo   Car Blogging Site - Development Mode
echo ========================================
echo.

if not exist package.json (
    echo Error: package.json not found!
    echo Make sure you're in the project root directory.
    pause
    exit /b 1
)

if not exist backend\node_modules (
    echo Installing backend dependencies...
    cd backend
    call npm install
    cd ..
    echo.
)

if not exist node_modules (
    echo Installing frontend dependencies...
    call npm install
    echo.
)

if not exist node_modules\concurrently (
    echo Installing concurrently...
    call npm install --save-dev concurrently
    echo.
)

echo Starting both servers...
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Press Ctrl+C to stop both servers
echo ========================================
echo.

call npm run dev
