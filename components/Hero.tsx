import { LinkedinIcon } from './icons/LinkedinIcon.tsx';

export function Hero() {
  return `
    <section id="hero" class="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <spline-viewer url="https://prod.spline.design/FT-BlM92n7X5y52N/scene.splinecode" class="absolute inset-0 w-full h-full z-0"></spline-viewer>
        <div class="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-0"></div>
        <div class="relative z-10 p-4">
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white fade-in">
            Satyajit Dutta
            </h1>
            <p class="mt-4 text-lg sm:text-xl lg:text-2xl font-light text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-gradient-text fade-in" style="animation-delay: 400ms;">
            Principal HR Solution Architect | AI & Digital Transformation
            </p>
            <p class="mt-6 max-w-2xl mx-auto text-gray-400 fade-in" style="animation-delay: 800ms;">
            21+ years of innovation in AI-Driven HR Solutions, People Analytics & Organizational Excellence.
            </p>
            <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 fade-in" style="animation-delay: 1200ms;">
                <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=satyajit-digitalhr" target="_blank" rel="noopener noreferrer" 
                   class="inline-flex items-center justify-center text-background font-bold py-3 px-8 rounded-lg bg-gradient-to-r from-primary to-secondary
                          shadow-[0_0_15px_rgba(255,199,0,0.4)]
                          hover:shadow-[0_0_25px_rgba(255,199,0,0.7)] hover:scale-105
                          transition-all duration-300 w-full sm:w-auto">
                    ${LinkedinIcon()}
                    Follow on LinkedIn
                </a>
                <a href="https://raw.githubusercontent.com/Satyajitdutta/my-portfolio-assets/main/Satyajit_Dutta_Resume.pdf" target="_blank" rel="noopener noreferrer"
                    class="inline-flex items-center justify-center text-primary font-bold py-3 px-8 rounded-lg bg-transparent border-2 border-primary
                            hover:bg-primary/10 hover:text-white
                            transition-all duration-300 w-full sm:w-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Resume
                </a>
            </div>
        </div>
    </section>
  `;
}