document.addEventListener("DOMContentLoaded", function() {
    const videoFrame = document.getElementById('video-frame');
    const logoContainer = document.getElementById('logo-container');
    createLogo('Dusk moon logo.png', 'dusk-logo', 150);
    createLogo('dalinar.png', 'dalinar-logo', 150);

    document.body.addEventListener('click', function() {
        if (videoFrame.muted) {
            videoFrame.muted = false;
            videoFrame.play();
        }
    });

    function createLogo(src, className, size) {
        const logo = new Image(size, size);
        logo.src = src;
        logo.className = className;
        logo.style.left = `${Math.random() * window.innerWidth}px`;
        logo.style.top = `${Math.random() * window.innerHeight}px`;
        logo.onclick = function(e) { splitLogo(e, className, size); };
        logoContainer.appendChild(logo);
        bounceLogo(logo);
    }

    function bounceLogo(logo) {
        let xSpeed = 2 + Math.random() * 3, ySpeed = 2 + Math.random() * 3;

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

    function splitLogo(e, className, size) {
        // Reduce size by half for each split
        size = size / 2;
        if (size >= 30) { // Set a minimum size to prevent logos from getting too small
            createLogo(e.target.src, className, size);
            createLogo(e.target.src, className, size);
        }
        e.stopPropagation(); // Prevent the event from bubbling up
    }
});

