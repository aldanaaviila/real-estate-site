// elementos del HTML a manipular
const formFiltros = document.getElementById('filtros');
const listaPropiedades = document.querySelector('.propiedades');
const titulo = document.getElementById('titulo');
const sinResultados = document.getElementById('sin-resultados');
const cantidad = document.getElementById('cantidad');

// funcion que busca las propiedades que cumplen los filtros y las muestra
const filtrar = () => {
    // tomamos los valores de cada campo del form
    const ubicacion = document.getElementById('ubicacion').value.trim().toLowerCase();
    const operacion = document.getElementById('tipo-operacion').value;
    const tipo = document.getElementById('tipo-de-propiedad').value;
    const dormitorios = Number(document.getElementById('dormitorios').value);
    const banos = Number(document.getElementById('banos').value);

    // filter() se queda solo con las propiedades que devuelven true
    const resultado = propiedades.filter((propiedad) => {
        // juntamos direccion y barrio para buscar por ubicacion
        const lugar = (propiedad.direccion + ' ' + propiedad.barrio).toLowerCase();

        // cada condicion es verdadera si el filtro esta vacio o si la propiedad cumple
        const cumpleUbicacion = ubicacion == '' || lugar.includes(ubicacion);
        const cumpleOperacion = operacion == '' || propiedad.operacion == operacion;
        const cumpleTipo = tipo == '' || propiedad.tipo == tipo;
        const cumpleDorms = propiedad.dormitorios >= dormitorios;
        const cumpleBanos = propiedad.banos >= banos;

        return cumpleUbicacion && cumpleOperacion && cumpleTipo && cumpleDorms && cumpleBanos;
    });

    // armamos las tarjetas de las propiedades encontradas
    let html = '';
    for (let propiedad of resultado) {
        html += crearTarjeta(propiedad);
    }
    listaPropiedades.innerHTML = html;

    // cambiamos el titulo segun la operacion elegida
    if (operacion == 'venta') {
        titulo.textContent = 'PROPIEDADES EN VENTA';
    } else if (operacion == 'alquiler') {
        titulo.textContent = 'PROPIEDADES EN ALQUILER';
    } else {
        titulo.textContent = 'PROPIEDADES';
    }

    // mostramos cuantas propiedades se encontraron
    if (resultado.length == 1) {
        cantidad.textContent = '1 propiedad encontrada';
    } else {
        cantidad.textContent = `${resultado.length} propiedades encontradas`;
    }

    // si no hay ninguna, mostramos el mensaje
    sinResultados.hidden = resultado.length > 0;
    cantidad.hidden = resultado.length == 0;
};

// cuando se aprieta "Buscar" filtramos sin recargar la pagina
formFiltros.addEventListener('submit', (event) => {
    event.preventDefault();
    filtrar();
});

// al cambiar cualquier select tambien filtramos, sin tener que apretar "Buscar"
formFiltros.addEventListener('change', filtrar);

// el boton "Limpiar filtros" vuelve todos los campos a su valor inicial.
// usamos setTimeout para filtrar justo despues de que se limpien los campos
formFiltros.addEventListener('reset', () => {
    setTimeout(filtrar, 0);
});

// si venimos desde la busqueda del inicio, los filtros llegan en la URL
// ejemplo: propiedades.html?operacion=venta&tipo=casa
const parametros = new URLSearchParams(window.location.search);

if (parametros.has('operacion')) {
    document.getElementById('tipo-operacion').value = parametros.get('operacion');
}
if (parametros.has('tipo')) {
    document.getElementById('tipo-de-propiedad').value = parametros.get('tipo');
}
if (parametros.has('ubicacion')) {
    document.getElementById('ubicacion').value = parametros.get('ubicacion');
}

filtrar();
