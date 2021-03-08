// Ejercicio 7.
// Crear un script que genere un numero al azar entre 0 y 2, debe utilizar Promise para procesar el resultado: un error si el numero generado es 0 y un mensaje de ejecución correcta en caso contrario.

// Aca, como el proceso era basicamente el mismo que en el ejercicio 1 (que yo incorrectamente intente resolver con promises, mala mia) tomé esa funcion y la retoqué un poco para que resolviera este ejercicio. En este caso se ajusta mejor a la consigna.
const div = document.createElement("div");
document.body.appendChild(div);

const random = () => {
  const valor = Math.floor(Math.random() * 3);
  return valor !== 0
    ? Promise.resolve(valor)
    : Promise.reject("Ups... El dado se cayó de la mesa.");
};

random()
  .then(valor => {
    div.textContent = `El dado cayó en ${valor}`;
  })
  .catch(err => {
    div.textContent = err;
  });
