const display = document.getElementById('display');

  function append(value) {
    const operators = ['+', '-', '*', '/', '^'];
    const lastChar = display.value.slice(-1);
     if (operators.includes(value)) {
    if (display.value === '' || operators.includes(lastChar)) {
      return; // Do not allow operator at start or repeat
    }
  }
    display.value += value;
  }

  function clearDisplay() {
    display.value = '';
  }
  function backspace(){
    display.value = display.value.slice(0,-1);
  }

  function func(name) {
    const value = prompt(`Enter value for ${name}:`);
    if (value === null) return;

    const val = parseFloat(value);
    if (isNaN(val)) {
      display.value = "Error";
      return;
    }

    let result;
    switch (name) {
      case 'sin': result = Math.sin(toRad(val)); break;
      case 'cos': result = Math.cos(toRad(val)); break;
      case 'tan': result = Math.tan(toRad(val)); break;
      case 'log': result = Math.log10(val); break;
      case 'sqrt': result = Math.sqrt(val); break;
    }
    display.value = isNaN(result) ? "Error" : result;
  }

 
function calculate() {
  try {
    let expression = display.value;

    // Replace '^' with '**' for power calculation
    expression = expression.replace(/\^/g, '**');

    // Replace 'π' and 'e' with JS Math constants
    expression = expression.replace(/π/g, 'Math.PI');

    const result = eval(expression);
    display.value = result;
  } catch (err) {
    display.value = "Error";
  }
}
  
// Find the percentage value 
 function percentage() {
  try {
    const value = parseFloat(display.value);
    if (isNaN(value)) {
      display.value = "Error";
      return;
    }
    display.value = value / 100;
  } catch {
    display.value = "Error";
  }
}

  function toRad(deg) {
    return deg * Math.PI / 180;
  }