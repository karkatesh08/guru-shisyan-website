# 🎵 Guru Shisyan Fusion Instrumental Website

A beautiful, responsive website for Guru Shisyan Fusion Instrumental - Traditional Indian classical music meets contemporary fusion. Built with HTML, CSS, and JavaScript, hosted on GitHub Pages.

![Website Preview](https://img.shields.io/badge/status-live-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![GitHub Pages](https://img.shields.io/badge/host-GitHub%20Pages-orange)

---

## ✨ Features

- 🎨 **Beautiful Design** - Traditional Indian classical music color scheme
- 📱 **Fully Responsive** - Works on all devices (mobile, tablet, desktop)
- ⚡ **Fast Loading** - Optimized for performance
- 🎯 **SEO Friendly** - Meta tags for search engines
- 💬 **Customer Feedback** - Built-in feedback form
- ⭐ **Testimonials** - Customer reviews section
- 📸 **Gallery** - Image gallery for performances
- 🎥 **Videos** - YouTube integration
- 📝 **Easy Updates** - Content managed via simple JSON file
- 🆓 **Free Hosting** - Hosted on GitHub Pages

---

## 🚀 Quick Start

### 🖥️ Run Website Locally First

**IMPORTANT:** Don't double-click `index.html` - it will show blank screen!

**To run locally:**
1. **Double-click `start-server.bat`** (Windows) - This starts a local server
2. Your browser opens at **http://localhost:8000**
3. Your website is now running!

**Alternative methods:**
- Right-click `start-server.ps1` → "Run with PowerShell"
- Use VS Code "Live Server" extension
- See **[HOW-TO-RUN.md](HOW-TO-RUN.md)** for details

---

### 🌐 Upload to GitHub Pages (Get Online)

### Step 1: Create a GitHub Account

1. Go to **[github.com](https://github.com)**
2. Click **Sign up** and create your free account
3. Verify your email address

### Step 2: Create a New Repository

1. After logging in, click the **+** icon in the top-right corner
2. Select **New repository**
3. Name it: `guru-shisyan-website` (or any name you prefer)
4. Make it **Public** (required for free GitHub Pages)
5. Click **Create repository**

### Step 3: Upload Your Files

**Option A: Drag and Drop (Easiest)**

1. In your new repository, click **uploading an existing file**
2. Drag and drop ALL these files from your computer:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `content-loader.js`
   - `content.json`
3. Scroll down and click **Commit changes**

**Option B: Using GitHub Desktop**

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Clone your repository
3. Copy all website files to the repository folder
4. Commit and push

### Step 4: Enable GitHub Pages

1. In your repository, click **Settings**
2. On the left sidebar, click **Pages**
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**
4. Select **main** (or **master**) branch and **/ (root)** folder
5. Click **Save**

### Step 5: Your Website is Live!

🎉 Your website will be live at:
```
https://YOUR-USERNAME.github.io/guru-shisyan-website/
```

Replace `YOUR-USERNAME` with your GitHub username and `guru-shisyan-website` with your repository name.

---

## 📝 How to Update Website Content

After your website is live, you can easily update content without coding:

### Update via GitHub Website:

1. Go to your repository on github.com
2. Click on **`content.json`**
3. Click the **✏️ Edit** button
4. Make your changes
5. Click **Commit changes**
6. Your website updates in 1-2 minutes!

### What You Can Update:

- ✏️ Text content (headings, descriptions, etc.)
- 📞 Contact information (phone, email, location)
- 🖼️ Images (gallery, background)
- ⭐ Testimonials (add/edit/remove reviews)
- 🎪 Services (add/edit/remove services)
- 🔗 Social media links
- 📊 Statistics (events, years, clients)

**See [EDIT-GUIDE.md](EDIT-GUIDE.md) for detailed instructions.**

---

## 📁 Project Structure

```
guru-shisyan-website/
├── index.html              # Main HTML file
├── styles.css              # All styling
├── script.js               # Interactive features
├── content-loader.js       # Loads content from JSON
├── content.json            # ALL editable content (← Edit this!)
├── EDIT-GUIDE.md           # How to update content
├── README.md               # This file
└── .github/
    └── workflows/
        └── deploy.yml      # Auto-deployment config
```

---

## 🎨 Customization

### Changing Colors

Open `styles.css` and edit the CSS variables at the top:

```css
:root {
    --saffron: #FF9933;      /* Orange/saffron */
    --maroon: #800020;       /* Deep red/maroon */
    --gold: #FFD700;         /* Gold color */
    --terracotta: #D2691E;   /* Earthy brown */
}
```

### Changing Fonts

The website uses **Poppins** font from Google Fonts. To change:

1. Go to [Google Fonts](https://fonts.google.com)
2. Select a new font
3. Copy the `<link>` code
4. Replace in `index.html` (line 13)
5. Update `font-family` in `styles.css` (line 57)

---

## 🌐 Domain Setup (Optional)

If you want a custom domain (like `www.gurushisyan.com`):

1. Buy a domain from [Namecheap](https://namecheap.com), [GoDaddy](https://godaddy.com), or [Google Domains](https://domains.google)
2. In your repository, go to **Settings > Pages**
3. Click **Custom domain**
4. Enter your domain
5. Update DNS settings as shown
6. Wait 24-48 hours for propagation

---

## 📊 Adding Google Analytics (Optional)

To track website visitors:

1. Go to [Google Analytics](https://analytics.google.com)
2. Create an account and property
3. Copy your **Measurement ID** (G-XXXXXXXXXX)
4. Add this code to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Troubleshooting

### Website shows "404 Not Found"

- Check GitHub Pages is enabled in Settings
- Wait 5-10 minutes for initial deployment
- Verify the repository is **Public**

### Content not updating

- Clear browser cache (Ctrl + F5)
- Wait 2-3 minutes for GitHub to update
- Check JSON syntax (no missing brackets or commas)

### Images not loading

- Verify image URLs are correct
- Make sure images are publicly accessible
- Check for typos in URLs

### Need more help?

- Check [GitHub Pages Documentation](https://docs.github.com/pages)
- See [EDIT-GUIDE.md](EDIT-GUIDE.md) for content updates

---

## 📄 License

This project is open source and available under the MIT License.

---

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

---

## 📞 Support

For questions or issues:
- 📧 Email: gurushisyan@gmail.com
- 📱 Phone: +91 99940 80330
- 📍 Location: Chidambaram, Tamil Nadu, India

---

## 🙏 Acknowledgments

- Fonts by [Google Fonts](https://fonts.google.com)
- Icons by [Font Awesome](https://fontawesome.com)
- Hosting by [GitHub Pages](https://pages.github.com)

---

**Made with ❤️ for Guru Shisyan Fusion Instrumental**

*© 2026 Guru Shisyan Fusion Instrumental. All Rights Reserved.*
