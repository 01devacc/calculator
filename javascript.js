let num1;
let num2;
let operator;
let display = document.querySelector('.display')
let digits = document.querySelectorAll('.digit')

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
        case "*":
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
            display.textContent = digit.textContent
        })
    })
}

populateDisplay()