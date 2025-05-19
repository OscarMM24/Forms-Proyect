document.getElementById("registroEvento").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío automático del formulario
  
    // Variables
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const mensajeError = document.getElementById("mensajeError");
  
    // Expresiones regulares
    const nombreRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    const correoRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const telefonoRegex = /^[0-9]{10}$/;
  
    // Validaciones
    if (!nombreRegex.test(nombre)) {
      mensajeError.textContent = "Por favor, ingresa tu nombre completo con al menos dos palabras.";
      return;
    }
  
    if (!correoRegex.test(correo)) {
      mensajeError.textContent = "El correo no tiene un formato válido.";
      return;
    }
  
    if (!telefonoRegex.test(telefono)) {
      mensajeError.textContent = "El teléfono debe contener exactamente 10 dígitos.";
      return;
    }
  
    if (intereses.length === 0) {
      mensajeError.textContent = "Selecciona al menos un interés.";
      return;
    }
  
    if (!horario) {
      mensajeError.textContent = "Selecciona un horario.";
      return;
    }
  
    mensajeError.textContent = "";
    alert("Registro exitoso. ¡Gracias por registrarte!");
  });
  