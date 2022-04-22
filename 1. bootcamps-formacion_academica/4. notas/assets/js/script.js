/**
 * Numero de namos para calcular el PromedioFInal
 * {@link promedioFinal} 
 */
let numero_ramos = 0;

/**
 * Suma de los promedios, para calcular el promedio final
 * {@link promedioFinal}
 */
let sumaTotal = 0;

document.getElementById("btn-inicio").addEventListener("click", (boton) => {
    boton.preventDefault();

    /*
        PARTE 1: SOLICITUD DE RAMOS Y NUMERP DE NOTAS
    */
    let ramo = document.getElementById("ramo").value;
    numero_ramos++;
    let numeroNotas = parseInt(document.getElementById("nNotas").value);

    let container = document.getElementById("tablas");

    container.innerHTML += `
        <table class="table table-bordered p-3 table-dark">
            <thead>
                <tr>
                    <th class="text-center fs-4" colspan="${numeroNotas}">${ramo}</th>
                </tr>
                <tr>
                    <th>Numero</th>
                    <th>Nota</th>
                </tr>
            </thead>

            <tbody id="cuerpo-tabla-${ramo}">
            </tbody>

            <tfoot>
                <tr>
                    <th>Promedio final</th>
                    <th id="promedio-final-${ramo}"></th>
                </tr>
            </tfoot>
        </table>
    `;

    let contador = 0;
    let suma = 0;
    while (contador != numeroNotas) {
        let nota = parseInt(prompt(`Ingresa la nota ${contador + 1} del ramo ${ramo}`));

        suma += nota;

        document.getElementById(`cuerpo-tabla-${ramo}`).innerHTML += `
            <tr>
                <td>${contador + 1}</td>
                <td>${nota}</td>
            </tr>
        `;

        contador++
    }

    let promedio = suma / numeroNotas;

    sumaTotal += promedio;
    /**
     * Promedio Final: promedio de los promedios de cada ramo
     */
    let promedioFinal = sumaTotal / numero_ramos;

    // Impresion de resultados
    document.getElementById(`promedio-final-${ramo}`).innerHTML = promedio.toFixed(2);

    document.getElementById("PromedioFinal").innerHTML = `Promedio Final: ${promedioFinal.toFixed(2)}`;
});
