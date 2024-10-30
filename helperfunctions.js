// Configuration de base des paillettes
const colour = "#FFFFFF"; // Couleur des étoiles (paillettes)
const sparkles = 100; // Nombre total de paillettes
let x = 400;
let y = 300;
let swide = window.innerWidth;
let shigh = window.innerHeight;
let sleft = 0;
let sdown = 0;
const tiny = [];
const star = [];
const starv = [];
const starx = [];
const stary = [];
const tinyx = [];
const tinyy = [];
const tinyv = [];
// Fonction pour initialiser les paillettes
export function initializeSparkles() {
  if (document.getElementById) {
    for (let i = 0; i < sparkles; i++) {
      let tinyDiv = createDiv(3, 3);
      tinyDiv.style.visibility = "hidden";
      document.body.appendChild(tiny[i] = tinyDiv);
      tinyv[i] = 0;
      let starDiv = createDiv(5, 5);
      starDiv.style.backgroundColor = "transparent";
      starDiv.style.visibility = "hidden";
      let rlef = createDiv(1, 5);
      let rdow = createDiv(5, 1);
      starDiv.appendChild(rlef);
      starDiv.appendChild(rdow);
      rlef.style.top = "2px";
      rlef.style.left = "0px";
      rdow.style.top = "0px";
      rdow.style.left = "2px";
      document.body.appendChild(star[i] = starDiv);
      starv[i] = 0;
    }
    setDimensions();
    sparkle();
  }
}
// Fonction d'animation des paillettes
function sparkle() {
  if (x != window.ox || y != window.oy) {
    window.ox = x;
    window.oy = y;
    for (let c = 0; c < sparkles; c++) {
      if (!starv[c]) {
        star[c].style.left = (starx[c] = x) + "px";
        star[c].style.top = (stary[c] = y) + "px";
        star[c].style.clip = "rect(0px, 5px, 5px, 0px)";
        star[c].style.visibility = "visible";
        starv[c] = 50;
        break;
      }
    }
  }
  for (let c = 0; c < sparkles; c++) {
    if (starv[c]) {
      updateStar(c);
    }
    if (tinyv[c]) {
      updateTiny(c);
    }
  }
  setTimeout(sparkle, 40); // Boucle d'animation
}
// Mise à jour des grandes étoiles
function updateStar(i) {
  if (--starv[i] === 25) {
    star[i].style.clip = "rect(1px, 4px, 4px, 1px)";
  }
  if (starv[i]) {
    stary[i] += 1 + Math.random() * 3; // Mouvement vers le bas
    if (stary[i] < shigh + sdown) {
      star[i].style.top = stary[i] + "px";
      starx[i] += (i % 5 - 2) / 5;
      star[i].style.left = starx[i] + "px";
    } else {
      star[i].style.visibility = "hidden";
      starv[i] = 0;
    }
  } else {
    tinyv[i] = 50;
    tiny[i].style.top = (tinyy[i] = stary[i]) + "px";
    tiny[i].style.left = (tinyx[i] = starx[i]) + "px";
    tiny[i].style.width = "2px";
    tiny[i].style.height = "2px";
    star[i].style.visibility = "hidden";
    tiny[i].style.visibility = "visible";
  }
}
// Mise à jour des petites étoiles
function updateTiny(i) {
  if (--tinyv[i] === 25) {
    tiny[i].style.width = "1px";
    tiny[i].style.height = "1px";
  }
  if (tinyv[i]) {
    tinyy[i] += 1 + Math.random() * 3;
    if (tinyy[i] < shigh + sdown) {
      tiny[i].style.top = tinyy[i] + "px";
      tinyx[i] += (i % 5 - 2) / 5;
      tiny[i].style.left = tinyx[i] + "px";
    } else {
      tiny[i].style.visibility = "hidden";
      tinyv[i] = 0;
    }
  } else {
    tiny[i].style.visibility = "hidden";
  }
}
// Suivi de la souris
document.onmousemove = mouse;
function mouse(e) {
  setScroll();
  y = e ? e.pageY : event.y + sdown;
  x = e ? e.pageX : event.x + sleft;
}
function setScroll() {
  if (typeof self.pageYOffset === "number") {
    sdown = self.pageYOffset;
    sleft = self.pageXOffset;
  } else if (document.body.scrollTop || document.body.scrollLeft) {
    sdown = document.body.scrollTop;
    sleft = document.body.scrollLeft;
  } else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
    sleft = document.documentElement.scrollLeft;
    sdown = document.documentElement.scrollTop;
  } else {
    sdown = 0;
    sleft = 0;
  }
}
window.onresize = setDimensions;
function setDimensions() {
  swide = window.innerWidth;
  shigh = window.innerHeight;
}
function createDiv(height, width) {
  const div = document.createElement("div");
  div.style.position = "absolute";
  div.style.height = height + "px";
  div.style.width = width + "px";
  div.style.overflow = "hidden";
  div.style.backgroundColor = colour;
  return div;
}