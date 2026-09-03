window.slidesk.PLUGIN_SBS = {
  next: window.slidesk.next,
  steps: null,
  currentStep: 0,
  maxSteps: 0,
  checkStepConditions: () =>
    [...window.slidesk.slides[window.slidesk.currentSlide].classList].includes(
      "sbs",
    ) && window.slidesk.lastAction === "next",
};

window.slidesk.sbs = () => {
  if (window.slidesk.PLUGIN_SBS.checkStepConditions()) {
    window.slidesk.PLUGIN_SBS.currentStep = 0;
    window.slidesk.PLUGIN_SBS.steps =
      [...window.slidesk.slides[window.slidesk.currentSlide].querySelectorAll(
        ".step",
      )];
    window.slidesk.PLUGIN_SBS.steps.sort((a, b) => {
      const aStep = Number(a.getAttribute("data-sbs") ?? "0");
      const bStep = Number(b.getAttribute("data-sbs") ?? aStep);
      if (aStep < bStep) return -1;
      if (aStep > bStep) return 1;
      return 0;
    });
    window.slidesk.PLUGIN_SBS.maxSteps = window.slidesk.PLUGIN_SBS.steps.length;
    [...window.slidesk.PLUGIN_SBS.steps].forEach((step, _) =>
      step.classList.remove("step-shown"),
    );
  }
};

window.slidesk.next = () => {
  if (window.slidesk.PLUGIN_SBS.checkStepConditions()) {
    if (
      window.slidesk.PLUGIN_SBS.currentStep ===
      window.slidesk.PLUGIN_SBS.maxSteps
    ) {
      window.slidesk.PLUGIN_SBS.next();
    } else {
      if (window.slidesk.io)
        window.slidesk.sendMessage({
          action: "nextSbs",
          payload: window.slidesk.PLUGIN_SBS.currentStep,
        });
      window.slidesk.PLUGIN_SBS.steps[
        window.slidesk.PLUGIN_SBS.currentStep++
      ].classList.add("step-shown");
    }
  } else window.slidesk.PLUGIN_SBS.next();
};
