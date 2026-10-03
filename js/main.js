document.getElementById("year").textContent = new Date().getFullYear();
const button = document.querySelector(".menu");
const nav = document.getElementById("nav");
button.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  button.setAttribute("aria-expanded", String(open));
});
