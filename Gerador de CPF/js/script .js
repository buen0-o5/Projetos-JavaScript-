//Definindo Constantes:
const cpfE1 = document.getElementById('cpf');
const gerarCpfBtn = document.getElementById('gerar-cpf');
const copiarCpfBtn = document.getElementById('copiar-cpf');


//Funçao para gerar CPF aleatorio
function gerarCPF(){
    let n = Math.floor(Math.random() * 999999999 ) + 1;//gera um número inteiro aleatório entre 1 e 999999999.
    let nStr = n.toString().padStart(9, "0");
    let dv1 = calcularDV(nStr, 10);
    let dv2 = calcularDV(nStr + dv1, 11);

    cpfE1.innerHTML = formatarCPF(nStr + dv1 + dv2)
}

function calcularDV (numero, peso){
    let total = 0;
    for(let i = 0 ; i < numero.length; i++){
        total += parseInt(numero.charAt(i) * peso--);
    }
    let resto = total % 11;
    console.log(resto);
    return resto < 2 ? 0 : 11 - resto;
    
}

function formatarCPF(cpf){
    const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
    return cpf.replace(cpfRegex , "$1.$2.$3-$4")
}

//Funçao para copiar na area de tranferancia 
function copiarCPF(){
    const cpf = cpfE1.innerHTML;
    navigator.clipboard.writeText(cpf).then(
        () => {
            alert(`CPF ${cpf} copiado para a área de transferência! `);
        },
        (err) =>{
            console.error("Erro ao copiar CPF:", err);
        }
    );
}

gerarCpfBtn.addEventListener("click", gerarCPF);
copiarCpfBtn.addEventListener("click", copiarCPF);