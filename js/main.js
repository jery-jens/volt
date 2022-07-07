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
                annualy: ".annual",
                diesel: ".diesel",
                petrol: ".petrol",
                active: ".radio-active",
                hideActive: "hidden",
            },
            values: {
                fuelPrice: ".fuel-car-price",
                evPrice: ".ev-car-price",
                fuelEfficiency: ".fuel-car-efficiency",
                evEfficiency: ".ev-car-efficiency",
                fuelCost: ".fuel-car-cost",
                evCost: ".ev-car-cost",
                fuelRoadTax: ".fuel-car-road-tax",
                evRoadTax: ".ev-car-road-tax",
                fuelCo: ".fuel-car-co2",
                evCo: ".ev-car-co2",
            },
            labels: {
                perMonth: ".per-label",
                savingPrice: ".calculator-price",
            }
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

    let currentView = "monthly";
    let currentType = "petrol";

    const changeCalc = (view, type) => {
        document.querySelector(identifiers.calculator.labels.perMonth).innerHTML = view === "monthly" ? "Costs per month" : "Costs per year";

        if (view === "monthly" && type === "petrol") {
            document.querySelector(identifiers.calculator.values.fuelCo).innerHTML = "133 kg";
            document.querySelector(identifiers.calculator.values.fuelCost).innerHTML = "£ 130";
            document.querySelector(identifiers.calculator.values.fuelEfficiency).innerHTML = "48.75 mpg";
            document.querySelector(identifiers.calculator.values.fuelPrice).innerHTML = "192.2 pence per litre";
            document.querySelector(identifiers.calculator.values.fuelRoadTax).innerHTML = "£ 240";

            document.querySelector(identifiers.calculator.values.evCo).innerHTML = "0 kg";
            document.querySelector(identifiers.calculator.values.evCost).innerHTML = "£ 52";
            document.querySelector(identifiers.calculator.values.evEfficiency).innerHTML = "3-3.5 miles per Kw";
            document.querySelector(identifiers.calculator.values.evPrice).innerHTML = "27 pence per KwH";
            document.querySelector(identifiers.calculator.values.evRoadTax).innerHTML = "£ 0";

            document.querySelector(identifiers.calculator.labels.savingPrice).innerHTML = "78";
        };

        if (view === "monthly" && type === "diesel") {
            document.querySelector(identifiers.calculator.values.fuelCo).innerHTML = "123 kg";
            document.querySelector(identifiers.calculator.values.fuelCost).innerHTML = "£ 112";
            document.querySelector(identifiers.calculator.values.fuelEfficiency).innerHTML = "60.15 mpg";
            document.querySelector(identifiers.calculator.values.fuelPrice).innerHTML = "199.2 pence per litre";
            document.querySelector(identifiers.calculator.values.fuelRoadTax).innerHTML = "£ 240";

            document.querySelector(identifiers.calculator.values.evCo).innerHTML = "0 kg";
            document.querySelector(identifiers.calculator.values.evCost).innerHTML = "£ 52";
            document.querySelector(identifiers.calculator.values.evEfficiency).innerHTML = "3-3.5 miles per Kw";
            document.querySelector(identifiers.calculator.values.evPrice).innerHTML = "27 pence per KwH";
            document.querySelector(identifiers.calculator.values.evRoadTax).innerHTML = "£ 0";

            document.querySelector(identifiers.calculator.labels.savingPrice).innerHTML = "60";
        };

        if (view === "annual" && type === "petrol") {
            document.querySelector(identifiers.calculator.values.fuelCo).innerHTML = "1602 kg";
            document.querySelector(identifiers.calculator.values.fuelCost).innerHTML = "£ 1558";
            document.querySelector(identifiers.calculator.values.fuelEfficiency).innerHTML = "48.75 mpg";
            document.querySelector(identifiers.calculator.values.fuelPrice).innerHTML = "192.2 pence per litre";
            document.querySelector(identifiers.calculator.values.fuelRoadTax).innerHTML = "£ 240";

            document.querySelector(identifiers.calculator.values.evCo).innerHTML = "0 kg";
            document.querySelector(identifiers.calculator.values.evCost).innerHTML = "£ 623";
            document.querySelector(identifiers.calculator.values.evEfficiency).innerHTML = "3-3.5 miles per Kw";
            document.querySelector(identifiers.calculator.values.evPrice).innerHTML = "27 pence per KwH";
            document.querySelector(identifiers.calculator.values.evRoadTax).innerHTML = "£ 0";

            document.querySelector(identifiers.calculator.labels.savingPrice).innerHTML = "934";
        };

        if (view === "annual" && type === "diesel") {
            document.querySelector(identifiers.calculator.values.fuelCo).innerHTML = "1481 kg";
            document.querySelector(identifiers.calculator.values.fuelCost).innerHTML = "£ 1347";
            document.querySelector(identifiers.calculator.values.fuelEfficiency).innerHTML = "60.15 mpg";
            document.querySelector(identifiers.calculator.values.fuelPrice).innerHTML = "199.2 pence per litre";
            document.querySelector(identifiers.calculator.values.fuelRoadTax).innerHTML = "£ 240";

            document.querySelector(identifiers.calculator.values.evCo).innerHTML = "0 kg";
            document.querySelector(identifiers.calculator.values.evCost).innerHTML = "£ 623";
            document.querySelector(identifiers.calculator.values.evEfficiency).innerHTML = "3-3.5 miles per Kw";
            document.querySelector(identifiers.calculator.values.evPrice).innerHTML = "27 pence per KwH";
            document.querySelector(identifiers.calculator.values.evRoadTax).innerHTML = "£ 0";

            document.querySelector(identifiers.calculator.labels.savingPrice).innerHTML = "724";
        };
    };

    elements.calculator.radioMonthly.addEventListener("click", () => {
        const dot = elements.calculator.radioAnnual.querySelector(identifiers.calculator.radios.active);
        currentView = "monthly";

        if (!dot.classList.contains(identifiers.calculator.radios.hideActive)) {
            dot.classList.add(identifiers.calculator.radios.hideActive);
            elements.calculator.radioMonthly.querySelector(identifiers.calculator.radios.active).classList.remove(identifiers.calculator.radios.hideActive);
        };

        changeCalc(currentView, currentType);
    });

    elements.calculator.radioAnnual.addEventListener("click", () => {
        const dot = elements.calculator.radioMonthly.querySelector(identifiers.calculator.radios.active);
        currentView = "annual";

        if (!dot.classList.contains(identifiers.calculator.radios.hideActive)) {
            dot.classList.add(identifiers.calculator.radios.hideActive);
            elements.calculator.radioAnnual.querySelector(identifiers.calculator.radios.active).classList.remove(identifiers.calculator.radios.hideActive);
        };

        changeCalc(currentView, currentType);
    });

    elements.calculator.radioDiesel.addEventListener("click", () => {
        const dot = elements.calculator.radioPetrol.querySelector(identifiers.calculator.radios.active);
        currentType = "diesel";

        if (!dot.classList.contains(identifiers.calculator.radios.hideActive)) {
            dot.classList.add(identifiers.calculator.radios.hideActive);
            elements.calculator.radioDiesel.querySelector(identifiers.calculator.radios.active).classList.remove(identifiers.calculator.radios.hideActive);
        };

        changeCalc(currentView, currentType);
    });

    elements.calculator.radioPetrol.addEventListener("click", () => {
        const dot = elements.calculator.radioDiesel.querySelector(identifiers.calculator.radios.active);
        currentType = "petrol";

        if (!dot.classList.contains(identifiers.calculator.radios.hideActive)) {
            dot.classList.add(identifiers.calculator.radios.hideActive);
            elements.calculator.radioPetrol.querySelector(identifiers.calculator.radios.active).classList.remove(identifiers.calculator.radios.hideActive);
        };

        changeCalc(currentView, currentType);
    });

    changeCalc(currentView, currentType);
});