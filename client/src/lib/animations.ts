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
    anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
      e.preventDefault();
      const targetId = this.getAttribute('href')?.substring(1);
      if (targetId) {
        smoothScrollTo(targetId);
      }
    });
  });
};

// Role change animation keyframes
export const roleChangeAnimation = `
  @keyframes roleChange {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .role-change {
    animation: roleChange 0.5s ease-out;
  }
`;

// Add animation styles to document
const styleSheet = document.createElement('style');
styleSheet.textContent = roleChangeAnimation;
document.head.appendChild(styleSheet);
