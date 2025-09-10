export function renderSkillCard(category: any, index: number) {
  const skillsList = category.skills.map((skill: any) => `
    <li class="flex items-center text-gray-400">
      <svg class="w-4 h-4 mr-3 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
      ${skill.name}
    </li>
  `).join('');

  return `
    <div class="p-6 rounded-lg card-glow fade-in border-2 border-primary hover:border-secondary transition-colors" style="transition-delay: ${index * 100}ms;">
      <h3 class="text-xl font-bold font-display text-white mb-4">${category.title}</h3>
      <ul class="space-y-3">
        ${skillsList}
      </ul>
    </div>
  `;
}