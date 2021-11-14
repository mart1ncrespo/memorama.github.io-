
// 12 IMAGENES 
var imagenes = [
    "img/abeja.png",
    "img/buho.png",
    "img/cangrejo.png",
    "img/elefante.png",
    "img/foca.png",
    "img/obeja.png",
    // "img/raton.png",
    // "img/serpiente.png",
    // "img/tiburon.png",
    // "img/tigre.png",
    // "img/tortuga.png",
    // "img/vaca.png"
];
var img1 = ''
var img2 = ''
var oculta1 = {}
var animal1= {}
var oculta2 = {}
var animal2 = {}
var puntaje = 0
var movimientos = 0

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // Mientras queden elementos a mezclar...
    while (0 !== currentIndex) {
  
      // Seleccionar un elemento sin mezclar...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // E intercambiarlo con el elemento actual
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }


function agregarCarta(array) {
    // let imagenCarta = document.createElement("img")
    let imagenesEnTablero = []
    array.forEach(element => {
       imagenesEnTablero.push(element);
    });
    imagenesUnidas = imagenesEnTablero.concat(array)
    return imagenesUnidas;
}

function crearTabla() {
    let cuerpo = document.getElementById('tablero')
    let tableroPrincipal = document.createElement('div')
    tableroPrincipal.setAttribute('id', 'tablero_cartas')

    cuerpo.appendChild(tableroPrincipal);
}

function llenarTabla() {//Rellenar el tablero con los elementos
    crearTabla();
    let arrayImagenes = shuffle(agregarCarta(imagenes));
    const tablero = document.getElementById('tablero_cartas');
    // for (let i = 0; i < 12; i++) {
        arrayImagenes.forEach(element => {
        // Creamos el div contenedor de la imagen interrogativa
        let carta = document.createElement("div");
        carta.classList.add('carta');
        // carta.onclick = compararImagen;

        let imagenOculta = document.createElement("img");
        imagenOculta.src = "img/question.png";
        imagenOculta.classList.add('imagenVisible');

        imagenOculta.onclick = compararImagen;

        carta.appendChild(imagenOculta);
        tablero.appendChild(carta);
    // }
        let imagenAnimal = document.createElement("img");
        imagenAnimal.src = element;
        imagenAnimal.classList.add('imagenOculta');
        carta.appendChild(imagenAnimal)
    });
    
};

function compararImagen(params) {
    if (animal2.attributes == undefined) {

        if (animal1.attributes == undefined) {
            animal1 = params.target.nextElementSibling
            oculta1 = params.target

            descubrirImagen(oculta1,animal1);
            // oculta1.classList.replace('imagenVisible','imagenOculta')
            // animal1.classList.replace('imagenOculta','imagenVisible')
        }else {
            animal2 = params.target.nextElementSibling
            oculta2 = params.target

            descubrirImagen(oculta2, animal2);
            // oculta2.classList.replace('imagenVisible','imagenOculta')
            // animal2.classList.replace('imagenOculta','imagenVisible')
        }
        if (img1 != '') {
            img2 = animal2.src.slice(35);
                if (img1 == img2) {
                    img1 = ''
                    img2 = ''
                    oculta1 = {}
                    animal1 = {}
                    oculta2 = {}
                    animal2 = {}
                    ganador();
                    
                    // console.log('iguales')
                }else{
                    img1 = '';
                    img2 = '';
                    setTimeout(function(){ocultarImagen(oculta1,animal1,oculta2,animal2)},1000)
                    // oculta1.classList.replace('imagenOculta','imagenVisible');
                    // animal1.classList.replace('imagenVisible','imagenOculta');
                    // oculta2.classList.replace('imagenOculta','imagenVisible');
                    // animal2.classList.replace('imagenVisible','imagenOculta');
                    // console.log('distintas')
                    }
        }else{
            img1 = animal1.src.slice(35)
        }
    }
    
      
}
function ocultarImagen(oculta1,animal1,oculta2,animal2) {
    oculta1.classList.replace('imagenOculta','imagenVisible');
    animal1.classList.replace('imagenVisible','imagenOculta');
    oculta2.classList.replace('imagenOculta','imagenVisible');
    animal2.classList.replace('imagenVisible','imagenOculta');

    this.animal1 = {};
    this.oculta1 = {};
    this.animal2 = {};
    this.oculta2 = {};
    
}
function descubrirImagen(oculta, animal) {
        oculta.classList.replace('imagenVisible','imagenOculta');
        animal.classList.replace('imagenOculta','imagenVisible');
    
}
function resetearTablero(params) {
    let cartaTablero = document.getElementById('tablero')
    let tableroCartas = document.getElementById('tablero_cartas')
    
    // for (const c in cartaTablero) {
    //     if (c <12) {
    //         console.log(cartaTablero[7])
    //         tableroCartas.removeChild(cartaTablero[c])
            
    //     }
            // const element = object[carta];
        
    // }
        
    cartaTablero.removeChild(tableroCartas);
    // cartaTablero.parentNode.removeChild(tableroCartas);
    // tablero.parentNode.removeChild(cartaTablero)
    console.log('ejecutado')

}

function ganador() {
    puntaje++ 
    if (puntaje == 6) {
        alert('Felicidades, has ganado')
        resetearTablero();
        llenarTabla();
    }else{
        console.log(puntaje)
    }
}


llenarTabla();
// resetearTablero();