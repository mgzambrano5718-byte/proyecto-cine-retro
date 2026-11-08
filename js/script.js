// carga el html antes del script
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       Boton de promociones
       ========================================== */
    // se busca el botón
    const btnPromo = document.getElementById('btn-promo');
    const mensajePromo = document.getElementById('mensaje-promo');

    if (btnPromo) {
        btnPromo.addEventListener('click', () => {
            // Modificación del DOM: se muestra el mensaje oculto
            mensajePromo.style.display = 'block';
            
            // Accesibilidad: se actualiza el atributo aria para lectores de pantalla
            btnPromo.setAttribute('aria-expanded', 'true');
            
            // se cambia el texto en el boton
            btnPromo.textContent = '¡Descuento Aplicado!';
            btnPromo.disabled = true; // se desactiva el botón para no pulsarlo dos veces
        });
    }

    /* ==========================================
       Validacion del formulario de reservas
       ========================================== */
    // se verifica si estamos en la página correcta
    const formReservas = document.getElementById('form-reservas');

    if (formReservas) {
        formReservas.addEventListener('submit', (evento) => {
            // Prevenimos que la página se recargue (comportamiento por defecto)
            evento.preventDefault();

            // se obtienen los valores de los inputs
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const boletos = parseInt(document.getElementById('boletos').value);

            // se muestran los errores en texto (Cumple norma WCAG)
            const errorNombre = document.getElementById('error-nombre');
            const errorCorreo = document.getElementById('error-correo');
            const errorBoletos = document.getElementById('error-boletos');
            const mensajeExito = document.getElementById('mensaje-exito');

            // se limpian los mensajes anteriores
            errorNombre.textContent = '';
            errorCorreo.textContent = '';
            errorBoletos.textContent = '';
            mensajeExito.style.display = 'none';

            let formularioValido = true;

            // se valida que el nombre no esté vacio
            if (nombre === '') {
                errorNombre.textContent = 'Error: Por favor, ingresa tu nombre completo.';
                formularioValido = false;
            }

            // se valida el correo que incluya un @
            if (correo === '' || !correo.includes('@')) {
                errorCorreo.textContent = 'Error: Ingresa un correo electrónico válido que contenga "@".';
                formularioValido = false;
            }

            // se validan los boletos (puede ser entre 1 y 10)
            if (isNaN(boletos) || boletos < 1 || boletos > 10) {
                errorBoletos.textContent = 'Error: Debes elegir una cantidad de boletos entre 1 y 10.';
                formularioValido = false;
            }

            // si todo esta bien, se muestra el mensaje dee exito y se limpia el formulario
            if (formularioValido) {
                mensajeExito.style.display = 'block';
                mensajeExito.style.color = '#155724';
                mensajeExito.style.fontWeight = 'bold';
                mensajeExito.textContent = `¡Reserva exitosa, ${nombre}! Hemos enviado los detalles a ${correo}.`;
                
                formReservas.reset(); // se vacian los campos
            }
        });
    }

   /* ==========================================
       Efecto visual de los posters
       ========================================== */
    // se usa querySelectorAll para seleccionar todas las imágenes con la clase poster-peli
    const posters = document.querySelectorAll('.poster-peli');
    
    // se usa forEach para aplicarle el efecto a cada una de las imágenes
    posters.forEach(poster => {
        poster.addEventListener('mouseover', () => {
            poster.style.transform = 'scale(1.05)'; // aumenta el tamaño
        });
        poster.addEventListener('mouseout', () => {
            poster.style.transform = 'scale(1)'; // vuelve a la normalidad
        });
    });
});