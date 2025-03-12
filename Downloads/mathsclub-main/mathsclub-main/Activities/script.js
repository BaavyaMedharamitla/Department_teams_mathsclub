document.addEventListener('DOMContentLoaded', () => {
    // Add this new code at the top
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn?.addEventListener('click', () => {
        navLinks?.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            navLinks?.classList.remove('active');
            const icon = mobileMenuBtn?.querySelector('i');
            if (icon?.classList.contains('fa-times')) {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        }
    });

    // Particle animation
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    let particles = [];

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.color = Math.random() < 0.5 ? '#FF3366' : '#8A2BE2';
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width) this.x = 0;
            if (this.x < 0) this.x = canvas.width;
            if (this.y > canvas.height) this.y = 0;
            if (this.y < 0) this.y = canvas.height;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = this.opacity;
            ctx.fill();
        }
    }

    function init() {
        particles = [];
        const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        init();
    });

    resizeCanvas();
    init();
    animate();

    const cards = document.querySelectorAll('.activity-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });

    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '20px'
    };

    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, observerOptions);

    document.querySelectorAll('.activity-card, .round-card, .description-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        revealObserver.observe(el);
    });

    // Tab functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            document.getElementById(tabId)?.classList.add('active');
        });
    });

    // Enhanced flip card functionality with button handlers
    const flipCards = document.querySelectorAll('.flip-card');
    
    flipCards.forEach(card => {
        // Handle all button clicks within the card
        card.addEventListener('click', (e) => {
            const clickedButton = e.target.closest('button');
            if (clickedButton) {
                // Handle flip indicator click
                if (clickedButton.classList.contains('flip-indicator')) {
                    card.classList.toggle('flipped');
                }
                // Handle View Rounds button click
                if (clickedButton.classList.contains('flip-btn')) {
                    e.stopPropagation(); // Prevent event bubbling
                    card.classList.toggle('flipped');
                    
                    // Handle content transition
                    const backContent = card.querySelector('.rounds-info');
                    if (card.classList.contains('flipped')) {
                        backContent.style.opacity = '0';
                        setTimeout(() => {
                            backContent.style.opacity = '1';
                        }, 300);
                    }
                }
            }
        });

        // Keyboard handler
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.classList.toggle('flipped');
            }
            // Add Escape key to flip back
            if (e.key === 'Escape' && card.classList.contains('flipped')) {
                card.classList.remove('flipped');
            }
        });
    });

    // Add number animation for statistics
    const stats = document.querySelectorAll('.stat-number');
    
    const animateNumber = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const steps = 50;
        const stepValue = target / steps;
        let current = 0;
        
        const updateNumber = () => {
            current += stepValue;
            if (current > target) current = target;
            element.textContent = Math.floor(current);
            
            if (current < target) {
                requestAnimationFrame(updateNumber);
            }
        };
        
        updateNumber();
    };

    // Observe stats section for animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                stats.forEach(stat => animateNumber(stat));
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.participants-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }

    initStatCardAnimations();
});

// Function to animate the statistics numbers
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2500; // Increased duration for smoother animation
        let startTime = null;
        
        function easeOutQuart(x) {
            return 1 - Math.pow(1 - x, 4);
        }
        
        function animate(currentTime) {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easedProgress = easeOutQuart(progress);
            
            const current = Math.floor(target * easedProgress);
            stat.textContent = current.toLocaleString();
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        }
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                requestAnimationFrame(animate);
                observer.disconnect();
            }
        }, { threshold: 0.5 });
        
        observer.observe(stat);
    });
}

function initStatCardAnimations() {
    const statCards = document.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
        card.style.setProperty('--delay', `${index * 0.2}s`);
        
        // Add hover effect animation
        card.addEventListener('mouseenter', () => {
            card.querySelector('.stat-icon').style.transform = 'scale(1.1) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.querySelector('.stat-icon').style.transform = 'scale(1) rotate(0)';
        });
    });
}

// Initialize when document is loaded
document.addEventListener('DOMContentLoaded', animateStats);
