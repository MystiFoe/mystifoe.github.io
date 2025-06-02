export const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          // Trigger any animation counters when element comes into view
          if (entry.target.hasAttribute('data-counter')) {
            animateCounter(entry.target as HTMLElement);
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe all elements with animation classes
  document.querySelectorAll('.fade-in, .slide-up, [data-counter]').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

export const animateCounter = (element: HTMLElement) => {
  const target = parseInt(element.getAttribute('data-counter') || '0');
  const increment = target / 50;
  let current = 0;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toString();
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toString();
    }
  }, 40);
};

export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

// Initialize animations when DOM is loaded
export const initializeAnimations = () => {
  // Set up intersection observer for animations
  observeElements();
  
  // Add smooth scrolling to all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href')?.substring(1);
      if (targetId) {
        smoothScrollTo(targetId);
      }
    });
  });
};
