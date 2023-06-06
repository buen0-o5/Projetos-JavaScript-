const data = [
    {
      min: 0,
      max: 18.4,
      classification: "Menor que 18,5",
      info: "Magreza",
      obesity: "0",
    },
    {
      min: 18.5,
      max: 24.9,
      classification: "Entre 18,5 e 24,9",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 25,
      max: 29.9,
      classification: "Entre 25,0 e 29,9",
      info: "Sobrepeso",
      obesity: "I",
    },
    {
      min: 30,
      max: 39.9,
      classification: "Entre 30,0 e 39,9",
      info: "Obesidade",
      obesity: "II",
    },
    {
      min: 40,
      max: 99,
      classification: "Maior que 40,0",
      info: "Obesidade grave",
      obesity: "III",
    },
  ];
  //Seleçao de elementos
  const imcTable = document.querySelector("#imc-table")
  const calcBtn = document.querySelector("#calc-btn");
  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const result = document.querySelector("#resultado");


  function createTable(data) {
    data.forEach((item) => {
      const div = document.createElement("div");
      div.classList.add("table-data");
  
      const classification = document.createElement("p");
      classification.innerText = item.classification;
  
      const info = document.createElement("p");
      info.innerText = item.info;
  
      const obesity = document.createElement("p");
      obesity.innerText = item.obesity;
  
      div.appendChild(classification);
      div.appendChild(info);
      div.appendChild(obesity);
  
      imcTable.appendChild(div);
    });
  }

  createTable(data);

  //Calculando IMC
function calcImc(height, weight){
    const imc = (weight / (height * height)).toFixed(2);
    return imc;
}



  //Validaçao de entrada
  function validDigits(text) {
    return text.replace(/[^0-9,]/g, "");
  }

  //Evento da validaçao da entrada
  [heightInput, weightInput].forEach((el) => {
    el.addEventListener("input", (e) => {
      const updatedValue = validDigits(e.target.value);
  
      e.target.value = updatedValue;
    });
  });




//Evento ouvinte que ao acionar o botao nao permite que o submit seja carregado
//troca virgula por ponto
//verifica se todos os campos entao preenchidos
//chama a funçao calImc passando os paramentros da tela
//criaçao de um forEach que percorre o array Data que faz a verificaçao de peso max e min para cada faixa
//muda a cor do campo conforme peso
// Imprimi o valor na tela
calcBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    const weight = +weightInput.value.replace(",",".");
    const height = +heightInput.value.replace(",",".");

    
    if(!weight || !height) return;

  
   const imc = calcImc(height, weight);
   
    let info;
    data.forEach((item) => {
        if (imc >= item.min && imc <= item.max) {
          info = item.info;
        }
      });
     
     
     switch (info) {
      case "Magreza":
        result.classList.add("low");
        result.innerHTML = `Seu IMC é ${imc}  (${info})`
        break;
        case "Normal":
          result.classList.add("good");
          result.innerHTML = `Seu IMC é ${imc}  (${info})`
          break;
        case "Sobrepeso":
          result.classList.add("low");
          result.innerHTML = `Seu IMC é ${imc}  (${info})`
          break;
        case "Obesidade":
          result.classList.add("medium");
          result.innerHTML = `Seu IMC é ${imc}  (${info})`
          break;
        case "Obesidade grave":
          result.classList.add("high");
          result.innerHTML = `Seu IMC é ${imc} (${info})`
          break;
     }

});

