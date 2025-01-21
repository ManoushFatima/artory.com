document.addEventListener("DOMContentLoaded", function() {
    const heroSection = document.querySelector('.hero');
    const overlay = document.querySelector('.overlay');
    const heroImage = document.querySelector('.hero-img');

    window.addEventListener('scroll', function() {
        // Parallax effect for background
        let scrollPosition = window.scrollY;
        let parallaxSpeed = 0.5;  
        heroSection.style.backgroundPosition = `center ${scrollPosition * parallaxSpeed}px`;

        // Fade effect for the hero section
        let opacity = 1 - scrollPosition / 500;  
        if (opacity < 0) opacity = 0;  
        heroSection.style.opacity = opacity;

        let scale = 1 - scrollPosition / 1500;  
        if (scale < 0.5) scale = 0.5; 
        heroImage.style.transform = `scale(${scale})`;
    });
});

document.getElementById('web3form').addEventListener('submit', function(event) {
    event.preventDefault();
    

    this.submit();
});
