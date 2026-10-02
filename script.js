// ===============================
// THEME SYSTEM
// ===============================

const toggleBtn = document.getElementById("toggleMode");

// Apply saved theme immediately
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");

    if (toggleBtn) {
        toggleBtn.textContent = "☀️";
    }
} else {
    document.body.classList.remove("light-mode");

    if (toggleBtn) {
        toggleBtn.textContent = "🌙";
    }
}


// Toggle Dark / Light Mode
if (toggleBtn) {

    toggleBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            localStorage.setItem("theme", "light");
            toggleBtn.textContent = "☀️";

        } else {

            localStorage.setItem("theme", "dark");
            toggleBtn.textContent = "🌙";

        }

    });

}


// ===============================
// CATEGORY FILTER
// ===============================

const filterLinks = document.querySelectorAll("[data-filter]");
const blogCards = document.querySelectorAll(".blog-card");

filterLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const category = link.getAttribute("data-filter");

        blogCards.forEach(card => {

            if (
                category === "all" ||
                card.getAttribute("data-category") === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// ===============================
// ACTIVE NAVIGATION
// ===============================

filterLinks.forEach(link => {

    link.addEventListener("click", () => {

        filterLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});
