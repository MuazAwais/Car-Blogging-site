@echo off
echo Starting Backend Server...
echo.

cd backend

if not exist node_modules (
    echo Installing dependencies...
    call npm install
    echo.
)

if not exist .env (
    echo Creating .env file...
    (
        echo MONGODB_URI=mongodb://localhost:27017/car-blog
        echo PORT=5000
        echo NODE_ENV=development
    ) > .env
    echo .env file created with default values
    echo.
)

echo Starting server on http://localhost:5000
echo Press Ctrl+C to stop the server
echo.

call npm run dev


