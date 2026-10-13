// leemos el id que viene en la URL (ejemplo: propiedad.html?id=3)
const parametrosUrl = new URLSearchParams(window.location.search);
const idBuscado = Number(parametrosUrl.get('id'));

// buscamos en el array de datos.js la propiedad con ese id
// find() devuelve la primera que coincide, o undefined si no hay ninguna
const propiedad = propiedades.find((p) => p.id == idBuscado);

if (propiedad) {
    // "casa" -> "Casa"
    const tipo = propiedad.tipo.charAt(0).toUpperCase() + propiedad.tipo.slice(1);
    const tituloTexto = `${tipo} en ${propiedad.operacion} en ${propiedad.barrio}`;

    // titulo de la pestaña del navegador
    document.title = `${tituloTexto} | Propiedades A.B.C`;

    // completamos los textos de la pagina
    document.getElementById('prop-titulo').textContent = tituloTexto;
    document.getElementById('prop-direccion').textContent = `${propiedad.direccion}, ${propiedad.barrio}`;
    document.getElementById('prop-precio').textContent = propiedad.precio;
    document.getElementById('prop-descripcion').textContent = propiedad.descripcion;
    document.getElementById('foto').src = propiedad.fotos[0];

    // armamos la lista de informacion basica
    let info = '';

    if (propiedad.tipo == 'terreno') {
        info += `<li>Superficie: ${propiedad.superficie} m²</li>`;
    } else {
        info += `<li>Ambientes: ${propiedad.ambientes}</li>`;
        info += `<li>Dormitorios: ${propiedad.dormitorios}</li>`;
        info += `<li>Baños: ${propiedad.banos}</li>`;
        info += `<li>Cocheras: ${propiedad.cocheras}</li>`;
        info += `<li>Superficie: ${propiedad.superficie} m²</li>`;

        // si la antigüedad es 0 decimos "a estrenar"
        if (propiedad.antiguedad == 0) {
            info += `<li>Antigüedad: a estrenar</li>`;
        } else {
            info += `<li>Antigüedad: ${propiedad.antiguedad} años</li>`;
        }
    }

    // las expensas solo se muestran si la propiedad tiene
    if (propiedad.expensas != '') {
        info += `<li>Expensas: ${propiedad.expensas}</li>`;
    }

    document.getElementById('prop-info').innerHTML = info;

    // miniaturas de la galeria (como maximo 4)
    let miniaturas = '';
    const cantidadMiniaturas = Math.min(propiedad.fotos.length, 4);
    for (let i = 0; i < cantidadMiniaturas; i++) {
        miniaturas += `<img src="${propiedad.fotos[i]}" alt="Foto ${i + 1}">`;
    }
    document.querySelector('.slider-img').innerHTML = miniaturas;

    // si tiene una sola foto no tiene sentido mostrar las flechas y miniaturas
    if (propiedad.fotos.length == 1) {
        document.getElementById('slider').hidden = true;
    }

    // dejamos escrito un mensaje en el formulario con la direccion
    document.getElementById('mensaje').textContent =
        `Hola, me interesa la propiedad de ${propiedad.direccion}. ¿Podrían darme más información?`;

} else {
    // si el id no existe, mostramos un mensaje en lugar de la ficha
    document.getElementById('propiedad').innerHTML = `
        <div class="no-encontrada">
            <h2>No encontramos esta propiedad</h2>
            <p>Puede que ya no esté disponible. <a href="propiedades.html">Ver todas las propiedades</a></p>
        </div>`;
}
