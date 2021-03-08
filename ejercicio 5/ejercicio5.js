// Ejercicio 5.
// El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
// El array de letras es:

var letras = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
  "T"
];

// Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:
// ⦁	Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.
// ⦁	En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.
// ⦁	Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.
// ⦁	Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.

const corroborarDatos = function(form) {
  //Se almacenan el DNI ingresado como tipo número y la letra ingresada pasada a upperCase (para poder compararla correctamente con los valores de el array letras) en sus respectivas variables.
  let dniIngresado = parseInt(form.dni.value, 10);
  let letraIngresada = form.letra.value.toUpperCase();

  // Comprueba que se ingresen ambos valores, sino lanza un alert.
  if (!dniIngresado || !letraIngresada)
    return alert(
      `Por favor, ingrese su DNI y Letra antes de realizar la corroboración.`
    );

  console.log(`DNI ${dniIngresado}, Letra ingresada ${letraIngresada}`);

  //Comprueba que el DNI sea válido y si devuelve true, se lanza otro alert donde return evita que se siga ejecutando la funcion. Si devuelve false, el else calcula la posicion de la letra y la encuentra dentro del array letras.
  if (dniIngresado < 0 || dniIngresado > 99999999) {
    return alert(`El número ${dniIngresado} no es un DNI válido.`);
  } else {
    let indexLetra = dniIngresado % 23;
    console.log(indexLetra);

    var letraEncontrada = letras[indexLetra];
    console.log(letraEncontrada);

    //Finalmente se compara la letra ingresada con la calculada a traves del dni y se lanza el respectivo alerta.
    if (letraIngresada !== letraEncontrada) {
      alert(`La letra que ha ingresado no es correcta.`);
    } else {
      alert(`El DNI y Letra ingresados son correctos.`);
    }
  }
};
