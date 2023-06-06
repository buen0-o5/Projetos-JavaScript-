//Obtendo referencias
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertbutton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

//funçao para conveter unidades
function convert() {
  //Obter os valores das unidades de entrada e saida
  const fromValue = fromElement.value;
  const toValue = toElement.value;

  //verificar se as unidades de entrada e saida sao iguais
  if (fromValue === toValue) {
    outputElement.value = inputElement.value;
    messageElement.textContent = "";
    return;
  }

  //converter o valor de entrada para metros
  let meters;
  switch (fromValue) {
    case "m":
      meters = inputElement.value;
      break;
    case "km":
      meters = inputElement.value *  1000;
      break;
    case "cm":
      meters = inputElement.value / 100;
      break;
    case "mm":
      meters = inputElement.value / 1000;
      break;
  }

  //converter os metros para a unidade de saida
  let result;
  switch(toValue){
    case "m":
        result  = meters
        break;
      case "km":
        result  = meters / 1000;
        break;
      case "cm":
        result  = meters * 100;
        break;
      case "mm":
        result  = meters * 1000;
        break;
  }

  //Exibir o resultado na caixa de saida
  outputElement.value = result.toFixed(2);

  //Exivir a mensagem de conversao 
  const fromLabel = fromElement.options[fromElement.selectedIndex].text;
  const toLabel = toElement.options[toElement.selectedIndex].text;
  const mesaage = `${inputElement.value} ${fromLabel} equivale a ${result.toFixed(2)}
  ${toLabel}`;
  messageElement.textContent = mesaage; 
}

//Adicionado um ouvinte de eventos ao botao de conversao
convertbutton.addEventListener("click", convert);
