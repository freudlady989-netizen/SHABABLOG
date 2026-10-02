// Dark Mode Toggle
const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// Read More Button
const readButtons = document.querySelectorAll(".readMore");

readButtons.forEach(button => {
    button.addEventListener("click", () => {
        const fullText = button.previousElementSibling;
        fullText.classList.toggle("hidden");
        button.textContent = fullText.classList.contains("hidden")
            ? "Read More"
            : "Show Less";
    });
});
// Category Filter
const filterLinks = document.querySelectorAll("[data-filter]");
const blogCards = document.querySelectorAll(".blog-card");

filterLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const category = link.getAttribute("data-filter");

        blogCards.forEach(card => {
            if (category === "all" || card.getAttribute("data-category") === category) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});
// Active Navbar Highlight
filterLinks.forEach(link => {
    link.addEventListener("click", () => {
        filterLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});
