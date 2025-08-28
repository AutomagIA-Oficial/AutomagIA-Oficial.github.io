// Este código se ejecuta cuando todo el contenido de la página se ha cargado.
document.addEventListener('DOMContentLoaded', function() {

    // 1. LEER LA URL
    // Creamos un objeto para analizar la URL de la página actual.
    const urlParams = new URLSearchParams(window.location.search);
    
    // Buscamos un parámetro llamado 'servicio' en la URL.
    const servicio = urlParams.get('servicio');

    // 2. COMPROBAR SI EL PARÁMETRO EXISTE
    // Si encontramos el parámetro 'servicio' (es decir, no es nulo)...
    if (servicio) {
        
        // 3. PREPARAR EL MENSAJE
        // Reemplazamos los guiones por espacios y ponemos la primera letra en mayúscula.
        // 'agentes-voz' se convierte en 'Agentes voz'.
        let nombreServicio = servicio.replace(/-/g, ' ');
        nombreServicio = nombreServicio.charAt(0).toUpperCase() + nombreServicio.slice(1);

        // Creamos el mensaje personalizado.
        const mensaje = `Hola, me gustaría recibir más información sobre el servicio de ${nombreServicio}.`;

        // 4. ACTUALIZAR EL FORMULARIO
        // Buscamos el cuadro de texto del mensaje en el HTML por su 'id'.
        const campoMensaje = document.getElementById('message');

        // Si encontramos el campo, escribimos nuestro mensaje dentro de él.
        if (campoMensaje) {
            campoMensaje.value = mensaje;
        }
    }

});

// --- LÓGICA PARA EL HEADER INTERACTIVO AL HACER SCROLL ---

// 1. Seleccionamos el header en el HTML.
const header = document.querySelector('header');

// 2. Creamos una función que se ejecutará cada vez que el usuario haga scroll.
function handleScroll() {
    // Si el usuario ha bajado más de 50 píxeles desde la parte superior...
    if (window.scrollY > 50) {
        // ...añadimos la clase 'scrolled' al header.
        header.classList.add('scrolled');
    } else {
        // ...si no, la quitamos.
        header.classList.remove('scrolled');
    }
}

// 3. Le decimos al navegador que "escuche" el evento de scroll y ejecute nuestra función.
window.addEventListener('scroll', handleScroll);

// --- LÓGICA PARA LA NAVEGACIÓN ACTIVA ---

// 1. Seleccionamos todos los enlaces de la navegación principal.
const navLinks = document.querySelectorAll('header nav a');

// 2. Obtenemos la ruta de la página actual (ej: "/servicios.html").
const currentPath = window.location.pathname;

// 3. Recorremos cada uno de los enlaces del menú.
navLinks.forEach(link => {
    // Obtenemos la ruta a la que apunta el enlace.
    const linkPath = new URL(link.href).pathname;

    // 4. Comparamos si la ruta del enlace coincide con la de la página actual.
    if (currentPath === linkPath) {
        // Si coinciden, le añadimos la clase 'active'.
        link.classList.add('active');
    }
});