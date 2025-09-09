export function Header() {
  return `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <div class="flex-shrink-0">
            <a href="#" class="text-2xl font-bold font-display gradient-text">SD</a>
          </div>
          <nav class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-2">
              <a href="#about" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#experience" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors">Experience</a>
              <a href="#jeet" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors">Framework</a>
              <a href="#apps" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors">Apps</a>
              <a href="#contact" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  `;
}
