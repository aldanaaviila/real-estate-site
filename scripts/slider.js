// seleccionamos el objeto "document"
const d = document;

// el array de imagenes del slider son las fotos de la propiedad
// (la variable "propiedad" se crea en propiedad.js)
// si la propiedad no existe usamos un array vacio
let arrayImagenes = propiedad ? propiedad.fotos : [];


//elementos del HTML a manipular

let imagenPrincipal = d.querySelector('#foto'); //imagen grande
let anterior = d.querySelector('#anterior');
let siguiente = d.querySelector('#siguiente');
let galeriaImagenes = d.querySelectorAll('.slider-img img');//imagenes en miniatura

// marca con un borde la miniatura que se esta viendo en grande
const marcarActiva = () => {
    galeriaImagenes.forEach((img) => {
        img.classList.toggle('activa', img.src === imagenPrincipal.src);
    });
};

//bucle de evento de clic en cada imagen en miniatura
for (let img of galeriaImagenes) {
    img.addEventListener('click', (e) => {
        //se muestra la imagen en la que se hace click
        imagenPrincipal.src = e.target.src;
        marcarActiva();
    });
}

//variables para controlar el mov de las imagenes de la galeria
let movimientoImgs = 1, //el carrusel de fotos se movera en 1 posicion por cada click
    posicionActual = 0,
    posicionInicial = 0,
    posicionFinal = arrayImagenes.length - 1;

const Navegacion = (direccion) => {
    let sentido = direccion == 'ant' ? -1 : 1;
    posicionActual += movimientoImgs * sentido;

    // condicion: si la posición actual es menor que la inicial
    // se lleva al final del arreglo
    if (posicionActual < posicionInicial) {
        posicionActual = posicionFinal;
    }
    // condicion: si la posición actual es mayor que la final
    // se lleva al inicio del arreglo
    if (posicionActual > posicionFinal) {
        posicionActual = posicionInicial;
    }

    galeriaImagenes.forEach((img, i) => {
        img.src = arrayImagenes[(i + posicionActual) % arrayImagenes.length];
    });

    //la imagen grande pasa a ser la primera miniatura
    imagenPrincipal.src = galeriaImagenes[0].src;
    marcarActiva();
};

// las flechas solo existen si se encontro la propiedad
if (arrayImagenes.length > 0) {
    // evento click para imagen anterior
    anterior.addEventListener('click', () => {
        Navegacion('ant');
    });

    // evento click para imagen siguiente
    siguiente.addEventListener('click', () => {
        Navegacion('sig');
    });

    // al cargar la pagina marcamos la primera miniatura
    marcarActiva();
}
