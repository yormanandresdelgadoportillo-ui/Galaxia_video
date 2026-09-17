const inicio = document.getElementById("inicio");
const mensaje = document.getElementById("mensaje");
const final = document.getElementById("final");

const descubrir = document.getElementById("descubrir");
const continuar = document.getElementById("continuar");
const reiniciar = document.getElementById("reiniciar");

const galaxy = document.querySelector(".galaxy");

/* =========================
   CAMBIAR PANTALLA
========================= */

function mostrarPantalla(pantalla) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    pantalla.classList.add("active");
}

/* =========================
   DESCUBRIR
========================= */

descubrir.addEventListener("click", () => {

    galaxy.style.transform =
        "translate(-50%, -50%) scale(4) rotate(720deg)";

    galaxy.style.opacity = "0";

    setTimeout(() => {

        mostrarPantalla(mensaje);

        galaxy.style.transform =
            "translate(-50%, -50%) scale(1)";

    }, 1200);

});

/* =========================
   CONTINUAR
========================= */

continuar.addEventListener("click", () => {

    mostrarPantalla(final);

});

/* =========================
   REINICIAR
========================= */

reiniciar.addEventListener("click", () => {

    mostrarPantalla(inicio);

    galaxy.style.opacity = "1";

    galaxy.style.transform =
        "translate(-50%, -50%) scale(1) rotate(0deg)";

});