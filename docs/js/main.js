// Main JavaScript for Elite AI Solutions Website

document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      mobileMenuToggle.classList.toggle('active');
    });
  }
  
  // Sticky Header
  const header = document.querySelector('.header');
  
  if (header) {
    const makeHeaderSticky = () => {
      if (window.scrollY > 100) {
        header.classList.add('sticky');
        if (window.scrollY > 200) {
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        } else {
          header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        }
      } else {
        header.classList.remove('sticky');
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      }
    };
    
    // Initial check
    makeHeaderSticky();
    
    // Listen for scroll
    window.addEventListener('scroll', makeHeaderSticky);
  }
  
  // FAQ Toggles
  const faqItems = document.querySelectorAll('.faq-item h3');
  
  if (faqItems.length > 0) {
    faqItems.forEach(item => {
      item.addEventListener('click', function() {
        this.parentElement.classList.toggle('active');
      });
    });
  }
  
  // Form Submission (for contact form)
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // In a real implementation, this would send the form data to a server
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Animation on scroll (simple version)
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
      const position = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (position < screenPosition) {
        element.classList.add('animate');
      }
    });
  };
  
  // Apply animation class to elements
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.classList.add('animate-on-scroll');
  });
  
  // Initial check for animations
  animateOnScroll();
  
  // Listen for scroll to trigger animations
  window.addEventListener('scroll', animateOnScroll);
});