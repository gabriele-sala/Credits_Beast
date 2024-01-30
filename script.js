document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById('dusk-logo');
    let x = 0, y = 0;
    let xSpeed = 2, ySpeed = 2;
    const logoWidth = 150; // Adjust to match the actual width of your logo
    const logoHeight = 150; // Adjust to match the actual height of your logo

    function bounceLogo() {
        x += xSpeed;
        y += ySpeed;

        if (x + logoWidth > window.innerWidth || x < 0) {
            xSpeed *= -1;
        }

        if (y + logoHeight > window.innerHeight || y < 0) {
            ySpeed *= -1;
        }

        logo.style.left = x + 'px';
        logo.style.top = y + 'px';

        requestAnimationFrame(bounceLogo);
    }

    bounceLogo();
});


