const progressBar = document.querySelector('.progress');
const previousbtn = document.querySelector('#previous-btn');
const nextBtn = document.querySelector('#next-btn');

let progress = 0;

function updateProgressBarra(){
    progressBar.style.width = progress + "%";
}

function previousStep(){
    progress -= 10;
    if(progress < 0) progress = 0;
    updateProgressBarra();
}

function nextStep(){
    progress += 10;
    if(progress > 100) progress = 100;
    updateProgressBarra();
}

previousbtn.addEventListener("click", previousStep);
nextBtn.addEventListener("click", nextStep);