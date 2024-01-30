document.addEventListener("DOMContentLoaded", function() {
    const credits = document.querySelector(".credits");
    let scrollAmount = 0;
    const speed = 1; // Adjust speed if needed

    function scrollCredits() {
        scrollAmount += speed;
        credits.style.transform = `translateY(-${scrollAmount}px)`;

        if (scrollAmount < credits.clientHeight) {
            requestAnimationFrame(scrollCredits);
        }
    }

    scrollCredits();
});
