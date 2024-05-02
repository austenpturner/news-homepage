const navToggle = document.querySelector(".nav__checkbox");
const overlay = document.querySelector(".overlay");

navToggle.addEventListener("click", () => {
  const shadowCast = overlay.getAttribute("data-visible");
  if (shadowCast === "false") {
    overlay.setAttribute("data-visible", true);
    document.body.classList.add("hidden");
  } else if (shadowCast === "true") {
    overlay.setAttribute("data-visible", false);
    document.body.classList.remove("hidden");
  }
});
