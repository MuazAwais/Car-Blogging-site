# PowerShell script to start both backend and frontend
# Run this script: .\start-dev.ps1

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Car Blogging Site - Development Mode" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (-not (Test-Path "package.json")) {
    Write-Host "Error: package.json not found!" -ForegroundColor Red
    Write-Host "Make sure you're in the project root directory." -ForegroundColor Yellow
    exit 1
}

# Check if backend node_modules exists
if (-not (Test-Path "backend\node_modules")) {
    Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
    Set-Location backend
    npm install
    Set-Location ..
    Write-Host ""
}

# Check if root node_modules exists
if (-not (Test-Path "node_modules")) {
    Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
    npm install
    Write-Host ""
}

# Check if concurrently is installed
if (-not (Test-Path "node_modules\concurrently")) {
    Write-Host "Installing concurrently..." -ForegroundColor Yellow
    npm install --save-dev concurrently
    Write-Host ""
}

Write-Host "Starting both servers..." -ForegroundColor Green
Write-Host ""
Write-Host "Backend:  http://localhost:5000" -ForegroundColor Cyan
Write-Host "Frontend: http://localhost:5173" -ForegroundColor Yellow
Write-Host ""
Write-Host "Press Ctrl+C to stop both servers" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Start both servers
npm run dev
