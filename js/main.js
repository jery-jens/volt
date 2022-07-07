document.addEventListener("DOMContentLoaded", () => {
    const identifiers = {
        header: {
            queryName: ".header",
            scrolledDown: "scrolled-down",
        },
        button: {
            queryName: ".button",
            queryNameLabel: ".button-label",
            queryNameIcon: ".button-icon",
            activeHoverLabel: ".button-label-hover",
            activeHoverIcon: ".button-icon-hover",
        }
    };

    const elements = {
        header: document.querySelector(identifiers.header.queryName),
        buttons: document.querySelectorAll(identifiers.button.queryName),
    };

    const parameters = {
        header: {
            scrollDownMargin: 40,
        }
    };

    /**
     * Header movement
     */

    window.addEventListener("scroll", () => {
        const position = window.scrollY;
        position >= parameters.header.scrollDownMargin ? elements.header.classList.add(identifiers.header.scrolledDown) : elements.header.classList.remove(identifiers.header.scrolledDown);
    });

    /**
     * Button animation
     */

    elements.buttons.forEach((button) => {
        const label = button.querySelector(identifiers.button.queryNameLabel);
        const icon = button.querySelector(identifiers.button.queryNameIcon);

        button.addEventListener("mouseover", () => {
            label.classList.add(identifiers.button.activeHoverLabel);
            icon.classList.add(identifiers.button.activeHoverIcon);
        });

        button.addEventListener("mouseleave", () => {
            label.classList.remove(identifiers.button.activeHoverLabel);
            icon.classList.remove(identifiers.button.activeHoverIcon);
        });
    });
});