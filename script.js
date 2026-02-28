document.addEventListener("DOMContentLoaded", () => {
    // 1. Fetch and inject the Navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            
            // Re-bind hamburger event listener AFTER the HTML is injected
            const hamburger = document.getElementById('hamburger');
            const navLinks = document.getElementById('nav-links');
            
            if (hamburger && navLinks) {
                hamburger.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }
        })
        .catch(error => console.error('Error loading navbar:', error));
});

// 2. Video Player Logic
function playVideo(videoSrc) {
    const player = document.getElementById('movie-player');
    player.src = videoSrc;
    player.play();
}

// 3. Theme Changer Logic
function setTheme(themeName) {
    if (themeName === 'classic') {
        document.documentElement.removeAttribute('data-theme');
    } else {
        document.documentElement.setAttribute('data-theme', themeName);
    }
}