let main = document.querySelector(".main");
let cursor = document.querySelector(".cursor");

main.addEventListener("mousemove", function(details){
    cursor.style.left = details.x+"px"
    cursor.style.top = details.y+"px"
})