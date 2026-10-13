// creamos la constante para el form (sirve para la página de contacto y la de cada propiedad)
const form = document.querySelector('form');

// Evento de envío del formulario (solo si en la pagina hay un form)
if (form) form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevenimos que el formulario se envíe de manera tradicional

    // creacion de constantes de los valores de los campos del form
    // usamos trim() para que no cuenten los campos que solo tienen espacios
    const nombre = document.getElementById('nombre').value.trim();
    const celular = document.getElementById('celular').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // creamos una condicion para verificar que todos los campos estén completos
    if (nombre && celular && email && mensaje) {
        // en caso de que se cumpla, se le da el mensaje al usuario y se limpia el form
        alert('¡Tu consulta fue enviada! Gracias, te responderemos a la brevedad.');
        form.reset();
    } else {
        // caso contrario, se le da otro mensaje de alerta
        alert('¡Algunos campos están incompletos!');
    }
});
