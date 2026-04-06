// ==========================================
// DATA INJECTION LOGIC (From constant.js)
// ==========================================

function populatePortfolio() {
    const data = PORTFOLIO_DATA;

    // 1. Personal Info & Header
    document.getElementById('page-title').textContent = `${data.personal.name} | Portfolio`;
    document.getElementById('nav-logo').textContent = data.personal.logoText;
    
    document.getElementById('hero-name').innerHTML = data.personal.name;
    document.getElementById('hero-role').textContent = data.personal.role;
    document.getElementById('hero-desc').innerHTML = data.personal.heroDescription;
    
    const heroImgPlaceholder = document.getElementById('hero-img-placeholder');
    document.getElementById('hero-resume').href = data.personal.resumeURL;
    
    if (data.personal.heroImage) {
        heroImgPlaceholder.innerHTML = `<img src="${data.personal.heroImage}" alt="${data.personal.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
    } else {
        document.getElementById('hero-img-text').textContent = data.personal.logoText;
    }

    // 2. About Info
    const aboutParagraphs = document.getElementById('about-paragraphs');
    data.about.paragraphs.forEach(para => {
        const p = document.createElement('p');
        p.textContent = para;
        p.style.marginBottom = "1.5rem"; // adding the style that was previously on the p tags
        aboutParagraphs.appendChild(p);
    });

    document.getElementById('about-degree').textContent = data.personal.degree;
    document.getElementById('about-interests').textContent = data.personal.interests;
    document.getElementById('about-location').textContent = data.personal.location;
    document.getElementById('about-email').textContent = data.personal.email;

    // 3. Skills
    const skillsContainer = document.getElementById('skills-container');
    data.skills.forEach(skill => {
        skillsContainer.innerHTML += `
            <div class="skill-card">
                <div class="skill-icon"><i class="${skill.icon}"></i></div>
                <h3>${skill.title}</h3>
                <p>${skill.description}</p>
            </div>
        `;
    });

    // 4. Experience
    const expContainer = document.getElementById('experience-container');
    data.experience.forEach(exp => {
        let tasksHtml = exp.tasks.map(task => `<li>${task}</li>`).join('');
        expContainer.innerHTML += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <span class="date">${exp.period}</span>
                    <h3>${exp.role}</h3>
                    <h4>${exp.company}</h4>
                    <ul>${tasksHtml}</ul>
                </div>
            </div>
        `;
    });

    // 5. Projects
    const projContainer = document.getElementById('projects-container');
    data.projects.forEach(proj => {
        let techHtml = proj.techStack.map(tech => `<span>${tech}</span>`).join('');
        let imgHtml = proj.imageURL 
            ? `<img src="${proj.imageURL}" alt="${proj.title}" style="width: 100%; height: 100%; object-fit: cover;">`
            : proj.imageText;
            
        projContainer.innerHTML += `
        <a href="${proj.link}" style="text-decoration: none; color: inherit;">
            <div class="project-card">
                <div class="project-img-placeholder" style="${proj.imageURL ? 'padding: 0;' : ''}">
                    ${imgHtml}
                </div>
                <div class="project-info">
                    <h3>${proj.title}</h3>
                    <p>${proj.description}</p>
                    <div class="project-tech">
                        ${techHtml}
                    </div>
                </div>
            </div>
        </a>
        `;
    });

    // 6. Contact and Footer
    document.getElementById('contact-email').textContent = data.personal.email;
    document.getElementById('contact-location').textContent = data.personal.location;
    
    document.getElementById('link-linkedin').href = data.personal.linkedin;
    document.getElementById('link-github').href = data.personal.github;
    document.getElementById('link-twitter').href = data.personal.twitter;

    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('footer-name').textContent = data.personal.name;
}


// ==========================================
// DOM INTERACTION LOGIC
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    emailjs.init("Eu9jcJRw9SVkUQwA3");

    // Inject all content first
    populatePortfolio();

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    // Grab all elements we want to animate
    const animatedElements = document.querySelectorAll('.section-title, .about-text, .skill-card, .timeline-item, .project-card, .hero-text, .hero-image');
    
    animatedElements.forEach((el) => {
        el.classList.add('fade-in');
        
        // Add staggering delays to grids
        if (el.classList.contains('skill-card') || el.classList.contains('project-card')) {
            const parent = el.parentElement;
            const children = Array.from(parent.children);
            const myIndex = children.indexOf(el);
            el.style.transitionDelay = `${myIndex * 150}ms`;
        }
        
        observer.observe(el);
    });

    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    // Add scrolled class to header when scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Highlight active nav item based on scroll position
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            
            if (pageYOffset >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change icon between bars and times
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact Form AJAX Submission
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent page redirection
            
            // Initial UI update
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(contactForm);

            // Using EmailJS
            emailjs.send("service_8tgle39", "template_tcfswf5", {
                name: formData.get("name"),
                email: formData.get("email"),
                message: formData.get("message")
            })
            .then(() => {
                    Toastify({
                        text: "Message sent successfully!",
                        duration: 3000,
                        gravity: "top",
                        position: "center",
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                            borderRadius: "8px",
                            fontFamily: "Inter, sans-serif"
                        }
                    }).showToast();
                    contactForm.reset();
            })
            .catch(error => {
                Toastify({
                    text: "Oops! Something went wrong.",
                    duration: 3000,
                    gravity: "top",
                    position: "center",
                    style: {
                        background: "linear-gradient(to right, #ff5f6d, #ffc371)",
                        borderRadius: "8px",
                        fontFamily: "Inter, sans-serif"
                    }
                }).showToast();
                console.error(error);
            })
            .finally(() => {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            });
        });
    }
});
