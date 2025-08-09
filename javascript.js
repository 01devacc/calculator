let num1;
let num2;
let operator;
let operatePrimed = false;
let needToClear = false;
let equalsLastPressed = false;

let firstOperand = '';
let secondOperand = '';

let display = document.querySelector('.display')
let digits = document.querySelectorAll('.digit')
let operators = document.querySelectorAll('.operator')
let equal = document.querySelector('.equals')
let clear = document.querySelector('.clear')
let period = document.querySelector('.period')
let backspace = document.querySelector('.backspace')

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
                    display.textContent === '0' ? display.textContent = digit.textContent : display.textContent += digit.textContent;
                    secondOperand = display.textContent;
    
                } else {
                    if (equalsLastPressed) {
                        firstOperand = digit.textContent;
                        display.textContent = firstOperand;

                    }
                    else {
                        display.textContent === '0' ? display.textContent = digit.textContent : display.textContent += digit.textContent;
                        firstOperand = display.textContent;
                    }


                }
                equalsLastPressed = false;
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
                display.textContent = '';
                operatePrimed = true;
                equalsLastPressed = false;
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
            equalsLastPressed = true;
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
        equalsLastPressed = false;
    })
}

function periodPressed() {
    period.addEventListener('click', () => {
        if (!(display.textContent.includes('.'))) {
            display.textContent += '.'
        }
    })
}

function backspacePressed() {
    backspace.addEventListener('click', () => {
        let string = display.textContent
        display.textContent = string.slice(0, string.length - 1)

        if (operatePrimed) {
            secondOperand = display.textContent;
        } else {
            firstOperand = display.textContent;
        }
        equalsLastPressed = false;
    })
}

function mainLoop() {
    populateDisplay()
    selectOperator()
    equalsPressed()
    clearPressed()
    periodPressed()
    backspacePressed()
}


mainLoop();
