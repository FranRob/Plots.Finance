

// BUTTON UP//
document.getElementById('button-up').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});


//Blur Bubbles//
const burbuja1 = document.getElementById("blur-bubble-1");
const burbuja2 = document.getElementById("blur-bubble-2");
const burbuja3 = document.getElementById("blur-bubble-3");
anime({
  targets: burbuja1,
  translateY: 75,
  duration: 2500,
  loop: true,
  direction: 'alternate',
  easing: 'easeOutCubic',
});

anime({
  targets: burbuja2,
  translateY: 75,
  duration: 2500,
  loop: true,
  direction: 'alternate',
  easing: 'easeOutCubic',
  delay: 250,
});

anime({
  targets: burbuja3,
  translateY: 75,
  duration: 2500,
  loop: true,
  direction: 'alternate',
  easing: 'easeOutCubic',
  delay: 500,
});










//SCROLL POSITION//

let posicionAnterior = window.pageYOffset || document.body.scrollTop;

function calcularPosicionScroll() {
  return window.pageYOffset || document.body.scrollTop;
}

window.onscroll = function() {
  const posicionActual = calcularPosicionScroll();

  if (posicionActual > posicionAnterior) {
    console.log("Desplazándose hacia abajo");
    console.log(posicionActual);
  } else {
    console.log("Desplazándose hacia arriba");
    console.log(posicionAnterior);
  }

  posicionAnterior = posicionActual;
};



