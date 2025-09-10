import { App } from './App.tsx';
import { setupCarousels } from './components/AppShowcase.tsx';
import { setupJeetGraphicInteractivity } from './components/JeetGraphic.tsx';

/**
 * Sets up a scroll spy to highlight the active navigation link based on scroll position.
 */
function setupHeaderScrollSpy() {
  const headerNav = document.getElementById('header-nav');
  if (!headerNav) return;

  const navLinks = Array.from(headerNav.querySelectorAll('a[href^="#"]'));
  const sections = navLinks.map(link => {
    const href = link.getAttribute('href');
    return href ? document.querySelector<HTMLElement>(href) : null;
  }).filter((el): el is HTMLElement => el !== null);

  if (sections.length === 0) return;
  
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;

  const onScroll = () => {
    const scrollPosition = window.scrollY + headerHeight + 50; // Offset for better accuracy
    let currentSectionId: string | null = null;
    
    for (const section of sections) {
      if (section.offsetTop <= scrollPosition) {
        currentSectionId = section.id;
      } else {
        break;
      }
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', onScroll);
  onScroll(); // Initial check
}


/**
 * Attaches all the interactive behaviors to the DOM after the main app is rendered.
 */
function postRenderSetup() {
  const header = document.querySelector('header');
  const splineViewer = document.querySelector('spline-viewer');
  
  // Header scroll behavior & Parallax
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.classList.add('bg-background/80', 'backdrop-blur-sm', 'border-b', 'border-border-color/50');
      } else {
        header.classList.remove('bg-background/80', 'backdrop-blur-sm', 'border-b', 'border-border-color/50');
      }

      // Parallax effect for Hero Spline Viewer
      if (splineViewer && window.innerWidth > 768) { // Only on larger screens
        const scrollY = window.scrollY;
        (splineViewer as HTMLElement).style.transform = `translateY(${scrollY * 0.3}px)`;
      }
    });
  }

  // Smooth scrolling for internal navigation links
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (!targetId) return;
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerEl = document.querySelector('header');
        const headerHeight = headerEl ? headerEl.offsetHeight : 0;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 24; // 24px for padding

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Dynamic card glow effect
  document.querySelectorAll('.card-glow').forEach(card => {
    card.addEventListener('mousemove', (e: MouseEvent) => {
      const targetCard = e.currentTarget as HTMLElement;
      const rect = targetCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      targetCard.style.setProperty('--x', `${x}px`);
      targetCard.style.setProperty('--y', `${y}px`);
    });
  });

  // Setup LinkedIn Share Button
  const shareButton = document.getElementById('linkedin-share-button');
  if (shareButton) {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
    shareButton.setAttribute('href', shareUrl);
  }

  // Initialize JEET Framework Graphic
  setupJeetGraphicInteractivity();

  // Initialize carousels for the app portfolio
  setupCarousels();

  // Highlight active nav link on scroll
  setupHeaderScrollSpy();

  // Animate elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
}

// --- MAIN EXECUTION ---
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = App();
    postRenderSetup();
  }
});