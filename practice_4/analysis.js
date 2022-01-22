// Helpers


function esPar(numero) {
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function(acumulado = 0, valor) {
            return acumulado + valor;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


// Median calculator


function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    }
    else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}


//General median


const salariosCol = colombia.map(
    function(persona) {
        return persona.salary;
});

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB) {
        return salaryA - salaryB;
});

const medianaGeneralCol = medianaSalarios(salariosColSorted);


// Top 10% median


const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
)

const medianaTop10Col = medianaSalarios(salariosColTop10);


// console.log({medianaGeneralCol, medianaTop10Col})