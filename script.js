const unlockMap = {
  calculo1: ["calculo2"],
  algebra: ["algebra_lineal1", "teoria_numeros"],
  geometria_analitica: ["algebra_lineal1"],
  antropologia_cristiana: [],

  calculo2: ["calculo3", "metodos_numericos", "estadistica1"],
  algebra_lineal1: [],
  programacion: ["metodos_numericos"],
  etica: [],
  formacion_fundamental1: ["formacion_fundamental2"],

  calculo3: ["analisis_real"],
  teoria_numeros: ["estructuras_algebraicas1"],
  metodos_numericos: ["uso_tecnologias"],
  estrategias_discursivas1: ["estrategias_discursivas2"],
  formacion_fundamental2: ["formacion_fundamental3"],

  analisis_real: ["didactica_calculo"],
  estructuras_algebraicas1: ["didactica_sistemas_numericos"],
  practica_docente_inicial: ["practica_docente_intermedia", "practica_comunitaria", "fundamentos_filosoficos"],
  taller_adolescente: ["practica_comunitaria", "practica_docente_intermedia"],
  educar_diversidad: ["practica_comunitaria", "practica_docente_intermedia"],

  didactica_calculo: ["didactica_geometria"],
  didactica_sistemas_numericos: ["practica_comunitaria", "practica_docente_intermedia"],
  geometria_euclidiana: ["geometria_3d"],
  estadistica1: ["estadistica2", "didactica_estadistica"],
  formacion_fundamental3: [],

  geometria_3d: ["didactica_geometria"],
  didactica_estadistica: ["didactica_probabilidad"],
  practica_comunitaria: ["practica_docente_final"],
  psicologia_social: [],
  fundamentos_filosoficos: [],
  ingles1: ["ingles2"],

  optativo1: [],
  didactica_geometria: ["uso_tecnologias"],
  estadistica2: ["didactica_probabilidad"],
  teoria_planificacion_curricular: ["evaluacion"],
  politicas_publicas: [],
  estrategias_discursivas2: ["taller_investigacion"],
  ingles2: ["ingles3"],

  uso_tecnologias: ["trabajo_titulo"],
  didactica_probabilidad: ["taller_investigacion", "trabajo_titulo"],
  practica_docente_intermedia: ["historia_epistemologia", "taller_investigacion", "trabajo_titulo", "identidad_profesional", "practica_docente_final"],
  evaluacion: [],
  ingles3: ["ingles4"],

  optativo2: [],
  historia_epistemologia: ["practica_docente_final"],
  taller_investigacion: ["practica_docente_final"],
  trabajo_titulo: ["practica_docente_final"],
  identidad_profesional: ["practica_docente_final"],
  ingles4: [],

  practica_docente_final: []
};

document.addEventListener("DOMContentLoaded", () => {
  const subjects = document.querySelectorAll(".subject");

  subjects.forEach(subj => {
    if (!subj.classList.contains("locked")) {
      subj.addEventListener("click", () => {
        if (subj.classList.contains("unlocked")) return;

        subj.classList.add("unlocked");
        subj.style.backgroundColor = "#f48fb1";
        subj.style.color = "#fff";

        const toUnlock = unlockMap[subj.id] || [];
        toUnlock.forEach(id => {
          const el = document.getElementById(id);
          if (el && el.classList.contains("locked")) {
            el.classList.remove("locked");
            el.style.opacity = "1";
            el.style.cursor = "pointer";
          }
        });
      });
    }
  });
});
