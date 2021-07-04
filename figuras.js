/*
CONSOLE LOG ESTATICOS

console.group("Cuadrados")
//Lado del cuadrado
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");
//Perimetro del cuadrado
const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + " cms");
//Area del cuadrado
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide: " + areaCuadrado + " cms^2");
console.groupEnd();


//Código del Triangulo
console.group("Triangulo");
//Lados de triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo =5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + " cms, " + ladoTriangulo2 + " cms, " + baseTriangulo + "cms.");
console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");
//Perimetro del triangul
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");
//Area del triangulo
const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triangulo mide: " + areaTriangulo + " cms^2");
console.groupEnd();


//Código del Circulos
console.group("Circulos");
//Radio
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cms.");
//Diametro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + " cms.");
// PI
const PI = Math.PI;
console.log("PI es " + PI + ".");
// Perimetro
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");
//Area
const areaCirculo = PI * (radioCirculo**2);
console.log("El area del circulo es " + areaCirculo + " cms.");
console.groupEnd();

*/

//FUNCIONES

// Funciones que encapsulan las funcionalidades de cuadrado
function perimetroCuadrado(lado) {
    return lado > 0 ? lado * 4 : 'Ingresar un valor válido'
}

function areaCuadrado(lado) {
    return lado > 0 ? lado * lado : 'Ingresar un valor válido'
}

// Funciones que encapsulan las funcionalidades de triángulo
function perimetroTriangulo(lado1, lado2, base) { 
    return lado1 > 0 & lado2 > 0 & base > 0 ? lado1 + lado2 + base : 'Ingresar valores válido'
}

function areaTriangulo(altura, base) { 
    return altura > 0 & base > 0 ? (base * altura)/2 : 'Ingresar valores válido'
}

// Funciones que encapsulan las funcionalidades de círculo
function diametroCirculo(radio) {
    return radio > 0 ? radio * 2 : 'Ingresar un valor válido'
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return radio > 0 ? diametro * Math.PI  : 'Ingresar un valor válido'
}

function areaCirculo(radio) {
    return radio > 0 ? (radio * radio) * Math.PI : 'Ingresar un valor válido'
}


// INTERACCION CON HTML

function calcularPerimetroCuadrado() {
    const value = document.getElementById("InputCuadrado").value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}


function calcularAreaCuadrado() {
    const value = document.getElementById("InputCuadrado").value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularAreaTriangulo() {
    const base = document.getElementById("InputBaseTriangulo").value;
    const altura = document.getElementById("InputAlturaTriangulo").value;
    const area = areaTriangulo(altura,base);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const lado1 = parseInt(document.getElementById("InputLado1Triangulo").value);
    const lado2 = parseInt(document.getElementById("InputLado2Triangulo").value);
    const lado3 = parseInt(document.getElementById("InputBaseTriangulo").value);
    const perimetro = perimetroTriangulo(lado1,lado2,lado3);
    alert(perimetro);
}

function calcularAreaCirculo() {
    const value = parseInt(document.getElementById("InputCirculo").value);
    const area = areaCirculo(value);
    alert(area);
}

function calcularPerimetroCirculo() {
    const value = parseInt(document.getElementById("InputCirculo").value);
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
