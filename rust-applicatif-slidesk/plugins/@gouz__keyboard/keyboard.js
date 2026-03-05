let mapping = {};

const fetchMapping = async () => {
  try {
    const response = await fetch("./keyboard.json");
    const json = await response.json();
    mapping = json;
  } catch (_) {
    mapping = {
      f: "fullscreen",
    };
  }
  document.addEventListener("keydown", (e) => {
    if (typeof window.slidesk[mapping[e.key]] !== "undefined") {
      window.slidesk[mapping[e.key]]();
    } else {
      window.slidesk.io.send(JSON.stringify({ action: mapping[e.key] }));
    }
    const d = `${mapping[e.key]}Down`
    if (typeof window.slidesk[d] !== "undefined") {
      window.slidesk[d]();
    } else {
      window.slidesk.io.send(JSON.stringify({ action: d }));
    }
  });
  document.addEventListener("keyup", (e) => {
    const d = `${mapping[e.key]}Up`
    if (typeof window.slidesk[d] !== "undefined") {
      window.slidesk[d]();
    } else {
      window.slidesk.io.send(JSON.stringify({ action: d }));
    }
  });
};

fetchMapping();
