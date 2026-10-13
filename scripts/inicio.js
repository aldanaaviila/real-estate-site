// contenedor donde van las tarjetas de propiedades destacadas
const listaDestacadas = document.querySelector('.destacadas-lista');

// filtramos solo las propiedades que tienen destacada: true
const destacadas = propiedades.filter((propiedad) => propiedad.destacada);

// armamos una tarjeta por cada una y las agregamos al HTML
let html = '';
for (let propiedad of destacadas) {
    html += crearTarjeta(propiedad);
}
listaDestacadas.innerHTML = html;
