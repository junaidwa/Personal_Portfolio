var CloseNav = document.querySelector(".closeNav");
var OpenBtn = document.querySelector(".open");
var Closebtn= document.querySelector(".close");



Closebtn.addEventListener('click',function(){
    CloseNav.classList.add("hide");

})
OpenBtn.addEventListener('click', function(){
    CloseNav.classList.remove("hide");
})

