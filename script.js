const imagenes = document.querySelectorAll("img");
const urlImagenes = [];
const rutas = document.getElementsByClassName("rutasImagenes");

imagenes.forEach((_, index) => {
  const url = prompt(`Ingresa la url para la imagen ${index + 1}`);
  urlImagenes.push(url);
  
});

console.log(urlImagenes);

urlImagenes.forEach((url, index) => {
  const nodoImagen = document.querySelector(`#imagen-${index + 1}`);  
  nodoImagen.src = url alt= "texto";

  rutas[index].setAttribute("href", url);
  rutas[index].setAttribute("target", "_blank");
 
});



// La mejora en el código es el for each.
//Nodo hijo: La tarjeta es la que podríamos crear desde el js,
//es la que se repite, ahí podríamos usar las plantillas.
//Nodo padre: el padre seria el .contenedor

/*De esta manera se lograría lo solicitado.

const clasePadre = document.querySelector(".contenedor");

for (let index = 0; index < 3; index++) {
  const url = prompt(`Ingresa la url para la imagen ${index + 1}`);

  const template = `
  <div class="tarjeta">
    <a class="rutas-img" href="${url}" target="_blank">
      <img class="imagen" alt="imagen-${index + 1}" id="imagen-${index + 1}" src="${url}"/>
    </a>
  </div>`

  clasePadre.innerHTML += template;
}
*/























// let nuevoP=document.createElement("p");

// nuevoP.innerText="Hola!";

// document.body.appendChild(nuevoP)