document.addEventListener("DOMContentLoaded", () => {
    /**
     * Header movement
     */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        const position = this.scrollY;
        console.log(position);
    });
});