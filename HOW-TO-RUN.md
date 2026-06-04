# 🔧 How to Run the Website Locally

## Why is the screen blank?

When you double-click `index.html`, the browser blocks loading external files (like `content.json`) for security reasons. You need to run a local web server instead.

---

## 🚀 Easiest Way - Double-click the server file

### Option 1: Using the Batch file (Recommended for Windows)

1. **Double-click `start-server.bat`**
2. Your browser will open automatically at: **http://localhost:8000**
3. Done! Your website is now running

4. To stop: Press **Ctrl+C** in the command window

---

### Option 2: Using PowerShell

1. Right-click `start-server.ps1`
2. Select **"Run with PowerShell"**
3. Click **"Yes"** if prompted
4. Your browser will open automatically

---

### Option 3: Using VS Code (If you have VS Code)

1. Open VS Code
2. Go to **Extensions** (Ctrl+Shift+X)
3. Search for **"Live Server"**
4. Install **"Live Server" by Ritwick Dey**
5. Right-click `index.html`
6. Select **"Open with Live Server"**

---

### Option 4: Using Python (If you have Python installed)

1. Open Command Prompt in the website folder
2. Type: `python -m http.server 8000`
3. Open browser and go to: `http://localhost:8000`

---

## 📦 Don't have Python? Install it (Free)

1. Go to **[python.org](https://python.org)**
2. Click **Downloads**
3. Download **Python 3.x** for Windows
4. Run the installer (check "Add Python to PATH")
5. After install, double-click **`start-server.bat`**

---

## 🌐 Uploading to GitHub

For the website to work online, you don't need to worry about this! Just upload to GitHub and GitHub Pages will handle it automatically.

See [README.md](README.md) for GitHub setup instructions.

---

## ❓ Troubleshooting

**"Port 8000 is already in use"**
- Close other programs using port 8000
- Or edit `start-server.bat` and change `8000` to `8080`

**"Python not found"**
- Install Python from python.org (free)
- Or use VS Code Live Server option

**Screen still blank**
- Clear browser cache (Ctrl + F5)
- Try a different browser
- Check console for errors (F12)

---

## 📞 Need Help?

If you're still having issues:
- Make sure all files (`index.html`, `content.json`, `content-loader.js`, etc.) are in the same folder
- Try VS Code Live Server option
- Contact support

---

*Once uploaded to GitHub Pages, the website will work perfectly without any server!*
