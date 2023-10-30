function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function parallaxEffect(elementId, speedAdjuster) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`No element found with ID: ${elementId}`);
        return;
    }

    const updatePosition = () => {
        const offset = (window.scrollY) /  speedAdjuster;
        element.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', debounce(() => {
        requestAnimationFrame(updatePosition);
    }),10);
}



parallaxEffect("Layer_1", 18);
parallaxEffect("Layer_2", -18);

parallaxEffect("Layer_3", -15);

parallaxEffect("Layer_4", -10);

parallaxEffect("section_2", -4);

parallaxEffect("DandarsBanner", 10);

parallaxEffect("what_we_carry", -10);
