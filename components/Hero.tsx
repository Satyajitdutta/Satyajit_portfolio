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
            <div class="mt-8 fade-in" style="animation-delay: 1200ms;">
            <a href="https://www.linkedin.com/in/satyajit-digitalhr" target="_blank" rel="noopener noreferrer" 
               class="inline-block bg-primary/10 border-2 border-primary text-primary font-semibold px-8 py-4 rounded-lg
                      hover:bg-primary hover:text-background
                      transition-all duration-300">
                Connect on LinkedIn
            </a>
            </div>
        </div>
    </section>
  `;
}