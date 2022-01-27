/*======================
-----------
1. Se inician/declaran las variables de scope general
-----------
======================*/

let ronda_actual = 0;
let rondas_totales;
let mi_puntaje = 0;
let pc_puntaje = 0;
let barra_width_pc = 0;
let barra_width_usuario = 0;
let cont = 0;

/*======================
-----------
2. Declaracion de funciones a usar
-----------
======================*/

/**
 * Esta funcion sirve para "resetear" los contadores y acumuladores a su valor inicial
 */
function reinicio() {
    ronda_actual = 0;
    mi_puntaje = 0;
    pc_puntaje = 0;
    barra_width_pc = 0;
    barra_width_usuario = 0;
    cont = 0;

    // se recetea la barra
    $('#mi_puntaje_barra').css({
        "width": "0%"
    });

    $('#pc_puntaje_barra').css({
        "width": "0%"
    });

    // receteo de tabla
    document.getElementById(`tabla_resultado0`).innerHTML = ""; 
    document.getElementById(`tabla_resultado1`).innerHTML = ""; 
    document.getElementById(`tabla_resultado2`).innerHTML = ""; 
    document.getElementById(`tabla_resultado3`).innerHTML = "";

    document.getElementById(`tabla_ronda0`).innerHTML = ""; 
    document.getElementById(`tabla_ronda1`).innerHTML = ""; 
    document.getElementById(`tabla_ronda2`).innerHTML = ""; 
    document.getElementById(`tabla_ronda3`).innerHTML = ""; 
    
    // receteo de puntos
    document.getElementById("result_parcial").innerHTML = "";

    document.getElementById("mi_puntaje").innerHTML = "";

    document.getElementById("pc_puntaje").innerHTML = "";

    // reinicio boton
    $("#botones_reinicio").removeClass("d-block");
    $("#botones_reinicio").addClass("d-none");
}

/**
 * Esta funcion transforma el numero al azar a --> una eleccion "pidra, papel o tijera"
 * @param {Number} pc_eleccion Es el numero al azar del 0 al 2 que representa la eleccion del PC
 * @returns {String} Devuelve su eleccion en formato Strig, para mayor legibilidad del codigo al usar las palabras comunes
 */
function eleccion_del_pc(pc_eleccion) {
    if (pc_eleccion === 0) {
        return "piedra";
    }
    else if (pc_eleccion === 1) {
        return "papel";
    }
    else {
        return "tijera";
    }
}

/**
 * Compara las elecciones del usuario y PC para entregar ul resultado de la ronda actual. Hay variables acumuladoras
 * @param {String} user_choice Es la eleccion del usuario (pierdra, papel o tijera)
 * @param {String} pc_choice Es la eleccion del PC (piedra, papel o tijera)
 * @returns {String} El resultado parcial como: "Has ganado", "Has perdido", "Empate"
 */
function ganador(user_choice, pc_choice) {
    // si es igual(empate):
    if (user_choice === pc_choice) {
        mi_puntaje += 1;
        pc_puntaje += 1;
        return "Empate";

    } else if (user_choice === "piedra") {
        // pierde con piedra:
        if (pc_choice === "papel") {
            pc_puntaje += 1;
            return "Has perdido";
        }
        // gana con piedra:
        else {
            mi_puntaje += 1;
            return "Has ganado!";
        }
    } else if (user_choice === "papel") {
        // pierde con papel
        if (pc_choice === "tijera") {
            pc_puntaje += 1;
            return "Has perdido";
        }
        // gana con papel
        else {
            mi_puntaje += 1;
            return "Has ganado!";
        }
    } else {
        if (user_choice === "tijera") {
            // pierde con tijera
            if (pc_choice === "piedra") {
                pc_puntaje += 1;
                return "Has perdido";
            }
            // gana con tijera
            else {
                mi_puntaje += 1;
                return "Has ganado!";
            }
        };
    };
};


/**
 * Imprime una tabla con los resultados usando emojis
 */
function resultado_tabla(){
    document.getElementById(`tabla_ronda${cont}`).innerHTML += `
        <th>
            ${ronda_actual}
        </th>
    `;


    if(resultado == "Has ganado!"){
        document.getElementById(`tabla_resultado${cont}`).innerHTML += `
            <th>
                ✅
            </th>
        `; 
    }
    else if(resultado == "Empate"){
        document.getElementById(`tabla_resultado${cont}`).innerHTML += `
            <th>
                ⭕
            </th>
        `; 
    }
    else {
        document.getElementById(`tabla_resultado${cont}`).innerHTML += `
            <th>
                ❌
            </th>
        `; 
    }

    // config cont
    if(ronda_actual % 5 == 0){
        cont += 1;
    }
};


/**
 * Se muestran los resultados de la ronda, tanto por numero, como por una barra de progreso
 */
function resultado_parcial(){
    document.getElementById("result_parcial").innerHTML = `
        Resultado parcial(Ronda ${ronda_actual}): ${resultado}
    `;

    document.getElementById("mi_puntaje").innerHTML = `
        Puntaje: ${mi_puntaje} / ${ronda_actual}
    `;

    document.getElementById("pc_puntaje").innerHTML = `
        Puntaje: ${pc_puntaje} / ${ronda_actual}
    `;


    // resultados en tablas
    resultado_tabla();
};


/**
 * Llena la barra de progreso del puntaje. Genera el width con %
 */
function barra_progreso(){
    // obtener el % de progreso
    barra_width_usuario = (mi_puntaje / rondas_totales) * 100
    barra_width_pc = (pc_puntaje / rondas_totales) * 100

    console.log(`barra usuario: ${barra_width_usuario}\nbarra pc: ${barra_width_pc}`)

    $('#mi_puntaje_barra').css({
        "width": `${barra_width_usuario}%`
    });

    $('#pc_puntaje_barra').css({
        "width": `${barra_width_pc}%`
    });
};


/**
 * Muestra el resultado final luego de TODAS las rondas. Ejecuta codigo en caso de que el usuario gane, pierda o sea un empate
 */
 function resultado_final() {
     console.log(`Ronda actual: ${ronda_actual}`)
    // mostrar el resultado final
    if(ronda_actual == rondas_totales){
        // ocultar opciones al llegar al final del juego
        $("#opciones").removeClass("d-block");
        $("#opciones").addClass("d-none");

        if(mi_puntaje < pc_puntaje){
            document.getElementById("resultado_final").innerHTML = `
                <h2 class="text-danger">😭Has Perdido😭</h2>
            `; 
        }
        else if (mi_puntaje > pc_puntaje){
            document.getElementById("resultado_final").innerHTML = `
                <h2 class="text-success">🥳Has ganado!🥳</h2>
            `;  
        }
        else {
            document.getElementById("resultado_final").innerHTML = `
                <h2>😐Empate😐</h2>
            `;
        }
        // mostrar el resultado final (estaba oculto)
        $("#resultado_final").removeClass("d-none");
        $("#resultado_final").addClass("d-block");
        
        // mostrar botones para reiniciar el juego
        $("#botones_reinicio").removeClass("d-none");
        $("#botones_reinicio").addClass("d-block");
    }
};


/**
 * Es el cuerpo principal del juego. Toma la eleccion del usuraio, del pc y muestra los resultados. Incluye las otras funciones
 * @param {String} my_choice Es la eleccion del Usuario. un string: "piedra", "papel" o "tijera"
 */
function juego(my_choice) {
    ronda_actual += 1;
    console.log("mi eleccion: " + my_choice);

    // eleccion de la computadora
    pc_eleccion = Math.floor(Math.random() * 3);
    pc_eleccion = eleccion_del_pc(pc_eleccion);
    console.log("Eleccion pc: " + pc_eleccion);

    console.log(ronda_actual);

    // ganador 
    resultado = ganador(my_choice, pc_eleccion);
    console.log(resultado);

    // se muestran puntakes
    barra_progreso();

    resultado_parcial();

    resultado_final();

};


/*======================
-----------
3. Jquery: Uso de botones
-----------
======================*/


$(function () {

    $('#btn-jugar').click(function () {
        rondas_totales = parseInt(document.getElementById("rondas_input").value);
        if (rondas_totales > 0 && rondas_totales <= 20) {
            // todo esta en orden; input valido
        }
        else {
            do {
                //alert("El numero ingresado no es valido\nPor favor ingresa un numero entre 0 y 20.")
                console.error("Numero ingresado no valido");
                rondas_totales = parseInt(prompt("Ingresa un numero entre 0 y 20"));

            } while (rondas_totales <= 0 || rondas_totales > 20);
        }

        // A JUGAR!!

        // mostrar las secciones ocultas
        $("#opciones, #resultados").removeClass("d-none");
        $("#opciones, #resultados").addClass("d-block");

        //ocultar seccion preguntas
        $("#pregunta_rondas").removeClass("d-block");
        $("#pregunta_rondas").addClass("d-none");


    });

    let mi_eleccion = "";
    let pc_eleccion = null;
    let resultado;
    // mi eleccion

    $("#piedra").click(function () {
        mi_eleccion = "piedra";
        juego(mi_eleccion);
    });

    $("#papel").click(function () {
        mi_eleccion = "papel";
        juego(mi_eleccion);
    });

    $("#tijera").click(function () {
        mi_eleccion = "tijera";
        juego(mi_eleccion);
    });

    // boton de reinicio

    $("#botones_reinicio button").click(function(){
        // se reinicia todo
        reinicio();

        // mostrar las secciones ocultas
        $("#pregunta_rondas").removeClass("d-none");
        $("#pregunta_rondas").addClass("d-block");

        //ocultar seccion preguntas
        $("#opciones, #resultado_final, #botones_reinicio, #resultados").removeClass("d-block");
        $("#opciones, #resultado_final, #botones_reinicio, #resultados").addClass("d-none");


    });

});