// Ejercicio 4.
// Supongamos que se desea invertir una cantidad X de pesos en un sistema de ahorro que otorga el 33.5% Anual de interés efectivo, realice un programa que informe ¿cuál es el interés en pesos que se va a ganar por mes? y ¿cuál es el total que debe recibirse por 3 meses?

const calcularIntereses = function(form) {
  let interesAnual = (parseInt(form.monto.value, 10) * 33.5) / 100;

  form.iMensual.value = "$" + Math.trunc(interesAnual / 12);
  form.iTrimestral.value = "$" + Math.trunc(interesAnual / 4);
};
