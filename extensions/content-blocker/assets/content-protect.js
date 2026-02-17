(function () {
  // Disable right click
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

  // Disable text selection
  document.addEventListener("selectstart", function (e) {
    e.preventDefault();
  });

  // Disable drag (images, text)
  document.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });

  // Disable copy / cut / paste
  document.addEventListener("copy", (e) => e.preventDefault());
  document.addEventListener("cut", (e) => e.preventDefault());
  document.addEventListener("paste", (e) => e.preventDefault());

  // Disable common inspect shortcuts
  document.addEventListener("keydown", function (e) {
    // F12
    if (e.key === "F12") e.preventDefault();

    // Ctrl+Shift+I / J / C
    if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) {
      e.preventDefault();
    }

    // Ctrl+U (view source)
    if (e.ctrlKey && e.key === "u") {
      e.preventDefault();
    }

    // Cmd shortcuts (Mac)
    if (e.metaKey && ["i", "u"].includes(e.key.toLowerCase())) {
      e.preventDefault();
    }
  });
})();
