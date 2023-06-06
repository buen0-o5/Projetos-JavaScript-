function updateClock(){

const clockElemento = document.querySelector('.clock');  
const horasElemento = document.querySelector('.horas');
const minutosElemento = document.querySelector('.minutos');
const segundosElemento = document.querySelector('.segundos');

const now = new Date();
const horas =  now.getHours().toString().padStart(2,"0");
const minutos = now.getMinutes().toString().padStart(2,"0");
const segundos = now.getSeconds().toString().padStart(2,"0");


horasElemento.textContent = horas;
minutosElemento.textContent = minutos;
segundosElemento.textContent = segundos;

}
updateClock();
setInterval(updateClock,1000);