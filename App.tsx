import { SKILLS_DATA, TIMELINE_DATA, APP_PROJECTS, JEET_CHART_DATA } from './constants.ts';
import { renderSkillCard } from './components/Skills.tsx';
import { renderTimelineItem } from './components/Timeline.tsx';
import { renderJeetChart } from './components/JeetFramework.tsx';
import { renderJeetGraphic } from './components/JeetGraphic.tsx';
import { renderAppCard } from './components/AppShowcase.tsx';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Contact } from './components/Contact.tsx';
import { Footer } from './components/Footer.tsx';

export function App() {
  return `
    <div class="relative">
      <div class="aurora-bg"></div>
      <div class="noise-overlay"></div>
      <div class="relative z-10">
        ${Header()}
        <main>
          ${Hero()}
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            ${About()}

            <section id="skills" class="py-20 sm:py-32">
              <h2 class="text-3xl font-bold font-display text-center mb-12 fade-in text-glow">Areas of Expertise</h2>
              <div id="skills-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                ${SKILLS_DATA.map(renderSkillCard).join('')}
              </div>
            </section>

            <section id="experience" class="py-20 sm:py-32">
                <h2 class="text-3xl font-bold font-display text-center mb-16 fade-in text-glow">Career Journey</h2>
                <div class="relative">
                    <!-- Vertical Timeline Line -->
                    <div class="absolute h-full w-px bg-border-color top-0 left-4 md:left-1/2 transform -translate-x-1/2"></div>
                    <div id="timeline-container" class="relative">
                        ${TIMELINE_DATA.map(renderTimelineItem).join('')}
                    </div>
                </div>
            </section>
          </div>
          
          <section id="jeet" class="py-20 sm:py-32 bg-surface/50 border-y border-border-color">
            <div class="container mx-auto px-4">
                <div class="fade-in">
                    <h2 class="text-3xl font-bold font-display text-center mb-4 text-glow">Signature Innovation</h2>
                    <h3 class="text-4xl lg:text-5xl font-bold font-display text-center gradient-text mb-12">JEET Framework</h3>

                    <p class="max-w-3xl mx-auto text-center text-gray-400 mb-12">
                        The JEET (Journey, Engagement, Experience, Talent) Framework represents a breakthrough in applying Agentic-AI to HR processes, delivering unprecedented efficiency and effectiveness in talent management.
                    </p>
                </div>

                ${renderJeetGraphic()}

                <div class="max-w-4xl mx-auto bg-surface/80 p-8 rounded-lg card-glow fade-in border-2 border-primary hover:border-secondary transition-colors" style="transition-delay: 500ms;">
                    <h3 class="text-2xl font-bold font-display text-center text-white mb-6">Framework Impact Metrics</h3>
                    <div id="jeet-chart-container" class="w-full h-72">
                      ${renderJeetChart(JEET_CHART_DATA)}
                    </div>
                </div>
            </div>
          </section>

          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <section id="apps" class="py-20 sm:py-32">
                <h2 class="text-3xl font-bold font-display text-center mb-16 fade-in text-glow">Application Portfolio</h2>
                <div id="apps-container" class="space-y-24 max-w-6xl mx-auto">
                  ${APP_PROJECTS.map(renderAppCard).join('')}
                </div>
            </section>
          </div>
          
          ${Contact()}
        </main>
        ${Footer()}
      </div>
    </div>
  `;
}