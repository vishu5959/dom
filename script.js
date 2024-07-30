let div = document.getElementById("main");
let p = document.getElementById("hello");
div.addEventListener("click",function(){
    div.style.backgroundColor = "red";
    p.style.color = "yellow";
    div.style.padding = "20px";
    p.style.fontSize = "40px";
    p.style.fontWeight = "900";
    div.style.width = "400px";
    div.style.height = "500px";
})