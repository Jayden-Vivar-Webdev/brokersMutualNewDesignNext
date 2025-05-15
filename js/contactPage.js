// FAQ Toggle
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        const icon = this.querySelector('i');
        
        if (this.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
        } else {
            content.style.maxHeight = '0';
        }
    });
});

// Form Submission
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to your server
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuButton.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});