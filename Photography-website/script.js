const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach((image) => {
    image.addEventListener("error", () => {
        image.style.display = "none";
    });
});