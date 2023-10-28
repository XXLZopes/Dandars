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
        const offset = window.scrollY / speedAdjuster;
        element.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', debounce(() => {
        requestAnimationFrame(updatePosition);
    }, 10));
}

// Example usage:
// parallaxEffect('yourElementId', 1.5);


parallaxEffect("Layer_1", -.9)
parallaxEffect("Layer_2", -2)
parallaxEffect("Layer_6", -.9)
parallaxEffect("Ribbon_2Con", 10)
// setParallaxEffect("Layer_3", 0)
// parallaxEffect("Layer_4", 100)