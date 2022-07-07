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

    const parameters = {
        header: {
            scrollDownMargin: 200,
        }
    };

    /**
     * Header movement
     */

    window.addEventListener("scroll", () => {
        const position = window.scrollY;
        position >= parameters.header.scrollDownMargin ? elements.header.classList.add(identifiers.header.scrolledDown) : elements.header.classList.remove(identifiers.header.scrolledDown);
    });
});