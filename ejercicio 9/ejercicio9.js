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

async function ingresarValoresAsync() {
  try {
    var valor = await cargarValores(document.getElementById("valor").value);
    console.log(valor);
  } catch (error) {
    console.log(error);
    alert(error);
  }

  if (valor) {
    valores.push(valor);
    console.log(valores);
    alert(
      `Se ha ingresado un nuevo valor correctamente. Tus valores ingresados hasta ahora son: ${valores}`
    );
  }
}
