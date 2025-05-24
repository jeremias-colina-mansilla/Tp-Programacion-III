const formulario = $('formulario');
const mensaje = $('mensaje');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = formulario["nombre"].value.trim();
  const apellido = formulario["apellido"].value.trim();
  const edad = +formulario["edad"].value.trim();
  const altura = parseFloat(formulario["altura"].value.trim());
  const correo = formulario["correo"].value.trim();

  let mensajes = [];
  let esValido = true;

  if (!nombre || nombre.length > 50) {
    mensajes.push("❌ El nombre no puede estar vacío y debe tener máximo 50 caracteres.");
    esValido = false;
  }

  if (!apellido || apellido.length > 50) {
    mensajes.push("❌ El apellido no puede estar vacío y debe tener máximo 50 caracteres.");
    esValido = false;
  }

  if (isNaN(edad) || edad < 0) {
    mensajes.push("❌ La edad no puede ser negativa.");
    esValido = false;
  } else if (edad < 18) {
    mensajes.push("❌ La persona debe ser mayor de edad (18+).");
    esValido = false;
  }

  if (isNaN(altura) || altura < 0 || altura > 230) {
    mensajes.push("❌ La altura debe estar entre 0 y 230 cm.");
    esValido = false;
  }

  if (!correo || !correo.includes('@')) {
    mensajes.push("❌ El correo debe contener el carácter '@' y no puede estar vacío.");
    esValido = false;
  }

  // Mensaje extra que tenías
  if (edad < 18 && !correo.includes("@")) {
    mensajes = ['Recuerde ingresar una edad mayor o igual a 18, el correo debe incluir una @'];
    esValido = false;
  } else if (edad < 18) {
    mensajes = ['Recuerde ingresar una edad mayor o igual a 18'];
    esValido = false;
  }

  if (esValido) {
    mensaje.textContent = "✅ ¡Formulario enviado correctamente!";
    mensaje.style.color = "green";
  } else {
    mensaje.textContent = mensajes.join('\n');
    mensaje.style.color = "red";
  }
});

function $(elemento){
  return document.getElementById(elemento);
}
