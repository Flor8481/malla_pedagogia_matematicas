// Mapeo de asignaturas y las que desbloquean
const unlockMap = {
  // I SEMESTRE
  calculo1: ["calculo2"],
  algebra: ["algebra_lineal1", "teoria_numeros"],
  geometria_analitica: ["algebra_lineal1"],
  // II SEMESTRE
  calculo2: ["calculo3", "metodos_numericos", "estadistica1"],
  algebra_lineal1: [],
  programacion: ["metodos_numericos"],
  etica: [],
  formacion_fundamental1: ["formacion_fundamental2"],
  // III SEMESTRE
  calculo3: ["analisis_real"],
  teoria_numeros: ["estructuras_algebraicas1"],
  metodos_numericos: ["uso_tecnologias"],
  estrategias_discursivas1: ["estrategias_discursivas2"],
  formacion_fundamental2: ["formacion_fundamental3"],
  // IV SEMESTRE
  analisis_real: ["didactica_calculo"],
  estructuras_algebraicas1: ["didactica_sistemas_numericos"],
  practica_docente_inicial: ["practica_docente_intermedia", "practica_comunitaria", "fundamentos_filosoficos"],
  taller_adolescente: ["practica_comunitaria", "practica_docente_intermedia"],
  educar_diversidad: ["practica_comunitaria", "practica_docente_intermedia"],
  // V SEMESTRE
  didactica_calculo: ["didactica_geometria"],
  didactica_sistemas_numericos: ["practica_comunitaria", "practica_docente_intermedia"],
  geometria_euclidiana: ["geometria_3d"],
  estadistica1: ["estadistica2", "didactica_estadistica"],
  formacion_fundamental3: [],
  // VI SEMESTRE
  geometria_3d: ["didactica_geometria"],
  didactica_estadistica: ["didactica_probabilidad"],
  practica_comunitaria: ["practica_docente_final"],
  psicologia_social: [],
  fundamentos_filosoficos: [],
  ingles1: ["ingles2"],
  // VII SEMESTRE
  optativo1: [],
  didactica_geometria: ["uso_tecnologias"],
  estadistica2: ["didactica_probabilidad"],
  teoria_planificacion_curricular: ["evaluacion"],
  politicas_publicas: [],
  estrategias_discursivas2: ["taller_investigacion"],
  ingles2: ["ingles3"],
  // VIII SEMESTRE
  uso_tecnologias: ["trabajo_titulo"],
  didactica_probabilidad: ["taller_investigacion", "trabajo_titulo"],
  practica_docente_intermedia: ["historia_epistemologia", "taller_investigacion", "trabajo_titulo", "identidad_profesional", "practica_docente_final"],
  evaluacion: [],
  ingles3: ["ingles4"],
  // IX SEMESTRE
  optativo2: [],
  historia_epistemologia: ["practica_docente_final"],
  taller_investigacion: ["practica_docente_final"],
  trabajo_titulo: ["practica_docente_final"],
  identidad_profesional: ["practica_docente_final"],
  ingles4: [],
  // X SEMESTRE
  practica_docente_final: []
};

document.addEventListener("DOMContentLoaded", () => {
  const subjects = document.querySelectorAll(".subject");

  subjects.forEach(subj => {
    // Solo asignaturas desbloqueadas son clickeables
    if (!subj.classList.contains("locked")) {
      subj.addEventListener("click", () => {
        // Si ya está desbloqueada o clickeada, no hacer nada extra
        if (subj.classList.contains("unlocked")) return;

        subj.classList.add("unlocked");
        subj.style.backgroundColor = "#f48fb1"; // cambio color para mostrar que está activa
        subj.style.color = "#fff";

        // Desbloquear asignaturas que dependen de esta
        const toUnlock = unlockMap[subj.id] || [];
        toUnlock.forEach(id => {
          const element = document.getElementById(id);
          if (element && element.classList.contains("locked")) {
            element.classList.remove("locked");
            element.style.opacity = "1";
            element.style.cursor = "pointer";
          }
        });
      });
    }
  });
});
