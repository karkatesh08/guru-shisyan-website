/* ============================================
   GURU SHISYAN FUSION INSTRUMENTAL
   Custom JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {

    // ===== Preloader =====
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', function() {
        setTimeout(function() {
            preloader.classList.add('hidden');
            setTimeout(function() {
                preloader.style.display = 'none';
            }, 500);
        }, 800);
    });

    // ===== Mobile Menu Toggle =====
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking on nav links
        const navLinksItems = navLinks.querySelectorAll('.nav-link');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===== Active Navigation Link =====
    const sections = document.querySelectorAll('section[id]');
    const navLinksItems = document.querySelectorAll('.nav-link');

    function setActiveLink() {
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinksItems.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Initial call

    // ===== Smooth Scrolling =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href === '#' || href === '#home') {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Back to Top Button =====
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== Hero Stats Counter Animation =====
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        const statsSection = document.querySelector('.hero-stats');
        const sectionTop = statsSection ? statsSection.getBoundingClientRect().top : null;

        if (sectionTop !== null && sectionTop < window.innerHeight - 100) {
            statsAnimated = true;

            stats.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        stat.textContent = Math.ceil(current) + '+';
                        requestAnimationFrame(updateCounter);
                    } else {
                        stat.textContent = target + '+';
                    }
                };

                updateCounter();
            });
        }
    }

    window.addEventListener('scroll', animateStats);
    animateStats(); // Initial check

    // ===== Star Rating System =====
    const ratingStars = document.getElementById('ratingStars');
    const ratingInput = document.getElementById('rating');
    const ratingText = document.querySelector('.rating-text');
    const starBtns = ratingStars ? ratingStars.querySelectorAll('.star-btn') : [];

    const ratingTexts = {
        5: 'Excellent!',
        4: 'Very Good',
        3: 'Good',
        2: 'Fair',
        1: 'Poor'
    };

    starBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            ratingInput.value = rating;

            // Update stars
            starBtns.forEach((starBtn, i) => {
                const starValue = parseInt(starBtn.getAttribute('data-rating'));
                if (starValue <= rating) {
                    starBtn.classList.add('active');
                    starBtn.querySelector('i').className = 'fas fa-star';
                } else {
                    starBtn.classList.remove('active');
                    starBtn.querySelector('i').className = 'far fa-star';
                }
            });

            // Update text
            ratingText.textContent = ratingTexts[rating];
        });

        // Hover effect
        btn.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));

            starBtns.forEach((starBtn, i) => {
                const starValue = parseInt(starBtn.getAttribute('data-rating'));
                if (starValue <= rating) {
                    starBtn.querySelector('i').className = 'fas fa-star';
                } else {
                    starBtn.querySelector('i').className = 'far fa-star';
                }
            });
        });
    });

    // Reset stars on mouse leave (if no rating selected)
    if (ratingStars) {
        ratingStars.addEventListener('mouseleave', function() {
            const selectedRating = parseInt(ratingInput.value);

            starBtns.forEach((starBtn, i) => {
                const starValue = parseInt(starBtn.getAttribute('data-rating'));
                if (selectedRating && starValue <= selectedRating) {
                    starBtn.classList.add('active');
                    starBtn.querySelector('i').className = 'fas fa-star';
                } else {
                    starBtn.classList.remove('active');
                    starBtn.querySelector('i').className = 'far fa-star';
                }
            });
        });
    }

    // ===== Feedback Form Submission =====
    const feedbackForm = document.getElementById('feedbackForm');
    const formMessage = document.getElementById('formMessage');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const eventType = document.getElementById('event').value;
            const rating = document.getElementById('rating').value;
            const title = document.getElementById('title').value.trim();
            const message = document.getElementById('message').value.trim();
            const publish = document.querySelector('input[name="publish"]').checked;

            // Validation
            if (!name || !email || !rating || !message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Phone validation (if provided)
            if (phone && !/^[0-9+\-\s()]+$/.test(phone)) {
                showFormMessage('Please enter a valid phone number.', 'error');
                return;
            }

            // Prepare data
            const formData = {
                name,
                email,
                phone,
                eventType,
                rating,
                title,
                message,
                publish,
                submittedAt: new Date().toISOString()
            };

            // Simulate form submission (replace with actual API call)
            submitFeedbackForm(formData);
        });
    }

    function showFormMessage(text, type) {
        if (!formMessage) return;

        formMessage.className = 'form-message ' + type;

        if (type === 'success') {
            formMessage.innerHTML = '<i class="fas fa-check-circle"></i> ' + text;
        } else {
            formMessage.innerHTML = '<i class="fas fa-exclamation-circle"></i> ' + text;
        }

        formMessage.style.display = 'flex';

        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }

    function submitFeedbackForm(formData) {
        // Show loading state
        const submitBtn = feedbackForm.querySelector('.btn[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

        // Simulate API call
        setTimeout(() => {
            // Log to console (for demo purposes)
            console.log('Feedback submitted:', formData);

            // Store in localStorage (for demo purposes)
            const feedbacks = JSON.parse(localStorage.getItem('guruShisyanFeedbacks') || '[]');
            feedbacks.push(formData);
            localStorage.setItem('guruShisyanFeedbacks', JSON.stringify(feedbacks));

            // Show success message
            showFormMessage('Thank you for your feedback! We appreciate your time and valuable input.', 'success');

            // Reset form
            feedbackForm.reset();

            // Reset rating stars
            if (ratingInput) ratingInput.value = '';
            if (ratingText) ratingText.textContent = 'Select a rating';
            starBtns.forEach(btn => {
                btn.classList.remove('active');
                btn.querySelector('i').className = 'far fa-star';
            });

            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;

            // In a real application, you would send this data to your server
            // Example with fetch:
            /*
            fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                showFormMessage('Thank you for your feedback!', 'success');
                feedbackForm.reset();
            })
            .catch(error => {
                showFormMessage('An error occurred. Please try again.', 'error');
            })
            .finally(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            });
            */
        }, 1500);
    }

    // ===== Scroll Reveal Animation =====
    const revealElements = document.querySelectorAll('.service-card, .testimonial-card, .gallery-item, .contact-card');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initial styles for reveal animation
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // ===== Video Play Button (Optional) =====
    const playIcons = document.querySelectorAll('.play-icon');

    playIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // You can add lightbox functionality here
            alert('Video player would open here. Add your lightbox implementation.');
        });
    });

    // ===== Gallery Lightbox (Optional Enhancement) =====
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            const imgSrc = img ? img.src : '';

            if (imgSrc) {
                // You can add lightbox functionality here
                // For now, we'll just log the image source
                console.log('Gallery image clicked:', imgSrc);
            }
        });
    });

    // ===== WhatsApp Quick Message =====
    const whatsappLink = document.querySelector('a[href*="wa.me"]');

    if (whatsappLink) {
        whatsappLink.addEventListener('click', function(e) {
            // You can customize the WhatsApp message here
            const message = 'Hi Guru Shisyan, I would like to inquire about booking an event.';
            const phone = this.getAttribute('href').match(/wa.me\/(\d+)/);
            if (phone) {
                this.setAttribute('href', `https://wa.me/${phone[1]}?text=${encodeURIComponent(message)}`);
            }
        });
    }

    // ===== Contact Form Quick Actions =====
    const quickBookBtns = document.querySelectorAll('.contact .btn-primary[href^="tel:"]');

    quickBookBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Track booking clicks (for analytics)
            console.log('Quick booking initiated');
        });
    });

    // ===== Dynamic Year in Footer =====
    const yearElements = document.querySelectorAll('.footer-bottom p');

    yearElements.forEach(element => {
        if (element.textContent.includes('2026')) {
            element.textContent = element.textContent.replace('2026', new Date().getFullYear());
        }
    });

    // ===== Service Card Hover Sound Effect (Optional) =====
    // Uncomment if you want to add sound effects
    /*
    const serviceCards = document.querySelectorAll('.service-card');
    const hoverSound = new Audio('path/to/hover-sound.mp3');

    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            hoverSound.currentTime = 0;
            hoverSound.volume = 0.1;
            hoverSound.play().catch(() => {});
        });
    });
    */

    // ===== Testimonial Carousel (Optional Enhancement) =====
    // You can add a carousel for testimonials on mobile
    function initTestimonialCarousel() {
        if (window.innerWidth <= 768) {
            const testimonialsGrid = document.querySelector('.testimonials-grid');
            if (testimonialsGrid) {
                // Add carousel functionality here
                testimonialsGrid.style.scrollSnapType = 'x mandatory';
            }
        }
    }

    window.addEventListener('resize', initTestimonialCarousel);
    initTestimonialCarousel();

    // ===== Console Welcome Message =====
    console.log('%c🎵 Guru Shisyan Fusion Instrumental 🎵', 'color: #FFD700; font-size: 20px; font-weight: bold;');
    console.log('%cWhere Tradition Meets Innovation Through Music', 'color: #b8860b; font-size: 14px;');
    console.log('%cContact: +91 99940 80330 | Chidambaram, Tamil Nadu', 'color: #666; font-size: 12px;');
});

// ===== Service Worker Registration (for PWA) =====
// Uncomment this section if you want to add PWA functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed'));
    });
}
*/
