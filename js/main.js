//--------------------------TRANSICION IMAGENES -------------------------------------

const principal = document.querySelector ("#principal")
const fotos = document.querySelectorAll (".foto")
const parrafo = document.querySelector ("#parrafo1")

for (let foto of fotos){ 
    foto.addEventListener("click", changefotos)
    foto.addEventListener("mouseover", (evt)=> {
        evt.target.style.width = "180px"

    })
    foto.addEventListener("mouseout", (evt)=> {
        evt.target.style.width = "130px"
        
    })
}

function changefotos(evt){
   const nuevaFuente = evt.target.src;
   principal.setAttribute("src", nuevaFuente);
    
   const nuevoAlt = evt.target.alt;
    principal.setAttribute("alt", nuevoAlt)
    
    parrafo.textContent = nuevoAlt;
}

//--------------------------BOTONES----------------------------

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

let indiceImagenActual = 0;

btnAnterior.addEventListener("click", () => cambiarImagen(-1));
btnSiguiente.addEventListener("click", () => cambiarImagen(1));

function cambiarImagen(direccion) {
    indiceImagenActual += direccion;
    
    if (indiceImagenActual < 0) {
        indiceImagenActual = fotos.length - 1;
    } else if (indiceImagenActual >= fotos.length) {
        indiceImagenActual = 0;
    }

    const nuevaFuente = fotos[indiceImagenActual].src;
    principal.setAttribute("src", nuevaFuente);
    const nuevoAlt = fotos[indiceImagenActual].alt;
    principal.setAttribute("alt", nuevoAlt);
    parrafo.textContent = nuevoAlt;
}