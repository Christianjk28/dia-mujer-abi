// Partículas
particlesJS("particles-js", {
  particles: {
    number: { value: 60 },
    color: { value: "#a855f7" },
    shape: { type: "circle" },
    opacity: { value: 0.4, random: true },
    size: { value: 3, random: true },
    move: { enable: true, speed: 1 }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "repulse" }
    }
  },
  retina_detect: true
});


// BOTÓN MENSAJE + SCROLL AUTOMÁTICO

const btn = document.getElementById("btnMensaje");
const mensaje = document.getElementById("mensajeOculto");
const gallery = document.querySelector(".gallery");
const musica = document.getElementById("musica");

btn.addEventListener("click", () => {

  // mostrar mensaje
  mensaje.classList.add("mostrar");
    // reproducir música
  musica.play();

  // bajar automáticamente a la galería
  setTimeout(() => {
    gallery.scrollIntoView({
      behavior: "smooth"
    });
  }, 10000); // espera 2.5 segundos

});


// ANIMACIÓN APARICIÓN FOTOS

const fotos = document.querySelectorAll(".foto");

function revealFotos(){

  const windowHeight = window.innerHeight;

  fotos.forEach(foto => {

    const top = foto.getBoundingClientRect().top;

    if(top < windowHeight - 100){
      foto.classList.add("visible");
    }

  });

}

window.addEventListener("scroll", revealFotos);
revealFotos();