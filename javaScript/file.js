const menu = document.getElementById("menu");
const close = document.getElementById("close");
const ulnav = document.getElementById("ulnav")
menu.addEventListener('click', () => {
    menu.classList.add("hidden");
    close.classList.remove("hidden");
    ulnav.style='top:0%;'
});

close.addEventListener('click', () => {
    close.classList.add("hidden");
    menu.classList.remove("hidden");
    ulnav.style='top:-110%;'
});