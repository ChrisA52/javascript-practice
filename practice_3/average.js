// Adding an array


lista = [];

function addElement() {
    const element = parseInt(document.getElementById("Input").value);
    const list = document.getElementById("List");
    
    lista.push(element);

    list.innerText = `[${lista}]`
    document.getElementById("Input").value = "";
}


// Average


function calcularMediaAritmetica() {
    const sumaLista = lista.reduce(
        function(acumulado = 0, valor) {
            return acumulado + valor;
        }
    );

    const promedioLista = sumaLista / lista.length;

    const result = document.getElementById("Result");
    result.innerText = "The average is: " + promedioLista;
}


// Median


function calcularMediana() {
    function esPar(numerito) {
        if (numerito % 2 === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    function copiaMediaAritmetica() {
        const sumaLista = lista.reduce(
            function(acumulado = 0, valor) {
                return acumulado + valor;
            }
        );
    
        const promedioLista = sumaLista / lista.length;
    
        return promedioLista;
    }

    lista.sort(function(a, b) {
        return a - b
    })

    const mitadLista = parseInt(lista.length / 2);
    
    let mediana;

    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista];
        const elemento2 = lista[mitadLista - 1];
        
        const promedioElementos = copiaMediaAritmetica([elemento1, elemento2]);
        mediana = promedioElementos;
    }
    else {
        mediana = lista[mitadLista];
    }

    const result = document.getElementById("Result");
    result.innerText = "The median is: " + mediana;
}


// Mode


function calcularModa() {
    const listaCount = {};

    lista.map(
        function (elemento) {
            if (listaCount[elemento]) {
                listaCount[elemento] += 1
            }
            else {
                listaCount[elemento] = 1;
            }
        }
    );
    
    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor) {
            return valorAcumulado[1] - nuevoValor[1];
    });
    
    const modaArray = listaArray[listaArray.length - 1];
    
    const moda = Number(modaArray[0]);
    const result = document.getElementById("Result");
    result.innerText = "The mode is: " + moda;
};


// Harmonic mean (Challenge)


function calcularMediaArmonica() {
    listaModificada = [];

    for (i = 0; i < lista.length; i++) {
        const numeroDividido = 1 / parseInt(lista[i]);
        listaModificada.push(numeroDividido);
    }

    const sumaLista = listaModificada.reduce(
        function(acumulado = 0, valor) {
            return acumulado + valor;
        }
    );

    const mediaArmonica = listaModificada.length / sumaLista;

    const result = document.getElementById("Result");
    result.innerText = "The harmonic mean is: " + mediaArmonica.toFixed(3);
};


// Pratice example (The same challenge but made by the teacher)


const notes = [
    {
        course: "Educación Física",
        note: 10,
        credit: 2,
    },
    {
        course: "Programación",
        note: 8,
        credit: 5,
    },
    {
        course: "Finanzas personales",
        note: 7,
        credit: 5,
    },
];

function calcularMediaPonderada() {
    const notesWithCredit = notes.map(function (noteObject) {
        return noteObject.note * noteObject.credit;
    });

    const sumOfNotesWithCredit = notesWithCredit.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );

    const credits = notes.map(function (noteObject) {
        return noteObject.credit;
    });
    
    const sumOfCredits = credits.reduce(
        function (sum = 0, newVal) {
            return sum + newVal;
        }
    );

    const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
}