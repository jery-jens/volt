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
            activeHoverLabel: "button-label-hover",
            activeHoverIcon: "button-icon-hover",
        },
        calculator: {
            radios: {
                monthly: ".monthly",
                annualy: ".annualy",
                diesel: ".diesel",
                petrol: ".petrol",
                active: ".radio-active",
                hideActive: "hidden",
            },
        }
    };

    const elements = {
        header: document.querySelector(identifiers.header.queryName),
        buttons: document.querySelectorAll(identifiers.button.queryName),
        calculator: {
            radioAnnual: document.querySelector(identifiers.calculator.radios.annualy),
            radioMonthly: document.querySelector(identifiers.calculator.radios.monthly),
            radioDiesel: document.querySelector(identifiers.calculator.radios.diesel),
            radioPetrol: document.querySelector(identifiers.calculator.radios.petrol),
        }
    };

    const parameters = {
        header: {
            scrollDownMargin: 40,
        },
        calculator: {

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

    /**
     * Calculator
     */

    elements.calculator.radioAnnual.addEventListener("click", () => {
        const dot = elements.calculator.radioAnnual.querySelector(identifiers.calculator.radios.active);

        if (!dot.classList.contains(identifiers.calculator.radios.hideActive)) {
            dot.classList.add(identifiers.calculator.radios.hideActive);
            elements.calculator.radioMonthly.querySelector(identifiers.calculator.radios.active).classList.remove(identifiers.calculator.radios.hideActive);
        };
    });

    elements.calculator.radioMonthly.addEventListener("click", () => {
        const dot = elements.calculator.radioMonthly.querySelector(identifiers.calculator.radios.active);

        if (!dot.classList.contains(identifiers.calculator.radios.hideActive)) {
            dot.classList.add(identifiers.calculator.radios.hideActive);
            elements.calculator.radioAnnual.querySelector(identifiers.calculator.radios.active).classList.remove(identifiers.calculator.radios.hideActive);
        };
    });
});