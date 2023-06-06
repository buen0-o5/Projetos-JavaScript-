class GeradorCPF {
    constructor() {
      this.cpfElement = document.getElementById('cpf');
      this.gerarCpfBtn = document.getElementById('gerar-cpf');
      this.copiarCpfBtn = document.getElementById('copiar-cpf');
  
      this.gerarCPF = this.gerarCPF.bind(this);
      this.copiarCPF = this.copiarCPF.bind(this);
  
      this.gerarCpfBtn.addEventListener('click', this.gerarCPF);
      this.copiarCpfBtn.addEventListener('click', this.copiarCPF);
    }
  
    gerarCPF() {
      let n = Math.floor(Math.random() * 999999999) + 1;
      let nStr = n.toString().padStart(9, '0');
      let dv1 = this.calcularDV(nStr, 10);
      let dv2 = this.calcularDV(nStr + dv1, 11);
  
      this.cpfElement.innerHTML = this.formatarCPF(nStr + dv1 + dv2);
    }
  
    calcularDV(numero, peso) {
      let total = 0;
      for (let i = 0; i < numero.length; i++) {
        total += parseInt(numero.charAt(i) * peso--);
      }
      let resto = total % 11;
      return resto < 2 ? 0 : 11 - resto;
    }
  
    formatarCPF(cpf) {
      const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
      return cpf.replace(cpfRegex, '$1.$2.$3-$4');
    }
  
    copiarCPF() {
      const cpf = this.cpfElement.innerHTML;
      navigator.clipboard.writeText(cpf).then(
        () => {
          alert(`CPF ${cpf} copiado para a área de transferência!`);
        },
        (err) => {
          console.error('Erro ao copiar CPF:', err);
        }
      );
    }
  }
  
  const gerador = new GeradorCPF();
  