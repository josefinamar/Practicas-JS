// Ejercicio 1.
// Simular lanzamiento de un dado, si el valor es menor a 3 mostrar mensaje A sino mostrar un mensaje B. El mensaje se debe insertar desde .js al elemento body del DOM.

const div = document.createElement("div");
document.body.appendChild(div);

const dado = () => {
  const valor = Math.ceil(Math.random() * 6);
  return valor <= 3 ? Promise.resolve(valor) : Promise.reject(valor);
};

dado()
  .then(valor => {
    div.textContent = `El dado cayó en ${valor}`;
  })
  .catch(err => {
    div.textContent = "El dado cayó en un numero mayor a 3 :(";
  });
