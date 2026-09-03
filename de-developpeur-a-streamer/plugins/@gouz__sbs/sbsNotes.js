const checkStepConditionsSBS = () =>
    [...document.querySelector("#sd-sv-current .sd-slide").classList].includes(
        "sbs",
    );

window.slidesk.sbs = () => {
    if (checkStepConditionsSBS()) {
        window.slidesk.$steps = [...document.querySelectorAll("#sd-sv-current .sd-slide.sbs .step")].sort((a, b) => {
            const aStep = Number(a.getAttribute("data-sbs") ?? "0");
            const bStep = Number(b.getAttribute("data-sbs") ?? aStep);
            if (aStep < bStep) return -1;
            if (aStep > bStep) return 1;
            return 0;
        });
        [...window.slidesk.$steps].forEach((li, _) =>
            li.classList.remove("step-shown"),
        );
    }
};

window.slidesk.nextSbs = (data) => {
    window.slidesk.$steps[data.payload].classList.add("step-shown");
}