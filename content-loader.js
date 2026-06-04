/**
 * Content Loader for Guru Shisyan Website
 * Loads content from content.json and populates the HTML
 */

// Global content object
let websiteContent = null;

/**
 * Load content from JSON file
 */
async function loadContent() {
    try {
        const response = await fetch('content.json');
        if (!response.ok) {
            throw new Error('Failed to load content.json');
        }
        websiteContent = await response.json();
        populateContent();
        return true;
    } catch (error) {
        console.error('Error loading content:', error);
        // Show error message to user
        document.body.insertAdjacentHTML('beforeend', `
            <div style="position:fixed;top:20px;right:20px;background:#f44336;color:white;padding:15px 20px;border-radius:8px;z-index:10000;box-shadow:0 5px 20px rgba(0,0,0,0.3);">
                <strong>Error:</strong> Failed to load content. Please check content.json file.
            </div>
        `);
        return false;
    }
}

/**
 * Populate all content from JSON to HTML
 */
function populateContent() {
    if (!websiteContent) return;

    // Website Meta
    populateMeta();

    // Hero Section
    populateHero();

    // About Section
    populateAbout();

    // Services Section
    populateServices();

    // Gallery Section
    populateGallery();

    // Videos Section
    populateVideos();

    // Testimonials Section
    populateTestimonials();

    // Feedback Section
    populateFeedback();

    // Contact Section
    populateContact();

    // Footer
    populateFooter();

    // Update document title
    document.title = websiteContent.website.title;
}

/**
 * Populate meta information
 */
function populateMeta() {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && websiteContent.website.description) {
        metaDescription.setAttribute('content', websiteContent.website.description);
    }
}

/**
 * Populate Hero Section
 */
function populateHero() {
    // Hero Title
    setElement('heroMainTitle', websiteContent.hero.mainTitle);
    setElement('heroSubTitle', websiteContent.hero.subTitle);
    setElement('heroDescription', websiteContent.hero.description);

    // Hero Background
    const hero = document.querySelector('.hero');
    if (hero && websiteContent.hero.backgroundImage) {
        hero.style.background = `linear-gradient(rgba(28,18,11,0.7), rgba(139,69,19,0.6)),
                    url('${websiteContent.hero.backgroundImage}')`;
        hero.style.backgroundSize = 'cover';
        hero.style.backgroundPosition = 'center';
        hero.style.backgroundAttachment = 'fixed';
    }

    // Stats
    const statElements = document.querySelectorAll('.stat-number');
    if (statElements.length >= 3 && websiteContent.hero.stats) {
        statElements[0].setAttribute('data-target', websiteContent.hero.stats.events);
        statElements[1].setAttribute('data-target', websiteContent.hero.stats.years);
        statElements[2].setAttribute('data-target', websiteContent.hero.stats.clients);
    }
}

/**
 * Populate About Section
 */
function populateAbout() {
    // Section Header
    setElement('aboutSubtitle', websiteContent.about.subtitle);
    setElement('aboutTitle', websiteContent.about.title);

    // Main Content
    setElement('aboutHeading', websiteContent.about.heading);
    setElement('aboutParagraph1', websiteContent.about.paragraph1);
    setElement('aboutParagraph2', websiteContent.about.paragraph2);

    // Image
    const aboutImg = document.querySelector('#aboutImage');
    if (aboutImg && websiteContent.about.image) {
        aboutImg.src = websiteContent.about.image;
        aboutImg.alt = 'About Guru Shisyan';
    }

    // Badge
    setElement('aboutBadge', websiteContent.about.badgeText);

    // Features
    const featuresContainer = document.querySelector('#aboutFeatures');
    if (featuresContainer && websiteContent.about.features) {
        featuresContainer.innerHTML = websiteContent.about.features.map(feature => `
            <div class="feature-item">
                <div class="feature-icon">
                    <i class="fas ${feature.icon}"></i>
                </div>
                <div class="feature-text">
                    <h4>${feature.title}</h4>
                    <p>${feature.description}</p>
                </div>
            </div>
        `).join('');
    }
}

/**
 * Populate Services Section
 */
function populateServices() {
    // Section Header
    setElement('servicesSubtitle', websiteContent.services.subtitle);
    setElement('servicesTitle', websiteContent.services.title);

    // Services Grid
    const servicesContainer = document.querySelector('#servicesGrid');
    if (servicesContainer && websiteContent.services.items) {
        servicesContainer.innerHTML = websiteContent.services.items.map((service, index) => `
            <div class="service-card ${service.featured ? 'featured' : ''}">
                ${service.featured ? '<div class="featured-badge">Popular</div>' : ''}
                <div class="service-icon">
                    <i class="fas ${service.icon}"></i>
                    <div class="icon-bg"></div>
                </div>
                <h3>${service.title}</h3>
                <p>${service.description}</p>
                <ul class="service-features">
                    ${service.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
                </ul>
                <a href="#contact" class="service-link">Book Now <i class="fas fa-arrow-right"></i></a>
            </div>
        `).join('');
    }
}

/**
 * Populate Gallery Section
 */
function populateGallery() {
    // Section Header
    setElement('gallerySubtitle', websiteContent.gallery.subtitle);
    setElement('galleryTitle', websiteContent.gallery.title);

    // Gallery Grid
    const galleryContainer = document.querySelector('#galleryGrid');
    if (galleryContainer && websiteContent.gallery.images) {
        galleryContainer.innerHTML = websiteContent.gallery.images.map(img => `
            <div class="gallery-item">
                <img src="${img.url}" alt="${img.title}">
                <div class="gallery-overlay">
                    <div class="overlay-content">
                        <i class="fas fa-expand"></i>
                        <span>${img.title}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

/**
 * Populate Videos Section
 */
function populateVideos() {
    // Section Header
    setElement('videosSubtitle', websiteContent.videos.subtitle);
    setElement('videosTitle', websiteContent.videos.title);

    // YouTube Info
    const channelLink = document.querySelector('#youtubeChannel');
    if (channelLink && websiteContent.videos.channelUrl) {
        channelLink.href = websiteContent.videos.channelUrl;
    }

    // Video Highlights
    const highlightsContainer = document.querySelector('#videoHighlights');
    if (highlightsContainer && websiteContent.videos.highlights) {
        highlightsContainer.innerHTML = websiteContent.videos.highlights.map(h =>
            `<li><i class="fas fa-check-circle"></i> ${h}</li>`
        ).join('');
    }
}

/**
 * Populate Testimonials Section
 */
function populateTestimonials() {
    // Section Header
    setElement('testimonialsSubtitle', websiteContent.testimonials.subtitle);
    setElement('testimonialsTitle', websiteContent.testimonials.title);

    // Testimonials Grid
    const testimonialsContainer = document.querySelector('#testimonialsGrid');
    if (testimonialsContainer && websiteContent.testimonials.items) {
        testimonialsContainer.innerHTML = websiteContent.testimonials.items.map(t => `
            <div class="testimonial-card">
                <div class="testimonial-quote">
                    <i class="fas fa-quote-left"></i>
                </div>
                <div class="stars">
                    ${generateStars(t.rating)}
                </div>
                <p class="testimonial-text">"${t.text}"</p>
                <div class="testimonial-author">
                    <div class="author-avatar">${t.initials}</div>
                    <div class="author-details">
                        <h4>${t.name}</h4>
                        <span>${t.location}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

/**
 * Populate Feedback Section
 */
function populateFeedback() {
    // Section Header
    setElement('feedbackSubtitle', websiteContent.feedback.subtitle);
    setElement('feedbackTitle', websiteContent.feedback.title);

    // Info
    setElement('feedbackInfoTitle', websiteContent.feedback.infoTitle);
    setElement('feedbackInfoText1', websiteContent.feedback.infoText1);
    setElement('feedbackInfoText2', websiteContent.feedback.infoText2);

    // Benefits
    const benefitsContainer = document.querySelector('#feedbackBenefits');
    if (benefitsContainer && websiteContent.feedback.benefits) {
        benefitsContainer.innerHTML = websiteContent.feedback.benefits.map(b => `
            <div class="benefit-item">
                <i class="fas fa-bolt"></i>
                <span>${b}</span>
            </div>
        `).join('');
    }
}

/**
 * Populate Contact Section
 */
function populateContact() {
    // Section Header
    setElement('contactSubtitle', websiteContent.contact.subtitle);
    setElement('contactTitle', websiteContent.contact.title);

    // Location
    setElement('contactLocation', websiteContent.contact.location);
    const mapLink = document.querySelector('#mapLink');
    if (mapLink && websiteContent.contact.mapUrl) {
        mapLink.href = websiteContent.contact.mapUrl;
    }

    // Phones
    const phoneContainer = document.querySelector('#contactPhones');
    if (phoneContainer && websiteContent.contact.phones) {
        phoneContainer.innerHTML = websiteContent.contact.phones.map(p =>
            `<a href="tel:${p.replace(/\s/g, '')}" class="contact-link">${p}</a>`
        ).join('');
    }

    // Email
    setElement('contactEmail', websiteContent.contact.email);
    const emailLink = document.querySelector('#emailLink');
    if (emailLink && websiteContent.contact.email) {
        emailLink.href = `mailto:${websiteContent.contact.email}`;
    }

    // Working Hours
    if (websiteContent.contact.workingHours) {
        setElement('workingHoursWeekdays', websiteContent.contact.workingHours.weekdays);
        setElement('workingHoursSunday', websiteContent.contact.workingHours.sunday);
    }

    // Social Links
    if (websiteContent.social) {
        const youtubeLink = document.querySelector('#socialYoutube');
        const instagramLink = document.querySelector('#socialInstagram');
        const facebookLink = document.querySelector('#socialFacebook');
        const whatsappLink = document.querySelector('#socialWhatsapp');

        if (youtubeLink) youtubeLink.href = websiteContent.social.youtube;
        if (instagramLink) instagramLink.href = websiteContent.social.instagram;
        if (facebookLink) facebookLink.href = websiteContent.social.facebook;
        if (whatsappLink) whatsappLink.href = websiteContent.social.whatsapp;
    }
}

/**
 * Populate Footer
 */
function populateFooter() {
    // Tagline
    setElement('footerTagline', websiteContent.footer.tagline);
    setElement('footerDescription', websiteContent.footer.description);

    // Quick Links
    const quickLinksContainer = document.querySelector('#footerQuickLinks');
    if (quickLinksContainer && websiteContent.footer.quickLinks) {
        quickLinksContainer.innerHTML = websiteContent.footer.quickLinks.map(l =>
            `<li><a href="${l.url}"><i class="fas fa-chevron-right"></i> ${l.text}</a></li>`
        ).join('');
    }

    // Service Links
    const serviceLinksContainer = document.querySelector('#footerServiceLinks');
    if (serviceLinksContainer && websiteContent.footer.serviceLinks) {
        serviceLinksContainer.innerHTML = websiteContent.footer.serviceLinks.map(l =>
            `<li><a href="${l.url}"><i class="fas fa-chevron-right"></i> ${l.text}</a></li>`
        ).join('');
    }

    // Copyright
    const copyright = document.querySelector('#footerCopyright');
    if (copyright) {
        copyright.innerHTML = `<p>${websiteContent.footer.copyright}</p>`;
    }

    const designed = document.querySelector('#footerDesigned');
    if (designed) {
        designed.innerHTML = `<p>${websiteContent.footer.designed}</p>`;
    }
}

/**
 * Helper function to set element content by ID
 */
function setElement(id, content) {
    const element = document.getElementById(id);
    if (element && content !== undefined) {
        element.textContent = content;
    }
}

/**
 * Helper function to generate star rating HTML
 */
function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - 0.5 === rating) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

// Initialize content loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadContent);
} else {
    loadContent();
}
