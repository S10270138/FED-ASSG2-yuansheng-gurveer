document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".category");

    categories.forEach(category => {
        category.addEventListener("mouseover", () => {
            category.style.boxShadow = "4px 4px 15px rgba(0, 0, 0, 0.3)";
        });

        category.addEventListener("mouseleave", () => {
            category.style.boxShadow = "2px 2px 10px rgba(0, 0, 0, 0.2)";
        });
    });
});
