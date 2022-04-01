let valorInput = "";
let valorPrev = "";
var input = document.querySelector('.input');
var prev = document.querySelector('.prev');

function actualizarCalculo(valor){
    if(operadores.includes(valor) && valorInput === "" || operadores.includes(valor) && operadores.includes(valorInput.slice(-1))){
        return
    }else{
    valorInput = (valorInput + valor).toString();
    input.textContent = valorInput.toString();
}
if(!operadores.includes(valor)){
    if(valorPrev === "")
    prev.textContent = (eval(valorInput)).toString();
}
}
function imprimirResultado(){
    valorInput = "";
    input.textContent = prev.textContent.toString();
    valorInput = input.textContent;
    
    }
var operadores = ["+","-","/","*","."];

