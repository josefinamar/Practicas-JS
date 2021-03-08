//Ejercicio 2.
// Realizar la lógica para una web de venta de coches: Si el coche a la venta es un Ford Fiesta (Código: 11450 Precio $1.350.344), el descuento es del 5%. Si el coche a la venta es un Ford Focus (Código: 11451 Precio $1.750.502, el descuento es del 10%. El usuario ingresa el articulo o su código y el sistema saca el descuento, el valor total y el código correspondiente por pantalla.

let automoviles = [
  { nombre: "Fiesta", codigo: 11450, precio: 1350344, desc: 5 },
  { nombre: "Ford Focus", codigo: 11451, precio: 1750502, desc: 10 }
];
const respuesta = document.getElementById("respuesta");
const myFunction = automovil => {
  let auto;
  let hayCodigo = automoviles.some(
    auto => auto.codigo === parseInt(automovil, 10)
  );
  let hayModelo = automoviles.some(
    auto => auto.nombre.toUpperCase() === automovil.toUpperCase()
  );
  const precioFinal = (precio, porcentaje) => {
    return (precio / 100) * porcentaje;
  };

  if ((automovil => 0 || automovil < 0) && hayCodigo) {
    console.log("Busqueda: " + parseInt(automovil, 10));

    auto = automoviles.find(auto => auto.codigo === parseInt(automovil, 10));
    respuesta.innerHTML =
      "Se encontro el automovil con código : " +
      auto.codigo +
      ", con un descuento del %" +
      auto.desc +
      " con un precio final de $" +
      precioFinal(auto.precio, auto.desc);
    (".");
  } else if (hayModelo) {
    console.log("Busqueda: " + automovil.toUpperCase());
    auto = automoviles.find(
      auto => auto.nombre.toUpperCase() === automovil.toUpperCase()
    );
    respuesta.innerHTML =
      "Se encontro el automovil con código : " +
      auto.codigo +
      ", con un descuento del %" +
      auto.desc +
      " con un precio final de $" +
      precioFinal(auto.precio, auto.desc);
    (".");
  } else {
    console.log("Busqueda: " + automovil);
    respuesta.innerHTML =
      "No hay autos con ese codigo o modelo. Por favor intente de nuevo";
  }
  console.log(auto);
};
