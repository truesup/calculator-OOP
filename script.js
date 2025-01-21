class Calculator {
  constructor() {
    this.currentValue = '';
    this.previousValue = '';
    this.operation = '';
  }

  appendNumber(inputNum) {
    this.currentValue += inputNum;
  }

  chooseOperation(operation) {
    if (this.currentValue === '') {
      return;
    }

    if (this.currentValue !== '') {
      this.compute();
    }

    this.operation = operation;
    this.previousValue = this.currentValue;
    this.currentValue = '';
  }

  compute() {
    if (
      this.previousValue !== '' &&
      this.currentValue !== '' &&
      this.operation !== ''
    ) {
      let result;

      switch (this.operation) {
        case '+':
          result =
            parseFloat(this.previousValue) + parseFloat(this.currentValue);
          break;
        case '-':
          result =
            parseFloat(this.previousValue) - parseFloat(this.currentValue);
          break;
        case '*':
          result =
            parseFloat(this.previousValue) * parseFloat(this.currentValue);
          break;
        case '/':
          result =
            parseFloat(this.previousValue) / parseFloat(this.currentValue);
          break;
        default:
          return;
      }

      this.currentValue = result.toString();

      this.previousValue = '';
      this.operation = '';
    }
  }

  clear() {
    this.previousValue = '';
    this.currentValue = '';
    this.operation = '';
    updateDisplay();
  }
}

const calculator = new Calculator();

document.querySelectorAll('[data-number]').forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.textContent);
    updateDisplay();
  });
});

document.querySelectorAll('[data-operator]').forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.textContent);
    updateDisplay();
  });
});

document.querySelector('.equal').addEventListener('click', () => {
  calculator.compute();
  updateDisplay();
});

document.querySelector('.clear').addEventListener('click', () => {
  calculator.clear();
  updateDisplay();
});

function updateDisplay() {
  if (calculator.currentValue === '') {
    document.querySelector('#display').value = '';
  } else {
    document.querySelector('#display').value = calculator.currentValue;
  }
}
