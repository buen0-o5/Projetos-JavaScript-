class UnitConverter {
    constructor() {
      this.inputElement = document.querySelector("#input");
      this.fromElement = document.querySelector("#from");
      this.toElement = document.querySelector("#to");
      this.outputElement = document.querySelector("#output");
      this.convertButton = document.querySelector("#convert-btn");
      this.messageElement = document.querySelector("#message");
  
      this.convert = this.convert.bind(this);
      this.convertButton.addEventListener("click", this.convert);
    }
  
    convert() {
      const fromValue = this.fromElement.value;
      const toValue = this.toElement.value;
  
      if (fromValue === toValue) {
        this.outputElement.value = this.inputElement.value;
        this.messageElement.textContent = "";
        return;
      }
  
      let meters;
      switch (fromValue) {
        case "m":
          meters = this.inputElement.value;
          break;
        case "km":
          meters = this.inputElement.value * 1000;
          break;
        case "cm":
          meters = this.inputElement.value / 100;
          break;
        case "mm":
          meters = this.inputElement.value / 1000;
          break;
      }
  
      let result;
      switch (toValue) {
        case "m":
          result = meters;
          break;
        case "km":
          result = meters / 1000;
          break;
        case "cm":
          result = meters * 100;
          break;
        case "mm":
          result = meters * 1000;
          break;
      }
  
      this.outputElement.value = result.toFixed(2);
  
      const fromLabel = this.fromElement.options[this.fromElement.selectedIndex].text;
      const toLabel = this.toElement.options[this.toElement.selectedIndex].text;
      const message = `${this.inputElement.value} ${fromLabel} equivale a ${result.toFixed(2)} ${toLabel}`;
      this.messageElement.textContent = message;
    }
  }
  
  const unitConverter = new UnitConverter();
  