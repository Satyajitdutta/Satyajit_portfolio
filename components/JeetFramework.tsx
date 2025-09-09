export function renderJeetChart(data: any[]) {
  const maxValue = 300; // Based on max value of JEET: 300 for Scalability Growth
  const chartItems = data.map(item => {
    const jeetHeight = (item.JEET / maxValue) * 100;
    const traditionalHeight = (item.Traditional / maxValue) * 100;
    return `
      <div class="flex flex-col flex-1 items-center justify-end h-full px-2 group">
        <div class="relative flex items-end h-full w-full max-w-[50px]">
          <div class="relative w-1/2 h-full flex items-end">
            <div class="w-full bg-white/10 rounded-t-md group-hover:bg-white/20 transition-colors" style="height: ${traditionalHeight}%;"></div>
          </div>
          <div class="relative w-1/2 h-full flex items-end">
            <div class="w-full bg-primary rounded-t-md group-hover:shadow-[0_0_15px_#FFC700] transition-shadow" style="height: ${jeetHeight}%;"></div>
          </div>
        </div>
        <span class="text-xs text-gray-400 mt-2 text-center">${item.name}</span>
      </div>
    `;
  }).join('');

  return `
    <div class="w-full h-full flex justify-around items-end text-white">
        ${chartItems}
    </div>
    <div class="flex justify-center mt-4 space-x-4 text-xs text-gray-300">
        <div class="flex items-center"><span class="w-3 h-3 bg-white/10 mr-2 rounded-sm"></span>Traditional Method (%)</div>
        <div class="flex items-center"><span class="w-3 h-3 bg-primary mr-2 rounded-sm"></span>JEET Framework (%)</div>
    </div>
  `;
}