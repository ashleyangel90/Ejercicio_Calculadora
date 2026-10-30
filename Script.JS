let numero1 = document.getElementById("numero1");
let numero2 = document.getElementById("numero2");
let resultado = document.getElementById("resultado");

function obtenerNumeros(){
    if(numero1.value.trim () === ""||
    numero2.value.trim () === ""){
        resultado.textContent = "Escribe los dos numeros.";
        return null; 
    }
 
let a = Number(numero1.value);
let b = Number(numero2.value);

return [a,b];
}

document.getElementById("sumar").addEventListener("click", function (){
    let numeros = obtenerNumeros();
    if (numeros === null) return;

    resultado.textContent ="Resultado"+ (numeros[0] + numeros[1]);
});

document.getElementById("restar").addEventListener("click", function(){
    let numeros = obtenerNumeros();
    if (numeros === null) return;

    resultado.textContent = "Resultado:" + (numeros[0] - numeros[1]);
});

document.getElementById("multiplicar").addEventListener("click", function(){
    let numeros = obtenerNumeros();
    if (numeros === null) return;

    resultado.textContent = "Resultado:" + (numeros[0] * numeros[1]);
});

document.getElementById("dividir").addEventListener("click", function(){
    let numeros = obtenerNumeros();
    if (numeros === null) return;

    resultado.textContent = "Resultado:" + (numeros[0] / numeros[1]);
});

if(numeros[1] === 0){
    resultado.textContent = "{No se puede dividir entre cero.";
 } else {
    resultado.textContent = "Resultado:" + (numeros [0] / numeros[1]);
    
}