# 🎵 Guru Shisyan Website - Easy Editing Guide

This guide will help you update your website content easily without any coding knowledge!

---

## 📝 How to Update Your Website Content

### Step 1: Open the Content File

1. Open your website folder on your computer
2. Find the file named **`content.json`**
3. Right-click and open it with **Notepad** (or any text editor)

### Step 2: Make Your Changes

The `content.json` file contains all your website content in a simple format. Here's what you can change:

---

## 🏠 Hero Section (Top of Website)

```json
"hero": {
  "mainTitle": "Guru Shisyan",
  "subTitle": "Fusion Instrumental",
  "description": "Your main description here...",
  "backgroundImage": "image-url-here"
}
```

**What you can change:**
- `mainTitle` - Main heading text
- `subTitle` - Sub heading text
- `description` - The paragraph description
- `backgroundImage` - The URL for the background image

---

## 👥 About Section

```json
"about": {
  "heading": "Creating Musical Magic Since 2011",
  "paragraph1": "Your first paragraph...",
  "paragraph2": "Your second paragraph...",
  "badgeText": "15+ Years of Excellence"
}
```

**What you can change:**
- `heading` - Main heading
- `paragraph1` - First paragraph text
- `paragraph2` - Second paragraph text
- `badgeText` - The badge text showing years of experience

---

## 🎪 Services Section

To add, edit, or remove services, find the `services` section:

```json
"services": {
  "items": [
    {
      "icon": "fa-guitar",
      "title": "Your Service Name",
      "description": "Service description here...",
      "features": ["Feature 1", "Feature 2", "Feature 3"],
      "featured": true
    }
  ]
}
```

**What you can change:**
- `title` - Service name
- `description` - Service description
- `features` - List of features (add or remove as needed)
- `featured` - Set to `true` to highlight this service

---

## 📸 Gallery Images

```json
"gallery": {
  "images": [
    {
      "url": "your-image-url-here",
      "title": "Image Title"
    }
  ]
}
```

**To add a new image:**
1. Upload your image to a free image host (like Imgur.com or GitHub)
2. Copy the image URL
3. Add a new entry with the URL and title

**To remove an image:**
- Delete the entire `{...}` block for that image

---

## 💬 Testimonials (Customer Reviews)

```json
"testimonials": {
  "items": [
    {
      "name": "Customer Name",
      "initials": "CN",
      "location": "City, State",
      "rating": 5,
      "text": "Customer review text here..."
    }
  ]
}
```

**To add a new testimonial:**
1. Copy an existing testimonial block
2. Paste it before the closing `]`
3. Change the name, initials, location, rating (1-5), and text

**To remove a testimonial:**
- Delete the entire `{...}` block for that testimonial

---

## 📞 Contact Information

```json
"contact": {
  "location": "Your City, State, Country",
  "phones": ["+91 99999 99999", "+91 88888 88888"],
  "email": "your-email@gmail.com",
  "workingHours": {
    "weekdays": "Mon - Sat: 9:00 AM - 8:00 PM",
    "sunday": "Sunday: By Appointment"
  }
}
```

**What you can change:**
- `location` - Your location
- `phones` - Phone numbers (add or remove as needed)
- `email` - Your email address
- `workingHours` - Your working hours

---

## 🔗 Social Media Links

```json
"social": {
  "youtube": "https://youtube.com/your-channel",
  "instagram": "https://instagram.com/your-profile",
  "facebook": "https://facebook.com/your-page",
  "whatsapp": "https://wa.me/919999999999"
}
```

**To update:**
- Replace the URLs with your actual social media links

---

## 📤 How to Upload Your Changes

### Method 1: Using GitHub Website (Easiest)

1. Go to **github.com** and log in
2. Go to your website repository
3. Click on **`content.json`** file
4. Click the **✏️ Edit** button (pencil icon)
5. Paste your updated content
6. Scroll down and click **Commit changes**
7. Your website will update in 1-2 minutes!

### Method 2: Drag and Drop

1. Save your `content.json` file
2. Go to your repository on github.com
3. Drag and drop the file into your browser
4. Click **Commit changes**
5. Done!

---

## ⚠️ Important Tips

### ✅ DO:
- Always keep the `{` and `}` brackets
- Keep quotes around text: `"text here"`
- Use commas between items
- Save the file before uploading
- Test changes locally first (open `index.html` in browser)

### ❌ DON'T:
- Delete the `{` and `}` brackets
- Remove quotes from text
- Forget commas between items
- Use special characters like `"`, `\` in text (use `\"` instead)

---

## 🖼️ How to Add Images

### Step 1: Upload Your Image

Choose one of these free options:

**Option A: Imgur (Easiest)**
1. Go to **imgur.com**
2. Click "New post"
3. Upload your image
4. Right-click the image and select "Copy image address"

**Option B: GitHub**
1. In your GitHub repository, create a folder called `images`
2. Upload your images there
3. Click on the image and copy the URL

**Option C: Other Free Hosting**
- Postimages.org
- Cloudinary (free tier)
- Google Drive (set to public)

### Step 2: Add the URL to content.json

Replace any image URL in `content.json` with your new URL.

---

## 🆘 Troubleshooting

**Website not loading?**
- Check that `content.json` is saved properly
- Make sure you didn't accidentally delete any `{ }` brackets
- Check for missing commas between items

**Images not showing?**
- Verify the image URL is correct (open it in browser to test)
- Make sure the image is publicly accessible (not private)

**Content not updating?**
- Clear your browser cache (Ctrl + F5)
- Wait 2-3 minutes for GitHub to update
- Check that you committed changes on GitHub

---

## 📞 Need Help?

If you have any issues:

1. Check the [GitHub Issues](https://github.com/your-username/your-repo/issues)
2. Contact your web developer
3. Check the main [README.md](README.md) file

---

## 📋 Quick Reference

| What to Change | Find in content.json | Section Name |
|----------------|---------------------|--------------|
| Main heading | `hero.mainTitle` | Hero |
| Phone numbers | `contact.phones` | Contact |
| Email address | `contact.email` | Contact |
| Add testimonial | `testimonials.items` | Testimonials |
| Add service | `services.items` | Services |
| Add image | `gallery.images` | Gallery |
| YouTube link | `social.youtube` | Social |

---

**💡 Pro Tip:** Keep a backup of your `content.json` file before making changes!

---

*Last updated: 2026* | *Guru Shisyan Fusion Instrumental Website*
