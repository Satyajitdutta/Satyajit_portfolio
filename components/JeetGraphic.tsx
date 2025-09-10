export const JEET_GRAPHIC_DATA = {
    nodes: [
        { id: 'journey', cx: 50, cy: 200, label: 'J', title: 'Journey Mapping', description: 'AI-powered employee journey visualization and optimization.' },
        { id: 'engagement', cx: 200, cy: 50, label: 'E', title: 'Engagement Optimization', description: 'Real-time engagement monitoring to proactively address retention risks.' },
        { id: 'experience', cx: 350, cy: 200, label: 'E', title: 'Experience Personalization', description: 'Customized learning and development paths powered by AI.' },
        { id: 'talent', cx: 200, cy: 350, label: 'T', title: 'Talent Intelligence', description: 'Predictive analytics for succession planning and talent mobility.' }
    ],
    center: { cx: 200, cy: 200 }
};

export function renderJeetGraphic() {
    const { nodes, center } = JEET_GRAPHIC_DATA;

    const nodeElements = nodes.map(node => `
        <g id="${node.id}" class="jeet-node cursor-pointer" 
           data-title="${node.title}" 
           data-description="${node.description}">
            <line x1="${center.cx}" y1="${center.cy}" x2="${node.cx}" y2="${node.cy}" class="jeet-line" />
            <circle cx="${node.cx}" cy="${node.cy}" r="30" class="jeet-circle-bg" />
            <circle cx="${node.cx}" cy="${node.cy}" r="30" class="jeet-circle-glow" />
            <text x="${node.cx}" y="${node.cy}" class="jeet-text" dy=".3em">${node.label}</text>
        </g>
    `).join('');

    return `
        <div class="relative max-w-lg mx-auto my-12 fade-in" style="transition-delay: 200ms;">
            <svg id="jeet-svg" viewBox="0 0 400 400" class="w-full h-auto">
                <defs>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                
                <!-- Lines and Nodes -->
                ${nodeElements}

                <!-- Center Hub -->
                <g class="jeet-center">
                    <circle cx="${center.cx}" cy="${center.cy}" r="45" class="jeet-center-bg" />
                    <text x="${center.cx}" y="${center.cy}" class="jeet-center-text" dy=".3em">JEET</text>
                </g>
            </svg>
             <div id="jeet-details-box" class="mt-8 p-8 rounded-lg card-glow border-2 border-primary hover:border-secondary transition-colors bg-surface min-h-[140px] flex flex-col justify-center duration-300">
                <h4 id="jeet-details-title" class="font-bold text-xl text-white mb-2 font-display transition-colors duration-300">Explore the Framework</h4>
                <p id="jeet-details-description" class="text-gray-400 transition-colors duration-300">Click on a letter (J, E, E, T) above to see the details of each component.</p>
            </div>
        </div>
    `;
}

export function setupJeetGraphicInteractivity() {
    const svg = document.getElementById('jeet-svg');
    if (!svg) return;
    
    const detailsTitle = document.getElementById('jeet-details-title') as HTMLElement;
    const detailsDescription = document.getElementById('jeet-details-description') as HTMLElement;
    const nodes = svg.querySelectorAll<SVGGElement>('.jeet-node');
    let activeNode: SVGGElement | null = null;
    
    const defaultTitle = 'Explore the Framework';
    const defaultDescription = 'Click on a letter (J, E, E, T) above to see the details of each component.';

    const resetDetailsBox = () => {
        if (detailsTitle) detailsTitle.textContent = defaultTitle;
        if (detailsDescription) detailsDescription.textContent = defaultDescription;
        if (activeNode) {
            activeNode.classList.remove('active');
            activeNode = null;
        }
    };

    nodes.forEach(node => {
        node.addEventListener('click', (e) => {
            e.stopPropagation(); 
            
            const targetNode = e.currentTarget as SVGGElement;
            
            if (activeNode === targetNode) {
                resetDetailsBox();
                return;
            }

            if (activeNode) {
                activeNode.classList.remove('active');
            }

            activeNode = targetNode;
            activeNode.classList.add('active');

            if (!detailsTitle || !detailsDescription) return;

            detailsTitle.textContent = targetNode.getAttribute('data-title');
            detailsDescription.textContent = targetNode.getAttribute('data-description');
        });
    });

    document.body.addEventListener('click', (e) => {
        // If the click is outside the SVG container, reset the box
        const container = (e.target as HTMLElement).closest('#jeet-svg');
        if (!container) {
            resetDetailsBox();
        }
    }, true);
}