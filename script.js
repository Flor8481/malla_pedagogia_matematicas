const ramos = [
  // 1º Semestre
  { nombre: "Cálculo I", categoria: "funciones", abre: ["Cálculo II"] },
  { nombre: "Álgebra", categoria: "numeros-algebra", abre: ["Álgebra Lineal I", "Teoría de números"] },
  { nombre: "Geometría analítica y vectorial", categoria: "geometria", abre: ["Álgebra Lineal I"] },
  { nombre: "Antropología Cristiana", categoria: "fundamental", abre: [] },

  // 2º Semestre
  { nombre: "Cálculo II", categoria: "funciones", abre: ["Cálculo III", "Métodos numéricos y ecuaciones diferenciales", "Estadística I"] },
  { nombre: "Álgebra Lineal I", categoria: "numeros-algebra", abre: [] },
  { nombre: "Programación", categoria: "pensamiento", abre: ["Métodos numéricos y ecuaciones diferenciales"] },
  { nombre: "Ética cristiana", categoria: "fundamental", abre: [] },
  { nombre: "Formación fundamental I", categoria: "fundamental", abre: ["Formación fundamental II"] },

  // 3º Semestre
  { nombre: "Cálculo III", categoria: "funciones", abre: ["Análisis real"] },
  { nombre: "Teoría de números", categoria: "numeros-algebra", abre: ["Estructuras algebraicas I"] },
  { nombre: "Métodos numéricos y ecuaciones diferenciales", categoria: "funciones", abre: ["Uso de tecnologías para la enseñanza y aprendizaje de la matemática"] },
  { nombre: "Estrategias discursivas para acceder al conocimiento disciplinar", categoria: "fundamental", abre: ["Estrategias discursivas para comunicar y enseñar el conocimiento disciplinar"] },
  { nombre: "Formación fundamental II", categoria: "fundamental", abre: ["Formación fundamental III"] },

  // 4º Semestre
  { nombre: "Análisis real", categoria: "funciones", abre: ["Didáctica del cálculo"] },
  { nombre: "Estructuras algebraicas I", categoria: "numeros-algebra", abre: ["Didáctica de los sistemas numéricos"] },
  { nombre: "Práctica docente inicial", categoria: "practicas", abre: ["Práctica docente intermedia", "Práctica comunitaria", "Fundamentos filosóficos y sociales de la educación"] },
  { nombre: "Taller de aprendizaje y desarrollo adolescente", categoria: "profesional", abre: ["Práctica comunitaria", "Práctica docente intermedia"] },
  { nombre: "Educar en y para la diversidad", categoria: "profesional", abre: ["Práctica comunitaria", "Práctica docente intermedia"] },

  // 5º Semestre
  { nombre: "Didáctica del cálculo", categoria: "funciones", abre: ["Didáctica de la geometría"] },
  { nombre: "Didáctica de los sistemas numéricos", categoria: "numeros-algebra", abre: ["Práctica comunitaria", "Práctica docente intermedia"] },
  { nombre: "Geometría euclidiana plana", categoria: "geometria", abre: ["Geometría 3D y geometría no euclidiana"] },
  { nombre: "Estadística I", categoria: "probabilidad-estadisticas", abre: ["Estadística II", "Didáctica de la estadística"] },
  { nombre: "Formación fundamental III", categoria: "fundamental", abre: [] },

  // 6º Semestre
  { nombre: "Geometría 3D y geometría no euclidiana", categoria: "geometria", abre: ["Didáctica de la geometría"] },
  { nombre: "Didáctica de la estadística", categoria: "probabilidad-estadisticas", abre: ["Didáctica de la probabilidad e inferencia"] },
  { nombre: "Práctica comunitaria", categoria: "practicas", abre: ["Práctica docente final", "Historia y epistemología de la matemática", "Taller de investigación en didáctica de la matemática", "Trabajo de título", "Identidad profesional docente"] },
  { nombre: "Psicología social aplicada en la escuela y su comunidad", categoria: "profesional", abre: [] },
  { nombre: "Fundamentos filosóficos y sociales de la educación", categoria: "profesional", abre: [] },
  { nombre: "Inglés I", categoria: "ingles", abre: ["Inglés II"] },

  // 7º Semestre
  { nombre: "Optativo I", categoria: "optativas", abre: [] },
  { nombre: "Didáctica de la geometría", categoria: "geometria", abre: ["Uso de tecnologías para la enseñanza y aprendizaje de la matemática"] },
  { nombre: "Estadística II", categoria: "probabilidad-estadisticas", abre: ["Didáctica de la probabilidad e inferencia"] },
  { nombre: "Teoría y planificación curricular", categoria: "profesional", abre: ["Evaluación en y para el aprendizaje"] },
  { nombre: "Políticas públicas educativas y gestión escolar", categoria: "profesional", abre: [] },
  { nombre: "Estrategias discursivas para comunicar y enseñar el conocimiento disciplinar", categoria: "fundamental", abre: ["Taller de investigación en didáctica de la matemática"] },
  { nombre: "Inglés II", categoria: "ingles", abre: ["Inglés III"] },

  // 8º Semestre
  { nombre: "Uso de tecnologías para la enseñanza y aprendizaje de la matemática", categoria: "pensamiento", abre: ["Trabajo de título"] },
  { nombre: "Didáctica de la probabilidad e inferencia", categoria: "probabilidad-estadisticas", abre: ["Taller de investigación en didáctica de la matemática", "Trabajo de título"] },
  { nombre: "Práctica docente intermedia", categoria: "practicas", abre: ["Historia y epistemología de la matemática", "Taller de investigación en didáctica de la matemática", "Trabajo de título", "Identidad profesional docente", "Práctica docente final"] },
  { nombre: "Evaluación en y para el aprendizaje", categoria: "profesional", abre: [] },
  { nombre: "Inglés III", categoria: "ingles", abre: ["Inglés IV"] },

  // 9º Semestre
  { nombre: "Optativo II", categoria: "optativas", abre: [] },
  { nombre: "Historia y epistemología de la matemática", categoria: "epistemo", abre: ["Práctica docente final"] },
  { nombre: "Taller de investigación en didáctica de la matemática", categoria: "epistemo", abre: ["Práctica docente final"] },
  { nombre: "Trabajo de título", categoria: "epistemo", abre: ["Práctica docente final"] },
  { nombre: "Identidad profesional docente", categoria: "profesional", abre: ["Práctica docente final"] },
  { nombre: "Inglés IV", categoria: "ingles", abre: [] },

  // 10º Semestre
  { nombre: "Práctica docente final", categoria: "practicas", abre: [] }
];

const contenedor = document.getElementById("malla");
const ramosMap = {};

ramos.forEach(ramo => {
  const div = document.createElement("div");
  div.textContent = ramo.nombre;
  div.className = `ramo ${ramo.categoria} bloqueado`;
  div.addEventListener("click", () => aprobarRamo(ramo.nombre));
  contenedor.appendChild(div);
  ramosMap[ramo.nombre] = div;
});

// Inicial desbloqueados (semestre 1)
["Cálculo I", "Álgebra", "Geometría analítica y vectorial", "Antropología Cristiana"].forEach(nombre => {
  ramosMap[nombre].classList.remove("bloqueado");
});

function aprobarRamo(nombre) {
  const div = ramosMap[nombre];
  div.classList.add("aprobado");
  div.classList.add("bloqueado");
  div.removeEventListener("click", () => aprobarRamo(nombre));

  const ramo = ramos.find(r => r.nombre === nombre);
  if (ramo && ramo.abre) {
    ramo.abre.forEach(nuevo => {
      if (ramosMap[nuevo]) {
        ramosMap[nuevo].classList.remove("bloqueado");
      }
    });
  }
}
