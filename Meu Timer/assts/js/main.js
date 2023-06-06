function relogio() {
  
  
  
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString("pt-br", {
      hour12: false,
      timeZone: "UTC",
    });
  }

  const relogio = document.querySelector(".relogio");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");
  let segundos = 0;
  let timer;

  document.addEventListener("click", function (e) {
    const el = e.target; //funçao para pegar objeto que foi selecionado na tela
    
    
    if (el.classList.contains("zerar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      relogio.innerHTML = "00:00:00";
      segundos = 0;
    }
    if (el.classList.contains("pausar")) {
      relogio.classList.add("pausado");
      clearInterval(timer);
    }
    if (el.classList.contains("iniciar")) {
      relogio.classList.remove("pausado");
      clearInterval(timer);
      iniciaRelogio();
    }
  });

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }
  // iniciar.addEventListener("click", function(e){
  //     relogio.classList.remove('pausado');
  //     clearInterval(timer);
  //     iniciaRelogio();
  // });

  // pausar.addEventListener("click", function(e){
  //     relogio.classList.add('pausado');
  //     clearInterval(timer);
  // });
  // zerar.addEventListener("click", function(e){
  //     relogio.classList.remove('pausado');
  //     clearInterval(timer);
  //     relogio.innerHTML = "00:00:00";
  //     segundos = 0;
  // });
}

relogio();