if (!CSS.supports("field-sizing: content")) {
  function autoExpandTextarea() {
    document.querySelectorAll("textarea").forEach((el) => {
      el.style.height = el.setAttribute(
        "style",
        "height: " + el.scrollHeight + "px"
      );
      el.classList.add("auto");
      el.addEventListener("input", (e) => {
        el.style.height = "auto";
        el.style.height = el.scrollHeight + "px";
      });
    });
  }

  autoExpandTextarea();
}
