let valorInput = ""; //Valor inicial del input, tambien es la variable donde se almacenaran los nuevos valores introducidos
let valorPrev = ""; //valor inicial del preview del resultado (el numero pequeño que esta al lado de la operacion)
var input = document.querySelector('.input'); //declaraamos la variable input como el elemento html del input
var prev = document.querySelector('.prev'); //declaramos la variable input como el elemento html del preview

//Esta funcion lo que hace es actualizar el calculo de la pantalla, y se le pasa un argumento, que es el valor que introduce cada boton
var operadores = ["+", "-", "/", "*", "."];

function actualizarCalculo(valor) {
    //Si el ultimo digito introducido lo incluye el array de operadores y el valor de input es nulo
    // o si el ultimo digito introducido es un operador y el ultimo digito introducido es un operador
    if (operadores.includes(valor) && valorInput === "" || operadores.includes(valor) && operadores.includes(valorInput.slice(-1))) {
        return //No hagas nada
    } else { //Si las condiciones anteriores no se cumplen
        valorInput = (valorInput + valor).toString(); //El valor del input es igual al mismo valor del input + el valor  introducido por el usuario y convertido a un string
        input.textContent = valorInput.toString(); //El valor del input actualizado se introduce con textContent al input, haciendo asi que se muestre en pantalla
    }
    //Si el ultimo digito introducido no es un operador, entonces haz lo siguiente
    if (!operadores.includes(valor)) {
        //El texto que contiene el preview sera igual a la evaluacion de la operacion que contiene el valor del input y este sera pasado a un string
        //La funcion eval lo que hace es evaluar un string como una operacion matematica si su contenido lo permite
        prev.textContent = (eval(valorInput)).toString();
    }

}
//Esta funcion lo que hace es imprimir el resultado en pantalla, o sea, pasar el valor del preview al input, y el valor del input antiguo eliminarlo
function imprimirResultado() {
    //Se elimina el valor antiguo del input
    valorInput = "";
    //al input se le asigna un nuevo valor, el cual es el texto que contiene del preview
    input.textContent = prev.textContent;
    //Al valor del input se le asigna el texto que contiene el input, esto para poder seguir haciendo operaciones una vez el resultado sea mostrado
    valorInput = input.textContent;
}
//Esta funcion lo que hace es eliminar todos los valores que tenga la calculadora
function borrarTodo() {
    valorInput = "";
    input.textContent = "";
    valorPrev = "";
    prev.textContent = "";
}
//Esta funcion lo que hace es borrar el ultimo digito de la operacion
function borrarReciente() {
    //El valor recortado es igual al texto que contiene  el input menos el ultimo caracter
    valorRecortado = input.textContent.slice(0, -1);
    //El valor del input es igual al valor recortado y el texto del input es igual al valor recortado
    valorInput = valorRecortado;
    input.textContent = valorRecortado;
    //Si el ultimo digito del valor recortado se encuentra en el array de operadores
    if (operadores.includes(valorRecortado.slice(-1))) {
        //Entonces como el resultado sería por ejemplo un '(14+)', la operacion es indefnida, asi que lo que hara sera evaluar esa operacion mas un 0
        //Para que asi el preview no muestre resultados como '(14+)' = 24, y en su lugar muestre el 14 solamente
        valorPrev = eval(input.textContent + 0).toString();
        prev.textContent = valorPrev;
    } else { // de otro modo
        //Si el texto del input o el valor del input son vacios
        if (input.textContent == '' || valorInput == '') {
            //El contenido del prev tambien estara vacio
            prev.textContent = "";
        } else { //De otro modo
            //El valor del preview es igual a evaluar el valor del input y pasarlo como string
            valorPrev = eval(valorInput).toString();
            //Y el valor del prev lo introducimos en el texto del preview
            prev.textContent = valorPrev;
        }
    }
}