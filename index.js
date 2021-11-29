const input= document.querySelector("input");
const colorBlock= document.querySelector(".color-block");

const hex= document.querySelector(".hex");
document.addEventListener("input", function(e){
    hex.innerHTML=input.value;
});