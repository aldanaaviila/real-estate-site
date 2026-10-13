# Propiedades A.B.C - Sitio web de inmobiliaria

Sitio web de una inmobiliaria ficticia hecho para la materia de primer año de la **Tecnicatura en Desarrollo de Software (UADE)**.
Está hecho solo con **HTML, CSS y JavaScript**, sin frameworks.

![Página de inicio](capturas/inicio.jpg)

## Páginas

| Página | Qué tiene |
|---|---|
| `index.html` | Buscador, accesos a alquilar/comprar y propiedades destacadas |
| `propiedades.html` | Listado de propiedades con filtros (ubicación, operación, tipo, dormitorios y baños) |
| `propiedad.html` | Ficha de una propiedad (`propiedad.html?id=1`) con galería de fotos y formulario de consulta |
| `nosotros.html` | Historia de la empresa, visión, misión y valores |
| `contacto.html` | Datos de contacto, mapa y formulario |

## Funcionalidades con JavaScript

- **Datos separados del HTML** (`scripts/datos.js`): todas las propiedades están en un array de objetos. Las tarjetas del inicio, el listado y la ficha de cada propiedad se arman con JavaScript a partir de esos datos, así que para agregar una propiedad alcanza con sumar un objeto al array.
- **Una sola página de detalle** (`scripts/propiedad.js`): `propiedad.html` lee el `id` de la URL y muestra los datos de esa propiedad.
- **Filtros** (`scripts/filtros.js`): filtran el array por ubicación, operación, tipo, dormitorios y baños. El buscador del inicio manda los filtros por la URL (por ejemplo `propiedades.html?operacion=venta&tipo=casa`).
- **Galería** (`scripts/slider.js`): cambia la foto principal al hacer click en una miniatura o en las flechas.
- **Formularios** (`scripts/contacto.js`): validan que estén todos los campos completos y muestran un mensaje.

## Diseño responsive

El sitio se adapta a celulares con media queries.

<img src="capturas/celular.jpg" alt="Vista en celular" width="260">

## Estructura de carpetas

```
├── index.html
├── propiedades.html
├── propiedad.html
├── nosotros.html
├── contacto.html
├── css/
│   └── styles.css
├── scripts/
│   ├── datos.js       lista de propiedades
│   ├── inicio.js      propiedades destacadas del inicio
│   ├── filtros.js     listado y filtros
│   ├── propiedad.js   ficha de cada propiedad
│   ├── slider.js      galería de fotos
│   └── contacto.js    validación de formularios
├── images/
│   ├── fondos/        imágenes de fondo de cada sección
│   ├── iconos/        logo, íconos y redes sociales
│   └── propiedades/   fotos de las propiedades
└── capturas/          capturas para este README
```

## Cómo verlo

Descargar o clonar el repositorio y abrir `index.html` en el navegador.

## Tecnologías

HTML5 · CSS3 (Flexbox, Grid, media queries) · JavaScript · Google Fonts (Oswald y Roboto)

---

Las fotos son de bancos de imágenes gratuitos y los datos de las propiedades son inventados.
