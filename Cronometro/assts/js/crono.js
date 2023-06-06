const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");
const div = document.querySelector(".finalize");

const pomodoro = document.querySelector(".pomodoro");
const intervaloCurto = document.querySelector(".Intervalo-curto");
const intervaloGrande = document.querySelector(".Intervalo-grande");
let countdownInterval;
let timer;
let valor;

function ativaMetodos() {
  inicializando();
}
function inicializando() {
  iniciar.disabled = true;
  document.addEventListener("click", function (e) {
    const el = e.target;

    if (el.classList.contains("pomodoro")) {
      clearInterval(countdownInterval);
      clearInterval(timer);
      relogio.textContent = "00:00";
      startTimer(25 * 60);
    }
    if (el.classList.contains("Intervalo-curto")) {
      clearInterval(countdownInterval);
      clearInterval(timer);
      relogio.textContent = "00:00";
      startTimer(5 * 60);
    }
    if (el.classList.contains("Intervalo-grande")) {
      clearInterval(countdownInterval);
      clearInterval(timer);
      relogio.textContent = "00:00";
      startTimer(10 * 60);
    }
  });
}
function incrementa(valor, incremento) {
  let [minutos, segundos] = valor.split(":").map(Number);
  let valorAtualizado = minutos + incremento;
  clearInterval(countdownInterval);
  relogio.textContent = "00:00";
  console.log(valorAtualizado);
  let conta = setInterval(() => {
    if (segundos > 0) {
      segundos--;
    } else if (valorAtualizado > 0) {
      valorAtualizado--;
      segundos = 59;
    } else {
      clearInterval(conta);
      relogio.textContent = "00:00";
      return;
    }
    valor = [valorAtualizado, segundos]
      .map((n) => n.toString().padStart(2, "0"))
      .join(":");
    relogio.innerHTML = valor;
  }, 1000);
}
function startTimer(duration) {
  let timer = duration,
    minutes,
    seconds;
  countdownInterval = setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    relogio.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    valor = `${minutes}:${seconds}`;
    if (--timer < 0) {
      clearInterval(countdownInterval);
      console.log(countdownInterval);
      relogio.textContent = "00:00";
    }
  }, 1000);
}

zerar.addEventListener("click", function (e) {
  clearInterval(countdownInterval);
  clearInterval(timer);
  relogio.innerHTML = "00:00";
});

iniciar.addEventListener("click", function (e) {
  iniciar.disabled = true;
  if(relogio.textContent !== "00:00") decrementaRelogio();
});

function decrementaRelogio() {
  timer = setInterval(function () {
    let [minutos, segundos] = valor.split(":").map(Number); //transformando string em array
    console.log(minutos);
    console.log(segundos);
    if (segundos > 0) {
      segundos--;
    } else if (minutos > 0) {
      minutos--;
      segundos = 59;
    } else {
      clearInterval(timer);
      relogio.textContent = "00:00";
      return;
    }
    valor = [minutos, segundos]
      .map((n) => n.toString().padStart(2, "0"))
      .join(":");
    relogio.innerHTML = valor;
  }, 1000);
}

pausar.addEventListener("click", function (e) {
  iniciar.disabled = false;
  clearInterval(countdownInterval);
  clearInterval(timer);
});

ativaMetodos();
