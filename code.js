/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  let nombre = prompt("Ingrese su nombre");
  let anioNacimiento = prompt("Ingrese su año de Nacimiento");
  let ciudadNacimiento = prompt("Ciudad de Nacimiento");
  let interesJavascript = confirm("Le interesa Javascript");
  
  let = 0;
  edad = 2022 - anioNacimiento
  console.log(edad);

  datosPersona['nombre'] = nombre

  datosPersona['edad'] = anioNacimiento

  datosPersona['ciudad'] = ciudadNacimiento

  datosPersona['interesPorJs'] = interesJavascript 
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.querySelector('#nombre')
  nombre.innerText = datosPersona['nombre'];

  let anioNacimiento = document.querySelector('#edad')
  anioNacimiento.innerText = datosPersona['edad'];
  
  let ciudadNacimiento = document.querySelector('#ciudad')
  ciudadNacimiento.innerText = datosPersona['ciudad'];

  let interesJavascript = document.querySelector('#interesPorJs')
  interesJavascript.innerText = datosPersona = ['interesPorJs'] ? 'Si' : 'No'

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */  
  let fila= document.getElementById('fila')

  if(fila.childNodes.length > listado.length - 1) return;

  listado.forEach(element => {
    fila.innerHTML += template(element.imgUrl, element.lenguajes, element.bimestre)
  });
  
  function template (imgUrl, lenguajes, bimestre) {
  return `
  <div class="caja"> <img src="${imgUrl}" alt="${lenguajes}"/>
  <p class="lenguajes">${lenguajes}</p>
  <p class="bimestre">${bimestre}</p></div>`
  };
    
  
} 
  


function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let modoOscuro = document.getElementById('sitio')
  modoOscuro.classList.toggle('dark')
  

}


/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
document.addEventListener('keypress', (event) => {
  if (event.key === 'f') {
    let texto = document.getElementById('sobre-mi')
    texto.classList.remove('oculto')
  }
})
  


