$(function(){
    /*======================
    ------------
    2- Operaciones Aritmeticas
    ------------
    ======================*/

    // el codigo solo se ejecutara al apretar el boton
    var contador1 = 0;  // nos ayudara a repetir de fomra indefinida, variando los id
    $('#operaciones_aritmeticas button').click(function(){
        // 1. se solititan los datos de entrada
        let num1 = parseFloat(prompt("ingresa el primer numero"));
        let num2 = parseFloat(prompt("ingresa el segundo numero"));

        // 2. Se realizan los calculos
        let suma = num1 + num2;
        let resta = num1 - num2;
        let multiplicacion = num1 * num2;
        let division = num1 / num2;
        let modulo = num1 % num2;

        // 3. Se imprimen los resultados
        document.getElementById(`punto2_input${contador1}`).innerHTML += `
            <tr>
                <th>${num1}</th>
                <th>${num2}</th>
                <th>${num1} + ${num2} = ${suma}</th>
                <th>${num1} - ${num2} = ${resta}</th>
                <th>${num1} * ${num2} = ${multiplicacion}</th>
                <th>${num1} / ${num2} = ${division.toFixed(1)}</th>
                <th>${num1} % ${num2} = ${modulo}</th>
            </tr>
        `;
       
        
        // varia el id de forma dinamica, para repetir con el boton de inicio
        document.getElementById(`punto2_input${contador1}`).id = `punto2_input${contador1 + 1}`;
        contador1 += 1;
    });

    /*======================
    ------------
    3- Convertor de temperatura
    ------------
    ======================*/

    // el codigo solo se ejecutara al apretar el boton
    var contador2 = 0;  // nos ayudara a repetir de fomra indefinida, variando los id
    $('#convertor_temperatura button').click(function(){
        // 1. se solititan los datos de entrada
        let celsius = parseFloat(prompt("ingresa la temperatura en °C"));
        const kelvin_cte = 273.15;

        // 2. Se realizan los calculos
        let far = (celsius * 9 / 5) + 32; // a farenheit
        far = far.toFixed(1) // se toma solo 1 decimal
        let kelvin = celsius + kelvin_cte; // a kelvin

        // 3. Se imprimen los resultados
        document.getElementById(`punto3_input${contador2}`).innerHTML += `
            <tr>
                <th>${celsius}</th>
                <th>➡➡➡</th>
                <th>${far}</th>
                <th>${kelvin}</th>
            </tr>
        `;
       
        
        // varia el id de forma dinamica, para repetir con el boton de inicio
        document.getElementById(`punto3_input${contador2}`).id = `punto3_input${contador2 + 1}`;
        contador2 += 1;
    });

    /*======================
    ------------
    4- Convertor de dias
    ------------
    ======================*/
    // el codigo solo se ejecutara al apretar el boton
    var contador3 = 0;  // nos ayudara a repetir de fomra indefinida, variando los id
    $('#convertor_dias button').click(function(){
        // 1. se solititan los datos de entrada
        let dias_iput = parseFloat(prompt("Ingresa Los dias a convertir:"));
        let dias = dias_iput;
        // 2. Se realizan los calculos
        let años = Math.floor(dias / 365);
        let semanas = Math.floor(dias / 7);
        console.log(semanas)

        // 3. Se hacen las comparaciones y clculos
        if (años < 1) {
            if(semanas < 1){
                // dias = dias
            }else {
                // los dias seran los dias que sobren a las semanas 
                dias = dias - (semanas * 7);
            };
        }else {
            // las semanas seran lo que sobre del año
            semanas = Math.floor(semanas - Math.floor(años * Math.floor(365 / 7))); // dividido en la cantidad de semanas que hay en un año
            // los dias seran lo que sobre del año y semana
            dias = dias - (años * 365) - (semanas * 7);
        };

        console.log(contador3)
        // Se imprimen los resultados
        document.getElementById(`punto4_input${contador3}`).innerHTML += `
            <tr>
                <th>${dias_iput}</th>
                <th>➡➡➡</th>
                <th>${años}</th>
                <th>${semanas}</th>
                <th>${dias}</th>
            </tr>
        `;
        
        
        // varia el id de forma dinamica, para repetir con el boton de inicio
        document.getElementById(`punto4_input${contador3}`).id = `punto4_input${contador3 + 1}`;
        contador3 += 1;
    });

    /*======================
    ------------
    5- Suma y promedio de 5 numeros
    ------------
    ======================*/
    // el codigo solo se ejecutara al apretar el boton
    var contador4 = 0;  // nos ayudara a repetir de fomra indefinida, variando los id
    $('#suma_promedio button').click(function(){
        let cont = 1; // ayuda al loop de los numeros
        let suma = 0; // se declara la varoiable que contenera la suma
        let numeros = [];  // aqui se almacenan lo snumeros ingresados
        // 1. se solititan los datos de entrada y se hacen los calculos
        while(cont != 6){ // esto se puede cambiar a un numero que ingrese el usuario (6 = 5 + 1)
            num = parseFloat(prompt(`Ingresa el numero ${cont}`));
            numeros.push(num);
            suma += num;
            cont += 1;
        }

        let promedio = suma / 5;

        // Se imprimen los resultados
        document.getElementById(`punto5_input${contador4}`).innerHTML += `
            <tr>
                <th>${numeros}</th>
                <th>➡➡➡</th>
                <th>${suma}</th>
                <th>${promedio}</th>
            </tr>
        `;
        
        
        // varia el id de forma dinamica, para repetir con el boton de inicio
        document.getElementById(`punto5_input${contador4}`).id = `punto5_input${contador4 + 1}`;
        contador4 += 1;
    });
});


