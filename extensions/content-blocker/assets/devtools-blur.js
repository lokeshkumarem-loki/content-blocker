(function () {
  const blurStyleId = "devtools-blur-style";

  function applyBlur() {
    if (document.getElementById(blurStyleId)) return;

    const style = document.createElement("style");
    style.id = blurStyleId;
    style.innerHTML = `
      body {
        filter: blur(8px) !important;
        pointer-events: none !important;
        user-select: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  function removeBlur() {
    const style = document.getElementById(blurStyleId);
    if (style) style.remove();
  }

  function detectDevTools() {
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;

    if (widthDiff > threshold || heightDiff > threshold) {
      applyBlur();
    } else {
      removeBlur();
    }
  }

  setInterval(detectDevTools, 500);
})();
