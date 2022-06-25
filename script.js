
var chinchilla = document.getElementById("chinchilla");

chinchilla.addEventListener("mouseenter", () => {
    chinchilla.classList.remove("img-user");
    chinchilla.classList.add("img-user-expand");
})

chinchilla.addEventListener("mouseleave", () => {
    chinchilla.classList.remove("img-user-expand");
    chinchilla.classList.add("img-user");
    chinchilla.classList.toggle()
    
})