// Ejercicio 6.
// Construir un validador para un formulario de registro que, dado el HTML que se proporciona, valide cada uno de los campos cuando el usuario ha terminado de introducir datos en cada uno de ellos, es decir, al perder el foco. Si el campo no cumple las restricciones, se mostrará una alerta al usuario, pero se le permitirá seguir introduciendo datos en el resto de campos.
// En el momento en el que el usuario envíe el formulario (evento submit), se validarán todos los campos y el formulario no se enviará si alguno de los campos no es válido. Las restricciones a cumplir son las siguientes:
// ⦁	El nombre, email y comentarios son campos obligatorios.
// ⦁	El campo email debe ser una dirección de email válida.
// ⦁	El texto introducido en el campo de comentarios no debe exceder los 50 caracteres.
// ⦁	El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.

//Lo que hice aca fue tomar todos los datos de los inputs requeridos y almacenarlos en variables para poder usarlos mas adelante

var inpNombre = document.getElementById("registro_nombre");
var inpApellido = document.getElementById("registro_apellido");
var inpEmail = document.getElementById("registro_email");
var inpComentario = document.getElementById("registro_comentarios");

//Este console.log es para asegurarme de que este trayendo los datos correctamente
console.log(inpNombre, inpApellido, inpEmail, inpComentario);

//Aca creé variables que usando el metodo patternMismatch en conjunto con las expresiones regulares del html, devuelven un true si el campo no es valido y un false si fue completado correctamente
let noEsNombreValido = inpNombre.validity.patternMismatch;
let noEsApellidoValido = inpApellido.validity.patternMismatch;
let noEsEmailValido = inpEmail.validity.patternMismatch;
let noEsComentarioValido = inpComentario.validity.patternMismatch;

//Esta funcion se ejecuta al momento del submit, toma las variables anteriores y si alguna es = true le retorna un false y detiene el submit.
function validarSubmit() {
  if (
    noEsNombreValido ||
    noEsApellidoValido ||
    noEsEmailValido ||
    noEsComentarioValido
  ) {
    return false;
  } else {
    return true;
  }
}
