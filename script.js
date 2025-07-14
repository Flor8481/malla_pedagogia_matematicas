// Datos con nombre, categoría, semestre y a quiénes desbloquea
const ramos = [
  // I semestre
  {nombre: "Cálculo I", categoria: "FUNCIONES", semestre: 1, abre: ["Cálculo II"]},
  {nombre: "Álgebra", categoria: "NÚMEROS Y ALGEBRA", semestre: 1, abre: ["Álgebra Lineal I", "Teoría de números"]},
  {nombre: "Geometría analítica y vectorial", categoria: "GEOMETRÍA", semestre: 1, abre: ["Álgebra Lineal I"]},
  {nombre: "Antropología Cristiana", categoria: "FORMACIÓN FUNDAMENTAL", semestre: 1, abre: []},

  // II semestre
  {nombre: "Cálculo II", categoria: "FUNCIONES", semestre: 2, abre: ["Cálculo III", "Métodos numéricos y ecuaciones diferenciales", "Estadística I"]},
  {nombre: "Álgebra Lineal I", categoria: "NÚMEROS Y ALGEBRA", semestre: 2, abre: []},
  {nombre: "Programación", categoria: "PENSAMIENTO COMPUTACIONAL Y HABILIDADES DIGITALES", semestre: 2, abre: ["Métodos numéricos y ecuaciones diferenciales"]},
  {nombre: "Ética cristiana", categoria: "FORMACIÓN FUNDAMENTAL", semestre: 2, abre: []},
  {nombre: "Formación fundamental I", categoria: "FORMACIÓN FUNDAMENTAL", semestre: 2, abre: ["Formación fundamental II"]},

  // III semestre
  {nombre: "Cálculo III", categoria: "FUNCIONES", semestre: 3, abre: ["Análisis real"]},
  {nombre: "Teoría de números", categoria: "NÚMEROS Y ALGEBRA", semestre: 3, abre: ["Estructuras algebraicas I"]},
  {nombre: "Métodos numéricos y ecuaciones diferenciales", categoria: "FUNCIONES", semestre: 3, abre: ["Uso de tecnologías para la enseñanza y aprendizaje de la matemática"]},
  {nombre: "Estrategias discursivas para acceder al conocimiento disciplinar", categoria: "FORMACIÓN FUNDAMENTAL", semestre: 3, abre: ["Estrategias discursivas para comunicar y enseñar el conocimiento disciplinar"]},
  {nombre: "Formación fundamental II", categoria: "FORMACIÓN FUNDAMENTAL", semestre: 3, abre: ["Formación fundamental III"]},

  // IV semestre
  {nombre: "Análisis real", categoria: "FUNCIONES", semestre: 4, abre: ["Didáctica del cálculo"]},
  {nombre: "Estructuras algebraicas I", categoria: "NÚMEROS Y ALGEBRA", semestre: 4, abre: ["Didáctica de los sistemas numéricos"]},
  {nombre: "Práctica docente inicial", categoria: "PRÁCTICAS", semestre: 4, abre: ["Práctica docente intermedia", "Práctica comunitaria", "Fundamentos filosóficos y sociales de la educación"]},
  {nombre: "Taller de aprendizaje y desarrollo adolescente", categoria: "FORMACIÓN PROFESIONAL", semestre: 4, abre: ["Práctica comunitaria", "Práctica docente intermedia"]},
  {nombre: "Educar en y para la diversidad", categoria: "FORMACIÓN PROFESIONAL", semestre: 4, abre: ["Práctica comunitaria", "Práctica docente intermedia"]},

  // V semestre
  {nombre: "Didáctica del cálculo", categoria: "FUNCIONES", semestre: 5, abre: ["Didáctica de la geometría"]},
  {nombre: "Didáctica de los sistemas numéricos", categoria: "NÚMEROS Y ALGEBRA", semestre: 5, abre: ["Práctica comunitaria", "Práctica docente intermedia"]},
  {nombre: "Geometría euclidiana plana", categoria: "GEOMETRÍA", semestre: 5, abre: ["Geometría 3D y geometría no euclidiana"]},
  {nombre: "Estadística I", categoria: "PROBABILIDAD Y ESTÁDISTICAS", semestre: 5, abre: ["Estadística II", "Didáctica de la estadística"]},
  {nombre: "Formación fundamental III", categoria: "FORMACIÓN FUNDAMENTAL", semestre: 5, abre: []},

  // VI semestre
  {nombre: "Geometría 3D y geometría no euclidiana", categoria: "GEOMETRÍA", semestre: 6, abre: ["Didáctica de la geometría"]},
  {nombre: "Didáctica de la estadística", categoria: "PROBABILIDAD Y ESTÁDISTICAS", semestre: 6, abre: ["Didáctica de la probabilidad e inferencia"]},
  {nombre: "Práctica comunitaria", categoria: "PRÁCTICAS", semestre: 6, abre: ["Práctica docente final"]},
  {nombre: "Psicología social aplicada en la escuela y su comunidad", categoria: "FORMACIÓN PROFESIONAL", semestre: 6, abre: []},
  {nombre: "Fundamentos filosóficos y sociales de la educación", categoria: "FORMACIÓN PROFESIONAL", semestre: 6, abre: []},
  {nombre: "Inglés I", categoria: "PROGRAMA DE INGLÉS", semestre: 6, abre: ["Inglés II"]},

  // VII semestre
  {nombre: "Optativo I", categoria: "LÍNEA DE ASIGNATURAS OPTATIVAS", semestre: 7, abre: []},
  {nombre: "Didáctica de la geometría", categoria: "GEOMETRÍA", semestre: 7, abre: ["Uso de tecnologías para la enseñanza y aprendizaje de la matemática"]},
  {nombre: "Estadística II", categoria: "PROBABILIDAD Y ESTÁDISTICAS", semestre: 7, abre: ["Didáctica de la probabilidad e inferencia"]},
  {nombre: "Teoría y planificación curricular", categoria: "FORMACIÓN PROFESIONAL", semestre: 7, abre: ["Evaluación en y para el aprendizaje"]},
  {nombre: "Políticas públicas educativas y gestión escolar", categoria: "FORMACIÓN PROFESIONAL", semestre: 7, abre: []},
  {nombre: "Estrategias discursivas para comunicar y enseñar el conocimiento disciplinar", categoria: "FORMACIÓN FUNDAMENTAL", semestre: 7, abre: ["Taller de investigación en didáctica de la matemática"]},
  {nombre: "Inglés II", categoria: "PROGRAMA DE INGLÉS", semestre: 7, abre: ["Inglés III"]},

  // VIII semestre
  {nombre: "Uso de tecnologías para la enseñanza y aprendizaje de la matemática", categoria: "PENSAMIENTO COMPUTACIONAL Y HABILIDADES DIGITALES", semestre: 8, abre: ["Trabajo de título"]},
  {nombre: "Didáctica de la probabilidad e inferencia", categoria: "PROBABILIDAD Y ESTÁDISTICAS", semestre: 8, abre: ["Taller de investigación en didáctica de la matemática", "Trabajo de título"]},
  {nombre: "Práctica docente intermedia", categoria: "PRÁCTICAS", semestre: 8, abre: ["Historia y epistemología de la matemática", "Taller de investigación en didáctica de la matemática", "Trabajo de título", "Identidad profesional docente", "Práctica docente final"]},
  {nombre: "Evaluación en y para el aprendizaje", categoria: "FORMACIÓN PROFESIONAL", semestre: 8, abre: []},
  {nombre: "Inglés III", categoria: "PROGRAMA DE INGLÉS", semestre: 8, abre: ["Inglés IV"]},

  // IX semestre
  {nombre: "Optativo II", categoria: "LÍNEA DE ASIGNATURAS OPTATIVAS", semestre: 9, abre: []},
  {nombre: "Historia y epistemología de la matemática", categoria: "LÍNEA DE EPISTEMOLOGÍA E INVESTIGACIÓN", semestre: 9, abre: ["Práctica docente final"]},
  {nombre: "Taller de investigación en didáctica de la matemática", categoria: "LÍNEA DE EPISTEMOLOGÍA E INVESTIGACIÓN", semestre: 9, abre: ["Práctica docente final"]},
  {nombre: "Trabajo de título", categoria: "LÍNEA DE EPISTEMOLOGÍA E INVESTIGACIÓN", semestre: 9, abre: ["Práctica docente final"]},
  {nombre: "Identidad profesional docente", categoria: "FORMACIÓN PROFESIONAL", semestre: 9, abre: ["Práctica docente final"]},
  {nombre: "Inglés IV", categoria: "PROGRAMA DE INGLÉS", semestre: 9, abre: []},

  // X semestre
  {nombre: "Práctica docente final", categoria: "PRÁCTICAS", semestre: 10, abre: []},
];

// Estado inicial
let estado = {};
let desbloqueados = new Set();

// Iniciar estado y desbloquear primer semestre
ramos.forEach(ramo => {
  estado[ramo.nombre] = false;
  if (ramo.semestre === 1) desbloqueados.add(ramo.nombre);
});

// Crear la malla
function crearMalla() {
  const cont = document.getElementById("malla-container");
  cont.innerHTML = "";

  const semestresMap = {};
  ramos.forEach(r => {
    if (!semestresMap[r.semestre]) semestresMap[r.semestre] = [];
    semestresMap[r.semestre].push(r);
  });

  const semestres = Object.keys(semestresMap).sort((a, b) => a - b);

  semestres.forEach(sem => {
    const col = document.createElement("div");
    col.className = "semestre";
    col.innerHTML = `<h2>${sem}° Semestre</h2>`;
    semestresMap[sem].forEach(ramo => {
      const div = document.createElement("div");
      div.className = `ramo bloqueado ${ramo.categoria.replace(/ /g, "_")}`;
      div.textContent = ramo.nombre;

      if (desbloqueados.has(ramo.nombre)) {
        div.classList.remove("bloqueado");
        div.classList.add("desbloqueado");
      }

      if (estado[ramo.nombre]) {
        div.classList.add("aprobado");
        div.classList.remove("desbloqueado");
      }

      div.addEventListener("click", () => aprobarRamo(ramo));
      col.appendChild(div);
    });

    cont.appendChild(col);
  });
}

// Aprobar ramo
function aprobarRamo(ramo) {
  if (!desbloqueados.has(ramo.nombre)) return;
  estado[ramo.nombre] = true;
  desbloqueados.delete(ramo.nombre);
  ramo.abre.forEach(nombre => desbloqueados.add(nombre));
  crearMalla();
}

// Inicial
crearMalla();

