/*
var nombre = "jez";
var apellido = 'C';
var edad = 24;

console.log(`Nombre: ${nombre}\nApellido: ${apellido}\nEdad: ${edad}`);
*/


/*

    PARTE 1: SOLICITUD DE NOMBRE Y CARRERA
*/
var nombre = prompt("Ingresa tu nombre", '');
var carrera = prompt("Ingresa la carrera", '');

document.getElementById(`name`).innerHTML += `
    ${nombre}
`;

document.getElementById(`car`).innerHTML += `
    ${carrera}
`;

/*
    PARTE 2: SOLICITUD DE CANTIDAD DE RAMOS
*/
var ramos = []; // aqui se almacenaran los inputs

var num_ram = prompt("Ingresa el numero de ramos que quieres agregar", '3');
num_ram = parseInt(num_ram)
var contador = 1;
while(contador != num_ram + 1) {
    var ramo = prompt(`Ingresa el nombre del ramo ${contador}`, '');
    ramos.push(ramo);
    contador += 1;
};

/* 
    PARTE 3: SOLICITUD DE NOTAS
*/
var notas_todas = [];

var num_total_notas = prompt("Ingresa el numero de notas por cada ramo: ", '3');
num_total_notas = parseInt(num_total_notas);

// agregar las filas
ramos.forEach(ramo => {
    document.getElementById('cuerpo-tabla').innerHTML += `
        <tr id="row__${ramo}">
            <td>${ramo}</td>
        </tr>
  `;
});

// debe estar fuera del loop, para que no se reinicie
var promedio_fin = 0;
ramos.forEach(ramo => {
    var num = 1;
    var notas = [];
    while (notas.length != num_total_notas) {

        var nota = prompt(`Ingresa la nota ${num} del ramo ${ramo}`);
        notas.push(nota);

        console.log(notas)
        num += 1;
    };

    // Se agregan las notas de 1 namo a la lista de todas la notas
    notas_todas.push(notas);

    suma = 0;
    notas.forEach(nota => {
        document.getElementById(`row__${ramo}`).innerHTML += `
            <td>${nota}</td>
        `;

        nota = parseInt(nota);
        suma += nota
    });

    console.log(nota);
    // al final se agrega el promedio
    var promedio = suma / num_total_notas;
    promedio_fin += promedio;
    document.getElementById(`row__${ramo}`).innerHTML += `
            <td>${promedio}</td>
        `;
});


// fin del loop; calculo promedio final
promedio_fin = promedio_fin / ramos.length;
document.getElementById(`promedio-final`).innerHTML += `
            ${promedio_fin.toFixed(2)}
        `;
