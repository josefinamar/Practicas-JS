let arrayEmpresas = [
  {
    id: 1,
    nombre: "Empresa Uno",
    descuentoAcumulado: 0
  },
  {
    id: 2,
    nombre: "Otra Empresa",
    descuentoAcumulado: 0
  },
  {
    id: 3,
    nombre: "Otra Empresa Mas",
    descuentoAcumulado: 15
  }
];

const tortasGratis = tortas => {
  let tortasG;
  if (tortas < 10) {
    tortasG = 0;
  } else if (tortas >= 10 && tortas < 25) {
    tortasG = 1;
  } else {
    let cantidad = Math.floor((tortas - 10) / 15 + 1);
    tortasG = cantidad;
  }
  return tortasG;
};

const descuentoProximo = tortas => {
  let desc;
  if (tortas < 100) {
    desc = 0;
    console.log("Descuento proximo: Ninguno");
  } else if (tortas >= 100 && tortas < 500) {
    desc = 10;
    console.log(`Descuento proximo: ${desc}%`);
  } else {
    desc = 15;
    console.log(`Descuento proximo: ${desc}%`);
  }
  return desc;
};

//Le asigne a las tortas un precio de $10 para hacerlo mas sencillo, aunque podria hacerse dinamico tambien y que el precio sea modificable.

const generarPedido = (idEmpresa, cantTortas) => {
  // Busco en el array la empresa correcta segun el id ingresado y guardo la empresa encontrada en su propia variable
  let empresa = arrayEmpresas.find(emp => emp.id === idEmpresa);
  console.log(empresa);

  //De esa empresa guardo el descuento acumulado por pedidos anteriores que tiene
  let descuentoAAplicar = empresa.descuentoAcumulado;
  console.log(`Descuento a aplicar en esta compra: ${descuentoAAplicar}%`);

  //Calculo el precio total del pedido y el precio final con el descuento acumulado aplicado
  let precioTotal = cantTortas * 10;
  console.log(`Precio total: $${precioTotal}`);

  let precioFinal = precioTotal - (precioTotal / 100) * descuentoAAplicar;
  console.log(`Precio final con descuentos aplicados: $${precioFinal}`);

  //Llamo a la funcion que calcula el descuento por cant de tortas pedidas y lo guardo tambien. Despues reemplazo el valor del descuento anterior buscando a la empresa por su index en el array de empresas, por el descuento que calculé ahora para la proxima compra.
  descuentoProx = descuentoProximo(cantTortas);

  console.log(
    `Descuento acumulado para la siguiente compra: ${descuentoProx}%`
  );

  arrayEmpresas[
    arrayEmpresas.findIndex(emp => emp.id === idEmpresa)
  ].descuentoAcumulado = descuentoProx;
  console.log(empresa);

  //Finalmente calculo la cantidad de tortas de regalo que vienen con este pedido.
  tortasGr = tortasGratis(cantTortas);
  console.log(`Con su compra tiene ${tortasGr} tortas extra, gratis.`);
};

//ejemplo de pedidos ingresando id de empresa y cantidad de tortas pedidas.
generarPedido(2, 150);
generarPedido(3, 700);
