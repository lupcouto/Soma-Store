const cards = document.querySelectorAll(".card-produto");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {

            setTimeout(() => {
                entry.target.classList.add("aparecer");
            }, index * 200);

        }
    });
}, {
    threshold: 0.25
});

cards.forEach(card => observer.observe(card));

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});