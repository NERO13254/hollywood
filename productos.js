

var btn = document.getElementById("button");

btn.addEventListener("click", ()=>{
var hideBar = document.getElementById("hide-bar");

hideBar.classList.toggle("hiden");

});

var wsp = document.querySelector(".wsp");

wsp.addEventListener("click", ()=>{
    window.location.assign("https://api.whatsapp.com/send/?phone=1151655103&text&app_absent=0");
});


var ig = document.querySelector(".ig");

ig.addEventListener("click", ()=>{
    window.location.assign("https://www.instagram.com/_reddemm/");
});


var goProduct = document.getElementById("productos");
goProduct.addEventListener("click", ()=>{

window.location.assign("materiales.html")

});


