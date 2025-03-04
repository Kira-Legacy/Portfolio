document.addEventListener('DOMContentLoaded', function() {
    const portfolioTitle = document.getElementById('portfolio-title');
    const navigatinglink = document.getElementById('link');
    if (navigatinglink) {
        navigatinglink.addEventListener('mouseover', function() {
            navigatinglink.style.transform = 'translateY(-50px)';
            navigatinglink.style.transition = 'transform 0.8s';
        });

        navigatinglink.addEventListener('mouseout', function() {
            navigatinglink.style.transform = 'translateY(0)';
        });
    }
    if (portfolioTitle) {
        portfolioTitle.textContent = 'Welcome to My Portfolio';
    }
});

