// Ejercicio 8.
// Crear un script que permita el ingreso de valores para cargar un array y espere 3 segundos por cada carga, debe utilizar Promise para procesar el resultado: error si no se cargó un valor en el array y un mensaje de ejecución correcta junto con los valores del array en caso contrario.

let valores = [];

function cargarValores(valor) {
  let promise = new Promise(function(resolve, reject) {
    const error = valor === "" || valor === null;
    if (error) {
      setTimeout(function() {
        reject(
          "Algo salió mal... Y si intentas ingresando un valor nuevamente?"
        );
      }, 3000);
    } else {
      setTimeout(function() {
        resolve(valor);
      }, 3000);
    }
  });
  return promise;
}

const ingresarValor = () => {
  let ejecutarPromise = cargarValores(document.getElementById("valor").value);
  ejecutarPromise
    .then(valor => {
      console.log(valor);
      valores.push(valor);
      console.log(valores);
      alert(
        `Se ha ingresado un nuevo valor correctamente. Tus valores ingresados hasta ahora son: ${valores}`
      );
    })
    .catch(error => {
      console.log(error);
      alert(error);
    });
};
