export function renderAppCard(project: any, index: number) {
  const featuresList = project.features.map((feature: string) => `
    <li class="flex items-start">
      <svg class="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      <span>${feature}</span>
    </li>
  `).join('');
  
  const isOdd = index % 2 !== 0;
  const imageFitClass = project.imageFit === 'contain' ? 'object-contain' : 'object-cover';

  const slides = project.images.map((img: string) => `
    <div class="flex-shrink-0 w-full h-full" role="group" aria-label="slide">
        <img src="${img}" alt="${project.title} screenshot" class="rounded-lg w-full h-full ${imageFitClass}" />
    </div>
  `).join('');

  const dots = project.images.map((_: any, i: number) => `
    <button class="w-2.5 h-2.5 rounded-full bg-white/30 hover:bg-white/60 transition-colors" data-slide-to="${i}" aria-label="Go to slide ${i + 1}"></button>
  `).join('');
  
  const imageBlock = `
    <div class="app-carousel group relative fade-in" style="transition-delay: 200ms;">
      <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="block">
        <div class="relative overflow-hidden rounded-lg shadow-xl aspect-video bg-surface border border-border-color">
            <div class="absolute inset-0 flex transition-transform duration-500 ease-in-out" data-carousel-track>
                ${slides}
            </div>
        </div>
      </a>
      ${project.images.length > 1 ? `
      <button data-carousel-prev class="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-20 disabled:cursor-not-allowed z-10">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button data-carousel-next class="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/60 transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-20 disabled:cursor-not-allowed z-10">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
      <div class="absolute bottom-4 left-0 right-0 flex justify-center space-x-2" data-carousel-dots>
          ${dots}
      </div>
      ` : ''}
    </div>
  `;
  
  const textBlock = `
    <div class="fade-in" style="transition-delay: 400ms;">
      <h3 class="text-2xl font-bold text-white font-display mb-3">${project.title}</h3>
      <p class="text-gray-400 mb-6 leading-relaxed">${project.description}</p>
      <ul class="space-y-3 mb-6 text-gray-300">
          ${featuresList}
      </ul>
      <a href="${project.link}" target="_blank" rel="noopener noreferrer" 
         title="Opens in a new tab"
         aria-label="View Project (opens in a new tab)"
         class="inline-flex items-center bg-primary/10 border-2 border-primary text-primary font-semibold py-3 px-6 rounded-lg
                hover:bg-primary hover:text-background transition-all duration-300 group/link">
          View Project
          <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002 2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
      </a>
    </div>
  `;

  return `
    <article class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center p-8 card-glow bg-surface border-2 border-primary hover:border-primary transition-colors duration-300 rounded-lg">
      <div class="${isOdd ? 'lg:order-last' : ''}">
        ${imageBlock}
      </div>
      <div>
        ${textBlock}
      </div>
    </article>
  `;
}

export function setupCarousels() {
  document.querySelectorAll('.app-carousel').forEach(carousel => {
    const track = carousel.querySelector<HTMLElement>('[data-carousel-track]');
    if (!track) return;
    
    const slides = Array.from(track.children) as HTMLElement[];
    const nextButton = carousel.querySelector<HTMLButtonElement>('[data-carousel-next]');
    const prevButton = carousel.querySelector<HTMLButtonElement>('[data-carousel-prev]');
    const dotsContainer = carousel.querySelector<HTMLElement>('[data-carousel-dots]');

    if (slides.length <= 1) {
        if(nextButton) nextButton.style.display = 'none';
        if(prevButton) prevButton.style.display = 'none';
        if(dotsContainer) dotsContainer.style.display = 'none';
        return;
    };

    let currentIndex = 0;
    const dots = Array.from(dotsContainer.children);

    const updateCarousel = () => {
      const slideWidth = slides[0].getBoundingClientRect().width;
      if (slideWidth === 0) return; // Don't update if not visible
      track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('bg-white', index === currentIndex);
        dot.classList.toggle('bg-white/30', index !== currentIndex);
      });
      
      prevButton.disabled = currentIndex === 0;
      nextButton.disabled = currentIndex === slides.length - 1;
    };

    nextButton.addEventListener('click', () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });

    dotsContainer.addEventListener('click', e => {
      const targetDot = (e.target as HTMLElement).closest('button');
      if (!targetDot) return;
      const targetIndex = dots.indexOf(targetDot);
      if (targetIndex !== -1) {
        currentIndex = targetIndex;
        updateCarousel();
      }
    });
    
    // Initial setup
    // Use a short timeout to ensure dimensions are calculated after layout
    setTimeout(updateCarousel, 0);

    new ResizeObserver(() => {
        track.classList.add('transition-none');
        updateCarousel();
        track.offsetHeight; // Force reflow
        track.classList.remove('transition-none');
    }).observe(carousel);
  });
}