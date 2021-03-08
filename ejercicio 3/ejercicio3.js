// Ejercicio 3.
// Un alumno desea saber ¿cuál será su calificación final en una materia específica?, dicha calificación se compone de los siguientes porcentajes:
// ⦁	55% del promedio de las tres calificaciones parciales.
// ⦁	30% de la calificación del examen final.
// ⦁	15% de la calificación de un trabajo final.

const calcular = function(form) {
  console.log(form);
  let calif1 = parseInt(form.tCP1.value, 10);
  let calif2 = parseInt(form.tCP2.value, 10);
  let calif3 = parseInt(form.tCP3.value, 10);
  let examFinal = parseInt(form.tEF.value, 10);
  let tpFinal = parseInt(form.tTF.value, 10);

  console.log(
    `Calificaciones: ${calif1}, ${calif2}, ${calif3}, ${examFinal}, ${tpFinal}.`
  );

  form.tPro.value = (calif1 + calif2 + calif3) / 3;
  form.tPar.value = (form.tPro.value * 55) / 100;
  form.tPEF.value = (examFinal * 30) / 100;
  form.tPTF.value = (tpFinal * 15) / 100;
  form.tCF.value =
    parseInt(form.tPro.value) +
    parseInt(form.tPar.value) +
    parseInt(form.tPEF.value) +
    parseInt(form.tPTF.value);
};
