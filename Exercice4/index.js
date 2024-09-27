const button = document.getElementById("myButton");

const p = document.createElement("p");
p.style.display = "none";
p.id = "myP";
p.textContent = "Bonjour, vous avez cliqué sur le bouton !";
document.body.appendChild(p);

button.addEventListener("click", () => {
  const p = document.getElementById("myP");
  p.style.display = "block";
});
