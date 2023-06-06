const form = document.querySelector("form");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#assunto");
const mensagem = document.querySelector("#mensagem");
const erroMessages = document.querySelectorAll(".error-menssage");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  ResetErros();
  validateInputs();
});

function ResetErros() {
  erroMessages.forEach((errorMessage) => {
    errorMessage.innerText = "";
  });
  nome.parentElement.classList.remove("error");
  email.parentElement.classList.remove("error");
  assunto.parentElement.classList.remove("error");
  mensagem.parentElement.classList.remove("error");
}

function validateInputs() {
  const nomeValue = nome.value.trim();
  const emailValue = email.value.trim();
  const assuntoValue = assunto.value.trim();
  const mensagemValue = mensagem.value.trim();

  if (nomeValue == "") {
    setError(nome, "Nome nao pode ficar em branco");
  }

  if (emailValue == "") {
    setError(email, "E-mail nao pode ficar em branco");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "E-mail inválido");
  }
  if (assuntoValue == "") {
    setError(assunto, "Assunto nao pode ficar em branco");
  }

  if (mensagemValue == "") {
    setError(mensagem, "Messagem nao pode ficar em branco");
  }
}

//Setando o valor do erros
function setError(input, erroMessage) {
  const erroMessageElement = input.nextElementSibling; //é uma propriedade do objeto DOM que retorna o elemento irmão que vem imediatamente depois do elemento atual, no mesmo nível hierárquico do DOM.
  erroMessageElement.innerText = erroMessage;
  input.parentElement.classList.add("error");
}
//Validado o email (usuario@dominio.com)
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
