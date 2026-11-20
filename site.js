const toggle = document.querySelector(".menu-toggle");
const navigation = document.getElementById("menu");
function setMenu(open) {
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  navigation.classList.toggle("open", open);
}
document.documentElement.classList.add("js");
toggle.addEventListener("click", () =>
  setMenu(toggle.getAttribute("aria-expanded") !== "true"),
);
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    toggle.getAttribute("aria-expanded") === "true"
  ) {
    setMenu(false);
    toggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest("header")) setMenu(false);
});
matchMedia("(min-width: 1021px)").addEventListener("change", () =>
  setMenu(false),
);
