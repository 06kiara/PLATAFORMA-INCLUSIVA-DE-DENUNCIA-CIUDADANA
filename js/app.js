// Seleccionar los botones de denuncia
const botones = document.querySelectorAll(".btn-denunciar");

// Obtener el espacio del mensaje
const mensaje = document.getElementById("mensaje");

// Escuchar los clics de cada botón
botones.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Obtener la modalidad seleccionada
        const modalidad = boton.dataset.modalidad;

        // Guardar la selección
        localStorage.setItem("modalidadDenuncia", modalidad);

        // Mostrar confirmación
        if (modalidad === "anonima") {

            mensaje.textContent =
                "Ha seleccionado la modalidad de denuncia anónima.";

        } else {

            mensaje.textContent =
                "Ha seleccionado la modalidad de denuncia identificada.";

        }

    });

});