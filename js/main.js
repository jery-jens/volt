document.addEventListener("DOMContentLoaded", () => {
    const identifiers = {
        header: {
            queryName: ".header",
            scrolledDown: "scrolled-down",
        }
    };

    const elements = {
        header: document.querySelector(identifiers.header.queryName),
    };

    /**
     * Header movement
     */

    window.addEventListener("scroll", () => {
        const position = this.scrollY;
        position >= 200 ? elements.header.classList.add(identifiers.header.scrolledDown) : elements.header.classList.remove(identifiers.header.scrolledDown);
    });
});