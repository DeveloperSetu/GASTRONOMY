// ===============sticky Header==================//
var header = document.querySelector("header");
var offSetTop = header.offsetTop;

window.onscroll = function(){ stickyHeader()};

function stickyHeader(){
    if(window.pageYOffset > offSetTop){
        header.classList.add("sticky");
    }
    else{
        header.classList.remove("sticky");
    }
}

// ====================Toggle menu=========================//
var toggleMenu = document.querySelector("#toggleMenu");
var togglecencle = document.querySelector("#togglecencle");
var ul = document.querySelector("#ul");

toggleMenu.addEventListener("click", ()=>{
    ul.style.display= "block";
    toggleMenu.style.display= "none";
    togglecencle.style.display= "block";
});

togglecencle.addEventListener("click", ()=>{
    ul.style.display= "none";
    toggleMenu.style.display= "block";
    togglecencle.style.display= "none";
});