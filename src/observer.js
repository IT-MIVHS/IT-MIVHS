export function start_observe() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
            else if (!(entry.target.classList.contains("observe-bottom") || entry.target.classList.contains("observe-left") || entry.target.classList.contains("observe-right") || entry.target.classList.contains("observe-top"))) {
                entry.target.classList.remove("active");
            }
        });
    }, {
        rootMargin: "0px",
        threshold: 1,
    });

    Array.from(document.getElementsByClassName("observe")).forEach(element => {
        observer.observe(element);
        element.classList.add("observed");
        element.classList.remove("observe");
    });

    console.log("OBSERVER");
}