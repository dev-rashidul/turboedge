// JavaScript for Mobile Menu

const open_icon = document.querySelector(".contact-btn");
const close_icon = document.querySelector(".close-btn");
const mobile_menu = document.querySelector(".mobile-menu");

open_icon.addEventListener("click", ()=>{
    mobile_menu.classList.add("active")
})

close_icon.addEventListener("click", ()=>{
    mobile_menu.classList.remove("active")
})