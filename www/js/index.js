var id = 0;
var contador = 0;
$(document).ready(function () {
    datosTest = [{ "id": "0", "tipo": "0", "imgAnimal": "img/imagen1.jpg", "R1": "PANGOLIN", "R2": "ARMADILLO", "R3": "OSO HORMIGUERO", "correcto": "1" },
    { "id": "1", "tipo": "0", "imgAnimal": "img/imagen2.jpg", "R1": "TARSERO DE FILIPINAS", "R2": "LEMMING", "R3": "GAGALO", "correcto": "1" },
    { "id": "2", "tipo": "0", "imgAnimal": "img/imagen3.jpg", "R1": "LICAON", "R2": "DINGO", "R3": "COYOTE", "correcto": "2" },
    { "id": "3", "tipo": "0", "imgAnimal": "img/imagen4.jpg", "R1": "PATO NEOZELANDES", "R2": "ORNITORRINCO", "R3": "GAGALO", "correcto": "2" },
    { "id": "4", "tipo": "0", "imgAnimal": "img/imagen5.jpg", "R1": "OCELOTE", "R2": "GATO MONTES", "R3": "SERVAL", "correcto": "3" },
    { "id": "5", "tipo": "0", "imgAnimal": "img/imagen6.jpg", "R1": "CIERVO RATON", "R2": "ANTILOPE PIGMEO", "R3": "DICDIC", "correcto": "1" },
    { "id": "6", "tipo": "0", "imgAnimal": "img/imagen7.jpg", "R1": "LICAON", "R2": "HIENA", "R3": "OTOCION O ZORRO OREJUDO", "correcto": "1" },
    { "id": "7", "tipo": "0", "imgAnimal": "img/imagen8.jpg", "R1": "LAGARTO SPIDERMAN", "R2": "IGUANA BICOLOR", "R3": "DRAGON DE COMODO", "correcto": "1" },
    { "id": "8", "tipo": "0", "imgAnimal": "img/imagen9.jpg", "R1": "JIRAFA RALLADA", "R2": "CIERVO CEBRA", "R3": "OKAPI", "correcto": "3" },
    { "id": "9", "tipo": "0", "imgAnimal": "img/imagen10.jpg", "R1": "WOMBAT", "R2": "HAMSTER TODOTERRENO AUSTRALIANO", "R3": "CHINCHILLA", "correcto": "1" }]

    $('#hipnoSapo').on('click', { 'contador': 0 }, cargarDatos);
    $('#continuar').on('click', continuar);
});

function cargarDatos(numero) {
    contador = numero.data.contador;
    var bloque = '';
    var bloqueF = '';

    for (let index = 0; index < datosTest.length; index++) {
        if (datosTest[index].id == contador) {
            bloque += '<div ">'
            bloque += '<img class="img_animal" src="' + datosTest[index].imgAnimal + '" >'
            bloque += '</div>'
            bloque += '<br>'
            bloque += '<div class="ui-grid-solo">'
            bloque += '<div class="ui-block-a"><a href="#" class="ui-btn ui-shadow ui-corner-all">' + datosTest[index].R1 + '</a></div>'
            bloque += '</div>'
            bloque += '<div class="ui-grid-solo">'
            bloque += '<div class="ui-block-a"><a href="#" class="ui-btn ui-shadow ui-corner-all">' + datosTest[index].R2 + '</a></div>'
            bloque += '</div>'
            bloque += '<div class="ui-grid-solo">'
            bloque += '<div class="ui-block-a"><a href="#" class="ui-btn ui-shadow ui-corner-all">' + datosTest[index].R3 + '</a></div>'
            bloque += '</div>'
        }
    }
    $("#content").html(bloque);

    contador++;
}
function continuar() {
    var bloque = '';
    var bloqueF = '';

    for (let index = 0; index < datosTest.length; index++) {
        if (contador == datosTest.length) {
            bloque += '<div ">'
            bloque += '<img class="img_animal" src="img/final.jpg" >'
            bloque += '</div>'

            $('#content')
                .removeClass()
                .addClass('.imgFinal');

            $('#footer').html(bloqueF);
        } else {
            if (datosTest[index].id == contador) {
                bloque += '<div ">'
                bloque += '<img class="img_animal" src="' + datosTest[index].imgAnimal + '" >'
                bloque += '</div>'
                bloque += '<br>'
                bloque += '<div class="ui-grid-solo">'
                bloque += '<div class="ui-block-a"><a href="#" class="ui-btn ui-shadow ui-corner-all">' + datosTest[index].R1 + '</a></div>'
                bloque += '</div>'
                bloque += '<div class="ui-grid-solo">'
                bloque += '<div class="ui-block-a"><a href="#" class="ui-btn ui-shadow ui-corner-all">' + datosTest[index].R2 + '</a></div>'
                bloque += '</div>'
                bloque += '<div class="ui-grid-solo">'
                bloque += '<div class="ui-block-a"><a href="#" class="ui-btn ui-shadow ui-corner-all">' + datosTest[index].R3 + '</a></div>'
                bloque += '</div>'
            }
        }
    }
    $("#content").html(bloque);
    
    contador++;
}