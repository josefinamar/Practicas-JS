let arrayEmpresas = [
  {
    nombre: "Sancor",
    saludo: "Hola, Como está?"
  },
  {
    nombre: "Bimbo",
    saludo: "Bienvenido!"
  },
  {
    nombre: "La Serenisima",
    saludo: "Saludos"
  }
];

function correrPrograma() {
  let nombreIngresado = prompt("Ingrese el nombre de su empresa");

  let existeEmpresa = arrayEmpresas.some(
    empresa => empresa.nombre.toUpperCase() === nombreIngresado.toUpperCase()
  );

  if (existeEmpresa) {
    saludo = arrayEmpresas.find(
      empresa => empresa.nombre.toUpperCase() === nombreIngresado.toUpperCase()
    ).saludo;

    alert(saludo);
  } else {
    let confirmarNombre = confirm(
      "Estas seguro que ingresaste el nombre correcto?"
    );
    confirmarNombre ? alert("Hola! Gracias por volver") : correrPrograma();
  }
}
