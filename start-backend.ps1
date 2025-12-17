# PowerShell script to start the backend server
# Run this script: .\start-backend.ps1

Write-Host "Starting Backend Server..." -ForegroundColor Green
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "backend\package.json")) {
    Write-Host "Error: backend\package.json not found!" -ForegroundColor Red
    Write-Host "Make sure you're in the project root directory." -ForegroundColor Yellow
    exit 1
}

# Navigate to backend directory
Set-Location backend

# Check if node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

# Check if .env exists
if (-not (Test-Path ".env")) {
    Write-Host "Creating .env file..." -ForegroundColor Yellow
    @"
MONGODB_URI=mongodb://localhost:27017/car-blog
PORT=5000
NODE_ENV=development
"@ | Out-File -FilePath ".env" -Encoding utf8
    Write-Host ".env file created with default values" -ForegroundColor Green
    Write-Host ""
}

Write-Host "Starting server on http://localhost:5000" -ForegroundColor Cyan
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Start the server
npm run dev


