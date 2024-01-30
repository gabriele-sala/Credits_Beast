document.addEventListener("DOMContentLoaded", function() {
    const credits = document.querySelector(".credits");
    let scrollAmount = -window.innerHeight;
    let speed = 0.5;
    const maxSpeed = 2;
    const acceleration = 0.005;

    function scrollCredits() {
        if(speed < maxSpeed) {
            speed += acceleration;
        }
        
        scrollAmount += speed;
        credits.style.transform = `translateY(${scrollAmount}px) rotateX(25deg)`;

        if (scrollAmount < credits.clientHeight + window.innerHeight) {
            requestAnimationFrame(scrollCredits);
        }
    }

    setTimeout(scrollCredits, 2000); // Start after a short delay
});

