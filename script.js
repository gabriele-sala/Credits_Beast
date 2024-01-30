document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById('dusk-logo');
    let x = window.innerWidth / 2 - logo.offsetWidth / 2;
    let y = window.innerHeight / 2 - logo.offsetHeight / 2;
    let xSpeed = 2, ySpeed = 2;
    const logoWidth = logo.offsetWidth;
    const logoHeight = logo.offsetHeight;

    function bounceLogo() {
        // Change direction when hitting the edge
        if (x + logoWidth > window.innerWidth || x < 0) {
            xSpeed *= -1;
        }
        if (y + logoHeight > window.innerHeight || y < 0) {
            ySpeed *= -1;
        }

        // Update the logo's position
        x += xSpeed;
        y += ySpeed;
        logo.style.left = x + 'px';
        logo.style.top = y + 'px';

        requestAnimationFrame(bounceLogo);
    }

    bounceLogo();
});



