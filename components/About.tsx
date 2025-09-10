export function About() {
  return `
    <section id="about" class="py-20 sm:py-32">
        <div class="fade-in">
            <h2 class="text-3xl font-bold font-display text-center mb-12 text-glow">About Me</h2>
            <div class="max-w-4xl mx-auto p-8 card-glow border-2 border-primary hover:border-secondary transition-colors">
                <p class="text-lg leading-relaxed text-gray-300 text-center">
                    A visionary Principal HR Solution Architect with over 21+ years of experience designing and delivering next-generation human capital ecosystems. I specialize in translating complex business strategies into scalable, intelligent, and efficient functional blueprints for HRIS platforms. My core expertise lies in architecting AI-driven solutions for talent intelligence, automating end-to-end HR processes, and pioneering innovative frameworks that solve critical business challenges. As a trusted C-level advisor, I am passionate about building future-proof technology foundations that drive operational excellence, foster exceptional employee experiences, and create sustainable competitive advantages.
                </p>
                <div class="mt-8 text-center">
                    <a href="https://raw.githubusercontent.com/Satyajitdutta/my-portfolio-assets/main/Satyajit_Dutta_Resume.pdf" target="_blank" rel="noopener noreferrer"
                        class="inline-flex items-center justify-center text-background font-bold py-3 px-8 rounded-lg bg-gradient-to-r from-primary to-secondary
                                shadow-[0_0_15px_rgba(255,199,0,0.4)]
                                hover:shadow-[0_0_25px_rgba(255,199,0,0.7)] hover:scale-105
                                transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </div>
    </section>
  `;
}