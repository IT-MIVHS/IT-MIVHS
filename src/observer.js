const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
        else {
            entry.target.classList.remove("active");
        }
    });
}, {
    rootMargin: "0px",
    threshold: 1.0,
});

Array.from(document.getElementsByClassName("observe")).forEach(element => {
    observer.observe(element);
});
