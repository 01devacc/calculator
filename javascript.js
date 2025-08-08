let num1;
let num2;
let operator;
let operatePrimed = false;
let needToClear = false;

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
            if (!needToClear) {
                if (display.textContent === '0' && digit.textContent === '0') {
                    display.textContent = 0;
                    
                } else if (operatePrimed) {
                    display.textContent === '0' ? secondOperand = digit.textContent : secondOperand += digit.textContent;
                    display.textContent = secondOperand;

    
                } else {    
                    display.textContent === '0' ? firstOperand = digit.textContent : firstOperand += digit.textContent;
                    display.textContent = firstOperand;
                }
            }
        })
    })
}

function selectOperator() {
    operators.forEach(operatorButton => {
        operatorButton.addEventListener('click', () => {
            
            if (!needToClear) {
                if (operatePrimed) {
                    let result = calculate();
                    displayResult(result)
                }
                operator = operatorButton.textContent;
                operatePrimed = true;
            }


        })

        })
}


function equalsPressed() {
    equal.addEventListener('click', () => {
        if (secondOperand !== '') {
            let result = calculate();
            displayResult(result)
            operatePrimed = false;
        }
    
    })
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
    
    if (!needToClear) {
        convertToNumbers(firstOperand, secondOperand);
        if (num2 === 0 && operator === '/') {
            needToClear = true;
            return 'ERROR';
            
        }
        return operate(num1, num2, operator);
    }

}

function clearPressed() {
    clear.addEventListener('click', () => {
        display.textContent = '';
        firstOperand = '';
        secondOperand = '';
        operatePrimed = false;
        needToClear = false;
    })
}

function mainLoop() {
    populateDisplay()
    selectOperator()
    equalsPressed()
    clearPressed()
}


mainLoop();
