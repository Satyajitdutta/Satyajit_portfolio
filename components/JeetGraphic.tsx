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
            <div id="jeet-tooltip" class="jeet-tooltip" role="tooltip">
                <h4 id="jeet-tooltip-title" class="font-bold text-white mb-1"></h4>
                <p id="jeet-tooltip-description" class="text-sm text-gray-400"></p>
            </div>
        </div>
    `;
}

export function setupJeetGraphicInteractivity() {
    const svg = document.getElementById('jeet-svg');
    const tooltip = document.getElementById('jeet-tooltip');
    if (!svg || !tooltip) return;
    
    const tooltipTitle = document.getElementById('jeet-tooltip-title') as HTMLElement;
    const tooltipDescription = document.getElementById('jeet-tooltip-description') as HTMLElement;
    const nodes = svg.querySelectorAll<SVGGElement>('.jeet-node');
    let activeNode: SVGGElement | null = null;

    const hideTooltip = () => {
        if (!tooltip) return;
        tooltip.style.opacity = '0';
        tooltip.style.transform = 'translateY(10px)';
        if (activeNode) {
            activeNode.classList.remove('active');
            activeNode = null;
        }
    };

    nodes.forEach(node => {
        node.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent body click listener from firing immediately
            
            const targetNode = e.currentTarget as SVGGElement;
            
            // If clicking the same active node again, hide it.
            if (activeNode === targetNode) {
                hideTooltip();
                return;
            }

            // Remove active state from previous node
            if (activeNode) {
                activeNode.classList.remove('active');
            }

            // Set new active node
            activeNode = targetNode;
            activeNode.classList.add('active');

            const circle = targetNode.querySelector('.jeet-circle-bg');
            if (!tooltipTitle || !tooltipDescription || !circle) return;

            // 1. Update tooltip content
            tooltipTitle.textContent = targetNode.getAttribute('data-title');
            tooltipDescription.textContent = targetNode.getAttribute('data-description');
            
            // Reading offsetWidth forces a reflow, ensuring the new content's size is calculated for centering
            const tooltipWidth = tooltip.offsetWidth;

            // 2. Get node position
            const nodeRect = circle.getBoundingClientRect();
            const offset = 10; // Space between node and tooltip

            // 3. Calculate position
            const top = nodeRect.bottom + window.scrollY + offset;
            let left = nodeRect.left + (nodeRect.width / 2) - (tooltipWidth / 2);

            // 4. Boundary checks
            const viewportWidth = window.innerWidth;
            if (left < 10) left = 10;
            if (left + tooltipWidth > viewportWidth - 10) left = viewportWidth - tooltipWidth - 10;
            
            // 5. Set position and animate in
            tooltip.style.left = `${left}px`;
            tooltip.style.top = `${top}px`;
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateY(0)';
        });
    });

    // Hide tooltip when clicking outside
    document.body.addEventListener('click', hideTooltip, true);
}