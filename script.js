document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById('dusk-logo');
    let x = 0, y = 0;
    let xSpeed = 2, ySpeed = 2;
    const logoWidth = logo.offsetWidth;
    const logoHeight = logo.offsetHeight;

    function bounceLogo() {
        // Invert speed when logo hits the edge of the window
        if (x + logoWidth > window.innerWidth || x < 0) {
            xSpeed *= -1;
        }
        if (y + logoHeight > window.innerHeight || y < 0) {
            ySpeed *= -1;
        }

        // Update logo position
        x += xSpeed;
        y += ySpeed;
        logo.style.left = x + 'px';
        logo.style.top = y + 'px';

        requestAnimationFrame(bounceLogo);
    }

    // Center logo starting position
    x = (window.innerWidth - logoWidth) / 2;
    y = (window.innerHeight - logoHeight) / 2;

    bounceLogo();
});


