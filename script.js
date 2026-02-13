// LIGHTBOX
function openLightbox(img) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox(event) {
    if (event.target.id === "lightbox" || event.target.className === "lightbox-close") {
        document.getElementById("lightbox").style.display = "none";
    }
}

// FADE IN ON SCROLL
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});