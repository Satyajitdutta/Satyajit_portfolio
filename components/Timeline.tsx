export function renderTimelineItem(event: any, index: number) {
  const isOdd = index % 2 !== 0;

  const impactList = event.impact.map((item: string) => `
    <li class="flex items-start">
        <svg class="w-4 h-4 mr-2 mt-1 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>${item}</span>
    </li>
    `).join('');
  
  const contentBlock = `
    <div class="rounded-lg px-6 py-4 card-glow fade-in border-2 border-primary">
        <p class="text-sm text-primary font-semibold">${event.date}</p>
        <h3 class="mb-1 font-bold text-white text-lg">${event.title}</h3>
        <h4 class="mb-3 font-semibold text-gray-400 text-md">${event.company}</h4>
        <p class="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">${event.description}</p>
        <ul class="mt-3 space-y-2 text-gray-400 text-sm">
            ${impactList}
        </ul>
    </div>
  `;

  return `
    <div class="mb-8 relative">
        <!-- Dot on the line -->
        <div class="absolute flex items-center justify-center w-8 h-8 bg-surface rounded-full top-0 left-4 md:left-1/2 transform -translate-x-1/2 -translate-y-2 border-4 border-background">
             <div class="w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#FFC700]"></div>
        </div>

        <!-- Content Card -->
        <div class="w-full md:w-1/2 ${isOdd ? 'md:ml-auto md:pl-16' : 'md:mr-auto md:pr-16'} pl-14">
            ${contentBlock}
        </div>
    </div>
  `;
}