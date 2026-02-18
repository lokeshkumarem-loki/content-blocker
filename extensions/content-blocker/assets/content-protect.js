(function () {
  /* ------------------ BLOCK MOUSE ACTIONS ------------------ */
  const block = (e) => e.preventDefault();
  ["contextmenu", "selectstart", "dragstart", "copy", "cut", "paste"].forEach(
    (ev) => document.addEventListener(ev, block),
  );

  /* ------------------ KEYBOARD BLOCKING ------------------ */
  document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase();

    // DevTools & view-source shortcuts
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
      (e.ctrlKey && ["u", "p"].includes(key)) ||
      (e.metaKey && ["i", "u"].includes(key))
    ) {
      e.preventDefault();
      return;
    }

    // Screenshot (best effort)
    if (e.key === "Shift" || e.key === "S") {
      blurTemporarily();
    }
  });

  /* ------------------ FULLSCREEN API ------------------ */
  document.addEventListener("fullscreenchange", () => {
    blurTemporarily();
  });

  /* ------------------ WINDOWS KEY / ALT+TAB ------------------ */
  window.addEventListener("blur", () => {
    document.body.style.filter = "blur(12px)";
    document.body.style.pointerEvents = "none";
  });

  window.addEventListener("focus", () => {
    document.body.style.filter = "";
    document.body.style.pointerEvents = "";
  });

  /* ------------------ BLUR FUNCTION ------------------ */
  function blurTemporarily() {
    document.body.style.filter = "blur(12px)";
    document.body.style.pointerEvents = "none";

    setTimeout(() => {
      document.body.style.filter = "";
      document.body.style.pointerEvents = "";
    }, 1500);
  }

  /* ------------------ DEVTOOLS DETECTION ------------------ */
  let devtoolsOpen = false;
  setInterval(() => {
    const start = performance.now();
    debugger;
    const end = performance.now();

    if (end - start > 100) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        document.body.style.filter = "blur(8px)";
        document.body.style.pointerEvents = "none";
      }
    } else if (devtoolsOpen) {
      devtoolsOpen = false;
      document.body.style.filter = "";
      document.body.style.pointerEvents = "";
    }
  }, 1000);
})();
