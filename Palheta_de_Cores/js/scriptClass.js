class PalhetaDeCores {
    constructor() {
      this.generateButton = document.querySelector('#geneate-button');
      this.colorsDiv = document.querySelector('.colors');

    this.generateColors = this.generateColors.bind(this);
    this.generateButton.addEventListener("click", this.generateColors);
    
    }
  
    generateColors() {
      this.colorsDiv.innerHTML = "";
      for (let i = 0; i < 5; i++) {
        const color = this.generateRandomColor();
        const colorDiv = document.createElement("div");
        colorDiv.style.backgroundColor = color;
        const colorName = document.createElement("p");
        colorName.innerText = color;
        colorName.style.color = color;
        colorDiv.appendChild(colorName);
        this.colorsDiv.appendChild(colorDiv);
      }
    }
  
    generateRandomColor() {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
  
  const palheta = new PalhetaDeCores();
  