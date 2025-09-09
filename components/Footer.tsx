export function Footer() {
  return `
    <footer class="bg-background border-t border-border-color">
      <div class="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
        <div class="flex justify-center space-x-6 mb-4">
            <a href="mailto:jeetworkdomain@gmail.com" aria-label="Email" class="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </a>
            <a href="https://www.linkedin.com/in/satyajit-digitalhr" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
        </div>
        <p>&copy; ${new Date().getFullYear()} Satyajit Dutta. All Rights Reserved.</p>
      </div>
    </footer>
  `;
}