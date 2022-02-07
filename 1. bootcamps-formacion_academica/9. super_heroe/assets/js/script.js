const validacion_form = (input) => {
    if (isNaN(input)){
        return "name"
    }
    else {
        if (input <= 731 && input > 0){
            // si se ingresa un numero, que los resultados de la busqueda se oculten
            $("#resultados_busqueda").css("display", "none");
            return "id"
        }
        else {
            alert("Numero no valido.\nIngresa un numero del 1 al 731")
        }
    }
}

const show_data = (data) => {
    let nombre = data.name;
    let img = data.image.url;

    let intelligence = parseFloat(data.powerstats.intelligence);
    let strength = parseFloat(data.powerstats.strength);
    let speed = parseFloat(data.powerstats.speed);
    let durability = parseFloat(data.powerstats.durability);
    let power = parseFloat(data.powerstats.power);
    let combat = parseFloat(data.powerstats.combat);
    console.log(intelligence)

    let full_name = data.biography["full-name"];
    let alter_egos = data.biography["alter-egos"];
    let aliases = data.biography["aliases"];
    let birth = data.biography["place-of-birth"];
    let first_appearance = data.biography["first-appearance"];
    let publisher = data.biography["publisher"];

    let gender = data.appearance.gender;
    let race = data.appearance.race;
    let height = data.appearance.height[1];
    let weight = data.appearance.weight[1];
    let eye_color = data.appearance["eye-color"];
    let hair_color = data.appearance["hair-color"];

    let occupation = data.work.occupation;

    let affiliation = data.connections["group-affiliation"];
    let relatives = data.connections.relatives;

    $("#hero-info h2").html(`${nombre}`);

    $("#hero-info .imagen").html(`
        <img src="${img}" alt="${nombre}">
    `)

    $("#hero-info .info").html(`
        <div class="mb-4 mt-4 mt-lg-0">
            <h4>Biografia</h4>
            <p class="my-0"><b>Nombre completo:</b> ${full_name}</p>
            <p class="my-0"><b>Alter Egos:</b> ${alter_egos}</p>
            <p class="my-0"><b>Lista de alias:</b> ${aliases}</p>
            <p class="my-0"><b>Lugar de nacimiento:</b> ${birth}</p>
            <p class="my-0"><b>Primera aparicion:</b> ${first_appearance}</p>
            <p class="my-0"><b>Publicado por:</b> ${publisher}</p>
        </div>

        <!--  -->

        <div class="mb-4">
            <h4>Apariencia</h4>
            <p class="my-0"><b>Genero:</b> ${gender}</p>
            <p class="my-0"><b>Raza:</b> ${race}</p>
            <p class="my-0"><b>Altura:</b> ${height}</p>
            <p class="my-0"><b>Peso:</b> ${weight}</p>
            <p class="my-0"><b>Color de ojos:</b> ${eye_color}</p>
            <p class="my-0"><b>Color de cabello:</b> ${hair_color}</p>
        </div>

        <!-- trabajo -->

        <div class="mb-4">
            <h4>Trabajo</h4>
            <p class="my-0"><b>Ocupacion:</b> ${occupation}</p>
        </div>

        <div>
            <h4>Conecciones</h4>
            <p class="my-0"><b>Afiliacion:</b> ${affiliation}</p>
            <p class="my-0"><b>Relatives:</b> ${relatives}</p>
        </div>
    `);

    var chart = new CanvasJS.Chart("grafico1", {
        animationEnabled: true,
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        title: {
            text: `Estadisticas de ${nombre}`
        },
        axisY: {
            title: "Valor",
            suffix: "%"
        },
        axisX: {
            title: "Stat"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: 'intelligence', y: intelligence },	
                { label: 'strength', y: strength },	
                { label: 'speed', y: speed },
                { label: 'durability', y: durability },	
                { label: 'power', y: power },
                { label: 'combat', y: combat }
            ]
        }]
    });
    chart.render();

    // mostrar zona oculta
    $("#hero-info, #seccion_grafico").css("opacity", "1")

    // cambio de grafico: tipo bar

    $(".fa-chart-bar").on("click", function(){

        var chart = new CanvasJS.Chart("grafico1", {
            animationEnabled: true,
            theme: "light1", // "light1", "light2", "dark1", "dark2"
            title: {
                text: `Estadisticas de ${nombre}`
            },
            axisY: {
                title: "Valor",
                suffix: "%"
            },
            axisX: {
                title: "Stat"
            },
            data: [{
                type: "column",
                dataPoints: [
                    { label: 'intelligence', y: intelligence },	
                    { label: 'strength', y: strength },	
                    { label: 'speed', y: speed },
                    { label: 'durability', y: durability },	
                    { label: 'power', y: power },
                    { label: 'combat', y: combat }
                ]
            }]
        });
        chart.render();
    });

    // tipo pie

    $(".fa-chart-pie").on("click", function(){

        var chart = new CanvasJS.Chart("grafico1", {
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            exportEnabled: true,
            animationEnabled: true,
            title: {
                text: `Estadisticas de ${nombre}`
            },
            data: [{
                type: "pie",
                startAngle: 25,
                toolTipContent: "<b>{label}</b>: {y}",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}",
                dataPoints: [
                    { y: intelligence, label: "intelligence" },
                    { y: strength, label: "strength" },
                    { y: speed, label: "speed" },
                    { y: durability, label: "durability" },
                    { y: power, label: "power" },
                    { y: combat, label: "combat" }
                ]
            }]
        });
        chart.render();
    })

}


$(document).ready(function(){

    $("form").on("submit", function(evento){
        evento.preventDefault();
    });

    // evento click al buscar un superheroe en el buscador
    $(".buscador form button").on("click", function(){
        /**
         * Valor ingresado por el usuario. puede ser Numero o nombre de un superheroe
         */
        let input = $('#busqueda').val();
        
        let input_type = validacion_form(input);

        let url_input = "";

        if (input_type == "name"){
            // para que las mayusculas no afecten la busqueda
            input = input.toLocaleLowerCase();
            
            url_input = "https://www.superheroapi.com/api.php/2614534005345190/search/" + input
            
            $.ajax({
                url: url_input,
                success: function(data){
                    if(data.response == "success"){
                        // vaciar antes de mostrar resultados
                        $("#resultados_busqueda tbody").html("");

                        let resultados = data.results;
                        resultados.forEach((heroe, index) => {
                            $("#resultados_busqueda tbody").append(`
                                <tr>
                                    <th>${index + 1}</th>
                                    <th>${heroe.name}</th>
                                    <th><a href="#hero-info"><button class="btn btn-info btn_verMas" data-id="${heroe.id}">Ver</button></a></th>
                                </tr>
                            `);
                        });

                        // mostar la tabla, que estaba oculta
                        $("#resultados_busqueda").css("display", "block");

                        // se puede obtener el id del boton y mostrar la info del heroe
                        $(".btn_verMas").on("click", function(){
                            let id = this.getAttribute("data-id");
                            
                            url_input = "https://www.superheroapi.com/api.php/2614534005345190/" + id
    
                            $.ajax({
                                url: url_input,
                                success: function(data){
                                    show_data(data);
                                }
                            });
                        });

                    }
                    else {
                        // si no hay resultados
                        alert("No hay heroes que coincidan con la busqueda\nIngresa un numero del 1 al 731 o el nombre del heroe")
                    }
                }
            });
        }
        else if (input_type == "id"){
            url_input = "https://www.superheroapi.com/api.php/2614534005345190/" + input
            
            $.ajax({
                url: url_input,
                success: function(data){
                    show_data(data);
                }
            });
        }


    });

});
