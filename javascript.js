let num1;
let num2;
let operator;
let operatePrimed = false;

let firstOperand = '';
let secondOperand = '';

let display = document.querySelector('.display')
let digits = document.querySelectorAll('.digit')
let operators = document.querySelectorAll('.operator')
let equal = document.querySelector('.equals')
let clear = document.querySelector('.clear')

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return add(num1, num2)
        case "-":
            return subtract(num1, num2)
        case "x":
            return multiply(num1, num2)
        case "/":
            return divide(num1, num2)
        default:
            break;
    }
}

function populateDisplay() {
    digits.forEach(digit => {
        digit.addEventListener('click', () => {
            if ((display.textContent === '0' || display.textContent === '') && digit.textContent === '0') {
                display.textContent = 0;
                
            } else if (operatePrimed) {
                secondOperand += digit.textContent;
                display.textContent = secondOperand;

            } else {    
                firstOperand += digit.textContent;
                display.textContent = firstOperand;
            }
        })
    })
}

function selectOperator() {
    operators.forEach(operatorButton => {
        operatorButton.addEventListener('click', () => {
            
            if (operatePrimed) {
                    let result = calculate();
                    displayResult(result)
                }
            operator = operatorButton.textContent;
            operatePrimed = true;
        })

        })
}


function equalsPressed() {
    if (true) {
        equal.addEventListener('click', () => {
            let result = calculate();
            displayResult(result)
            
        })
    }
}

function convertToNumbers(firstOperand, secondOperand) {
    num1 = Number(firstOperand);
    num2 = Number(secondOperand); 
}

function displayResult(result) {
    display.textContent = result.toString();
    firstOperand = result.toString();
    secondOperand = '';
}


function calculate() {
    convertToNumbers(firstOperand, secondOperand);
    return operate(num1, num2, operator);
}

function clearPressed() {
    clear.addEventListener('click', () => {
        display.textContent = '';
        firstOperand = '';
        secondOperand = '';
        operatePrimed = false;
    })
}

function mainLoop() {
    populateDisplay()
    selectOperator()
    equalsPressed()
    clearPressed()
}

mainLoop();
