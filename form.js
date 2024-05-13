let inputBox = document.querySelectorAll(".input")
let textoAviso = document.querySelectorAll(".input-vazio")
let submit = document.getElementById("submit")

submit.addEventListener("click", function(){
    inputBox.forEach(function(elemento, index){
        if(elemento.value === ""){
            textoAviso[index].classList.remove("opacidade");
            elemento.style.borderColor = "red";
        }else{
            elemento.style.borderColor = "green";
            textoAviso[index].classList.add("opacidade");
        }
    })
})