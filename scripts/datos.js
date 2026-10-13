// LISTA DE PROPIEDADES
// Todas las páginas toman los datos de acá. Para agregar una propiedad nueva
// alcanza con sumar un objeto a este array (no hace falta tocar el HTML).
//
// Usamos un archivo .js y no un .json porque el navegador no deja leer
// archivos .json con fetch() cuando abrimos el index.html con doble click.

const propiedades = [
    {
        id: 1,
        operacion: 'alquiler',      // 'venta' o 'alquiler'
        tipo: 'casa',               // 'casa', 'departamento' o 'terreno'
        precio: '$580.000',
        direccion: 'Av. Belgrano 1100',
        barrio: 'Martínez',
        dormitorios: 2,
        banos: 1,
        ambientes: 3,
        cocheras: 1,
        superficie: 87,             // en m²
        antiguedad: 2,              // en años
        expensas: '$110.000',
        destacada: false,           // si es true, aparece en el inicio
        fotos: [
            'images/propiedades/casa-1.jpg',
            'images/propiedades/casa-1-2.jpg',
            'images/propiedades/casa-1-3.jpg',
            'images/propiedades/casa-1-4.jpg',
        ],
        descripcion: 'Dúplex con patio y cochera. Living-comedor con aire acondicionado frío/calor. Cocina amoblada con conexión para lavarropas automático. Patio amplio, toilette y espacio de guardado bajo escalera. Dos dormitorios con placard y aire acondicionado. Baño completo.',
    },
    {
        id: 2,
        operacion: 'alquiler',
        tipo: 'casa',
        precio: '$430.000',
        direccion: 'Av. Viamonte 639',
        barrio: 'San Isidro',
        dormitorios: 3,
        banos: 2,
        ambientes: 4,
        cocheras: 2,
        superficie: 180,
        antiguedad: 15,
        expensas: '',
        destacada: false,
        fotos: [
            'images/propiedades/casa-2.jpg',
        ],
        descripcion: 'Casa en dos plantas con jardín al frente y garage doble. Living amplio con hogar, cocina integrada y lavadero. Tres dormitorios, el principal en suite.',
    },
    {
        id: 3,
        operacion: 'venta',
        tipo: 'casa',
        precio: 'USD 23.000',
        direccion: 'San Lorenzo 1265',
        barrio: 'Tigre',
        dormitorios: 3,
        banos: 1,
        ambientes: 4,
        cocheras: 1,
        superficie: 210,
        antiguedad: 25,
        expensas: '',
        destacada: false,
        fotos: [
            'images/propiedades/casa-3.jpg',
        ],
        descripcion: 'Casa con pileta y parque en barrio residencial. Galería con parrilla, living-comedor luminoso y tres dormitorios. Ideal para familias.',
    },
    {
        id: 4,
        operacion: 'alquiler',
        tipo: 'departamento',
        precio: '$150.000',
        direccion: 'Av. Triunvirato 5603',
        barrio: 'Villa Urquiza',
        dormitorios: 2,
        banos: 1,
        ambientes: 3,
        cocheras: 0,
        superficie: 62,
        antiguedad: 5,
        expensas: '$45.000',
        destacada: false,
        fotos: [
            'images/propiedades/departamento-1.jpg',
            'images/propiedades/departamento-1-2.jpg',
            'images/propiedades/departamento-1-3.jpg',
            'images/propiedades/departamento-1-4.jpg',
        ],
        descripcion: 'Departamento luminoso con cocina integrada y balcón. A dos cuadras de la estación de subte. Edificio con SUM y laundry.',
    },
    {
        id: 5,
        operacion: 'venta',
        tipo: 'departamento',
        precio: 'USD 20.000',
        direccion: 'Av. Salvador María del Carril 3675',
        barrio: 'Villa Devoto',
        dormitorios: 3,
        banos: 2,
        ambientes: 4,
        cocheras: 1,
        superficie: 95,
        antiguedad: 8,
        expensas: '$80.000',
        destacada: false,
        fotos: [
            'images/propiedades/departamento-2.jpg',
            'images/propiedades/departamento-2-2.jpg',
            'images/propiedades/departamento-2-3.jpg',
        ],
        descripcion: 'Departamento de 4 ambientes con living-comedor amplio, dos baños completos y cochera. Excelente ubicación cerca de plazas y comercios.',
    },
    {
        id: 6,
        operacion: 'venta',
        tipo: 'terreno',
        precio: 'USD 25.000',
        direccion: 'Las Gardenias 359',
        barrio: 'Costa del Este',
        dormitorios: 0,
        banos: 0,
        ambientes: 0,
        cocheras: 0,
        superficie: 600,
        antiguedad: 0,
        expensas: '',
        destacada: false,
        fotos: [
            'images/propiedades/terreno-1.jpg',
            'images/propiedades/terreno-1-2.jpg',
            'images/propiedades/terreno-1-3.jpg',
        ],
        descripcion: 'Lote de 600 m² a pocas cuadras del mar. Calle asfaltada, con luz y agua de red. Apto para construir vivienda.',
    },
    {
        id: 7,
        operacion: 'alquiler',
        tipo: 'casa',
        precio: '$290.000',
        direccion: 'Av. Belgrano 2450',
        barrio: 'Avellaneda',
        dormitorios: 2,
        banos: 1,
        ambientes: 3,
        cocheras: 1,
        superficie: 110,
        antiguedad: 3,
        expensas: '',
        destacada: true,
        fotos: [
            'images/propiedades/destacada-1.jpg',
            'images/propiedades/destacada-1-2.jpg',
            'images/propiedades/destacada-1-3.jpg',
            'images/propiedades/destacada-1-4.jpg',
        ],
        descripcion: 'Casa moderna de 2 dormitorios en zona urbana. Cochera cubierta, patio con parrilla y cocina equipada.',
    },
    {
        id: 8,
        operacion: 'alquiler',
        tipo: 'casa',
        precio: '$500.000',
        direccion: 'Las Heras 890',
        barrio: 'Escobar',
        dormitorios: 2,
        banos: 1,
        ambientes: 3,
        cocheras: 1,
        superficie: 140,
        antiguedad: 1,
        expensas: '',
        destacada: true,
        fotos: [
            'images/propiedades/destacada-2.jpg',
            'images/propiedades/destacada-2-2.jpg',
            'images/propiedades/destacada-2-3.jpg',
            'images/propiedades/destacada-2-4.jpg',
        ],
        descripcion: 'Casa a estrenar en zona céntrica, con pileta y amplios ventanales. Living-comedor integrado al jardín.',
    },
    {
        id: 9,
        operacion: 'venta',
        tipo: 'casa',
        precio: 'USD 40.000',
        direccion: 'Bogotá 3340',
        barrio: 'Olivos',
        dormitorios: 3,
        banos: 1,
        ambientes: 4,
        cocheras: 1,
        superficie: 220,
        antiguedad: 30,
        expensas: '',
        destacada: true,
        fotos: [
            'images/propiedades/destacada-3.jpg',
            'images/propiedades/destacada-3-2.jpg',
            'images/propiedades/destacada-3-3.jpg',
            'images/propiedades/destacada-3-4.jpg',
        ],
        descripcion: 'Casa clásica en Zona Norte con jardín arbolado y galería. Tres dormitorios, living con hogar y cocina comedor.',
    },
    {
        id: 10,
        operacion: 'venta',
        tipo: 'departamento',
        precio: 'USD 40.000',
        direccion: 'Av. del Libertador 2200',
        barrio: 'Palermo',
        dormitorios: 2,
        banos: 1,
        ambientes: 3,
        cocheras: 1,
        superficie: 85,
        antiguedad: 4,
        expensas: '$150.000',
        destacada: true,
        fotos: [
            'images/propiedades/destacada-4.jpg',
            'images/propiedades/destacada-4-2.jpg',
            'images/propiedades/destacada-4-3.jpg',
            'images/propiedades/destacada-4-4.jpg',
        ],
        descripcion: 'Departamento en complejo con amenities (pileta, gimnasio y seguridad 24 hs). Acceso cercano al subte.',
    },
    {
        id: 11,
        operacion: 'alquiler',
        tipo: 'departamento',
        precio: '$360.000',
        direccion: 'Av. Roberto Laplace 446',
        barrio: 'Vicente López',
        dormitorios: 2,
        banos: 1,
        ambientes: 3,
        cocheras: 0,
        superficie: 70,
        antiguedad: 10,
        expensas: '$60.000',
        destacada: true,
        fotos: [
            'images/propiedades/destacada-5.jpg',
            'images/propiedades/departamento-3.jpg',
            'images/propiedades/departamento-3-2.jpg',
            'images/propiedades/departamento-3-3.jpg',
        ],
        descripcion: 'Departamento de 3 ambientes con balcón, cerca de la estación de tren. Cocina separada y lavadero.',
    },
    {
        id: 12,
        operacion: 'alquiler',
        tipo: 'departamento',
        precio: '$230.000',
        direccion: 'Sargento Cabral 1559',
        barrio: 'Escobar',
        dormitorios: 1,
        banos: 1,
        ambientes: 2,
        cocheras: 0,
        superficie: 45,
        antiguedad: 6,
        expensas: '$35.000',
        destacada: true,
        fotos: [
            'images/propiedades/destacada-6.jpg',
            'images/propiedades/destacada-6-2.jpg',
            'images/propiedades/destacada-6-3.jpg',
        ],
        descripcion: 'Dos ambientes en zona céntrica, ideal para una persona o pareja. Edificio con ascensor.',
    },
];


// FUNCION QUE ARMA LA TARJETA DE UNA PROPIEDAD
// La usan el inicio (destacadas) y la página de propiedades.
// Devuelve el HTML de la tarjeta como texto.

const crearTarjeta = (propiedad) => {
    // el texto del medio cambia si es terreno (no tiene dormitorios ni baños)
    let cantidades = '';

    if (propiedad.tipo == 'terreno') {
        cantidades = `<p>Lote de ${propiedad.superficie} m²</p>`;
    } else {
        // ponemos "s" al final solo si hay más de uno
        const dorms = propiedad.dormitorios == 1 ? '1 dorm' : `${propiedad.dormitorios} dorms`;
        const banos = propiedad.banos == 1 ? '1 baño' : `${propiedad.banos} baños`;

        cantidades = `
            <div class="icono-1-prop">
                <img src="images/iconos/icono-dorms.png" alt="Dormitorios">
                <p>${dorms}</p>
            </div>
            <div class="icono-2-prop">
                <img src="images/iconos/icono-bano.png" alt="Baños">
                <p>${banos}</p>
            </div>`;
    }

    // "casa" -> "Casa", para el texto de abajo
    const tipo = propiedad.tipo.charAt(0).toUpperCase() + propiedad.tipo.slice(1);

    return `
        <div class="div-propiedades">
            <a class="prop-imagen" href="propiedad.html?id=${propiedad.id}">
                <img src="${propiedad.fotos[0]}" alt="${tipo} en ${propiedad.barrio}" loading="lazy">
                <span class="etiqueta">${propiedad.operacion.toUpperCase()}</span>
            </a>

            <div class="propiedades-info">
                <div class="prop-precio">
                    <span>${propiedad.precio}</span>
                </div>

                <div class="prop-cantidad">${cantidades}
                </div>

                <div class="prop-detalle">
                    <h5><a href="propiedad.html?id=${propiedad.id}">${propiedad.direccion}</a></h5>
                    <p>${tipo} en ${propiedad.operacion} en ${propiedad.barrio}</p>
                </div>
            </div>
        </div>`;
};
