# Guru Shisyan Website - Local Server
Write-Host "Starting Guru Shisyan Website..." -ForegroundColor Green
Write-Host ""
Write-Host "Your website will open at: http://localhost:8000" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Red
Write-Host ""

# Check if Python is installed
$pythonCmd = Get-Command python -ErrorAction SilentlyContinue

if ($pythonCmd) {
    # Open browser after a short delay
    Start-Process "http://localhost:8000"
    # Start server
    python -m http.server 8000
} else {
    Write-Host "Python not found! Please install Python from: https://python.org" -ForegroundColor Red
    Write-Host ""
    Write-Host "Alternative: Use VS Code 'Live Server' extension" -ForegroundColor Yellow
    pause
}
