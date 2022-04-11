const btn = document.getElementById("btn");
const mobilemenu = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  mobilemenu.classList.toggle("flex");
  mobilemenu.classList.toggle("hidden");

  mobilemenu.classList.toggle("smooth");
});
