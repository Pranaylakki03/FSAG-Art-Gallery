// meniutoggle script //

var sidebar = document.querySelector(".sidebar")

function showNavbar(){
 
    sidebar.style.left="0"


}
function closeNavbar(){
    
    sidebar.style.left="-65%"
}

// image scroller script//
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

 scrollContainer.addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";

 });
   

 nextBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
     scrollContainer.scrollLeft +=370; 
 })

 backBtn.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 370; 
})

