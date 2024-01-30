document.addEventListener("DOMContentLoaded", function() {
    const credits = document.querySelector(".credits");
    let scrollAmount = -window.innerHeight;
    const speed = 1;

    function scrollCredits() {
        scrollAmount += speed;
        credits.style.transform = `translateY(${scrollAmount}px) rotateX(25deg)`;

        if (scrollAmount < credits.clientHeight + window.innerHeight) {
            requestAnimationFrame(scrollCredits);
        }
    }

    scrollCredits();
});
