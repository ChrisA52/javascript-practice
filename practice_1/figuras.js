//Cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrada(lado) {
    return lado * lado;
}

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const output = document.getElementById("OutputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    output.value = "Result: " + perimetro + " cm"
}

function calcularAreaCuadrada() {
    const input = document.getElementById("InputCuadrado");
    const output = document.getElementById("OutputCuadrado");
    const value = input.value;

    const area = areaCuadrada(value);
    output.value = "Result: " + area + " cm^2"
}

//Triangulo


function perimetroTriangulo(lado1, lado2, base) {
    return Number(lado1) + Number(lado2) + Number(base);
}

function areaTriangulo(base, altura) {
    return ((base * altura) / 2);
}

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo1");
    const input2 = document.getElementById("InputTriangulo2");
    const input3 = document.getElementById("InputTriangulo3");
    const output = document.getElementById("OutputTriangulo");
    const value = [input1.value, input2.value, input3.value];

    const perimetro = perimetroTriangulo(value[0], value[1], value[2]);
    output.value = "Result: " + perimetro + " cm"
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputTriangulo3");
    const input2 = document.getElementById("InputTriangulo4");
    const output = document.getElementById("OutputTriangulo");
    const value1 = input1.value;
    const value2 = input2.value;

    const area = areaTriangulo(value1, value2);
    output.value = "Result: " + area + " cm^2"
}


//Circulo


const PI = Math.PI;

function diametroCirculo(radio) {
    return radio * 2
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI
}

function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const output = document.getElementById("OutputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    output.value = "Result: " + perimetro.toFixed(2) + " cm"
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const output = document.getElementById("OutputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    output.value = "Result: " + area.toFixed(2) + " cm^2"
}


//Triangulo Isoceles


function alturaTriangulo(lado1, lado2, base) {
    if (lado1 !== lado2) {
        return "One of the sides is not the same";
    }
    else {
        lado = lado1 = lado2;
        altura = Math.sqrt((lado * lado) - (base * base) / 2);
        return altura;
    }
}

function calcularAltura() {
    const input1 = document.getElementById("InputIsoceles1");
    const input2 = document.getElementById("InputIsoceles2");
    const input3 = document.getElementById("InputIsoceles3");
    const output = document.getElementById("OutputIsoceles");
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const alturaT = alturaTriangulo(value1, value2, value3);
    output.value = "Result: " + alturaT + " cm"
}