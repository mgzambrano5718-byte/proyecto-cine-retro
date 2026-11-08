// js/script.js

// Esperamos a que todo el HTML cargue antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. INTERACCIÓN DEL BOTÓN DE PROMOCIONES
       ========================================== */
    // Verificamos si estamos en la página de promociones buscando el botón
    const btnPromo = document.getElementById('btn-promo');
    const mensajePromo = document.getElementById('mensaje-promo');

    if (btnPromo) {
        btnPromo.addEventListener('click', () => {
            // Modificación del DOM: Mostramos el mensaje oculto
            mensajePromo.style.display = 'block';
            
            // Accesibilidad: Actualizamos el atributo aria para lectores de pantalla
            btnPromo.setAttribute('aria-expanded', 'true');
            
            // Cambiamos el texto del botón
            btnPromo.textContent = '¡Descuento Aplicado!';
            btnPromo.disabled = true; // Desactivamos el botón para no pulsarlo dos veces
        });
    }

    /* ==========================================
       2. VALIDACIÓN DEL FORMULARIO DE RESERVAS
       ========================================== */
    // Verificamos si estamos en la página de reservas buscando el formulario
    const formReservas = document.getElementById('form-reservas');

    if (formReservas) {
        formReservas.addEventListener('submit', (evento) => {
            // Prevenimos que la página se recargue (comportamiento por defecto)
            evento.preventDefault();

            // Obtenemos los valores de los inputs
            const nombre = document.getElementById('nombre').value.trim();
            const correo = document.getElementById('correo').value.trim();
            const boletos = parseInt(document.getElementById('boletos').value);

            // Elementos donde mostraremos los errores en texto (Cumple norma WCAG)
            const errorNombre = document.getElementById('error-nombre');
            const errorCorreo = document.getElementById('error-correo');
            const errorBoletos = document.getElementById('error-boletos');
            const mensajeExito = document.getElementById('mensaje-exito');

            // Limpiamos mensajes anteriores
            errorNombre.textContent = '';
            errorCorreo.textContent = '';
            errorBoletos.textContent = '';
            mensajeExito.style.display = 'none';

            let formularioValido = true;

            // Validación del Nombre (No debe estar vacío)
            if (nombre === '') {
                errorNombre.textContent = 'Error: Por favor, ingresa tu nombre completo.';
                formularioValido = false;
            }

            // Validación del Correo (Debe tener un formato básico con '@')
            if (correo === '' || !correo.includes('@')) {
                errorCorreo.textContent = 'Error: Ingresa un correo electrónico válido que contenga "@".';
                formularioValido = false;
            }

            // Validación de la cantidad de boletos (Entre 1 y 10)
            if (isNaN(boletos) || boletos < 1 || boletos > 10) {
                errorBoletos.textContent = 'Error: Debes elegir una cantidad de boletos entre 1 y 10.';
                formularioValido = false;
            }

            // Si todo es correcto, mostramos mensaje de éxito y limpiamos el formulario
            if (formularioValido) {
                mensajeExito.style.display = 'block';
                mensajeExito.style.color = '#155724';
                mensajeExito.style.fontWeight = 'bold';
                mensajeExito.textContent = `¡Reserva exitosa, ${nombre}! Hemos enviado los detalles a ${correo}.`;
                
                formReservas.reset(); // Vaciamos los campos
            }
        });
    }

    /* ==========================================
       3. EFECTO VISUAL EN EL PÓSTER (Opcional, suma puntos)
       ========================================== */
    const poster = document.getElementById('poster-peli');
    if (poster) {
        poster.addEventListener('mouseover', () => {
            poster.style.transform = 'scale(1.05)'; // Aumenta ligeramente el tamaño
        });
        poster.addEventListener('mouseout', () => {
            poster.style.transform = 'scale(1)'; // Vuelve a la normalidad
        });
    }
});