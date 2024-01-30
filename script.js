document.addEventListener("DOMContentLoaded", function() {
    const videoFrame = document.getElementById('video-frame');
    const logoContainer = document.getElementById('logo-container');
    createLogo('Dusk moon logo.png');

    document.body.addEventListener('click', function() {
        if (videoFrame.muted) {
            videoFrame.muted = false;
            videoFrame.play();
        }
    });

    function createLogo(src) {
        const logo = new Image();
        logo.src = src;
        logo.className = 'dusk-logo';
        logo.style.left = `${Math.random() * window.innerWidth}px`;
        logo.style.top = `${Math.random() * window.innerHeight}px`;
        logo.onclick = splitLogo;
        logoContainer.appendChild(logo);
        bounceLogo(logo);
    }

    function bounceLogo(logo) {
        let xSpeed = 2, ySpeed = 2;

        function move() {
            let x = parseInt(logo.style.left, 10);
            let y = parseInt(logo.style.top, 10);
            if (x + logo.width > window.innerWidth || x < 0) xSpeed *= -1;
            if (y + logo.height > window.innerHeight || y < 0) ySpeed *= -1;
            logo.style.left = `${x + xSpeed}px`;
            logo.style.top = `${y + ySpeed}px`;
            requestAnimationFrame(move);
        }

        move();
    }

    function splitLogo(e) {
        createLogo(this.src);
        createLogo(this.src);
        e.stopPropagation(); // Prevent the event from bubbling up
    }
});
