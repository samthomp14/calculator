let num1 = 0;
let operator = null;
let num2 = 0;
const display = document.querySelector('.text');
let clearOnNext = false;
const numberButtons = document.querySelectorAll('.row button');
numberButtons.forEach(button => button.addEventListener('click', changeDisplay));
document.querySelector('#clear').addEventListener('click', clearDisplay);
const operationButtons = document.querySelectorAll('.operations .math button');
operationButtons.forEach(button => button.addEventListener('click', recordOp));
const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', doMath);
const percent = document.querySelector('#percent');
percent.addEventListener('click', () => {
    display.textContent = Math.round((+display.textContent / 100) * 100000000) / 100000000;
});


function addNum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) {
        return 'nope.'
    }
    return a / b;
}

function operate(a, op, b) {
    let ans;
    //TODO: try to use op as a callback function?
    switch (op) {
        case 'add':
            ans = addNum(a, b);
            break;

        case 'subtract':
            ans = subtract(a, b);
            break;

        case 'multiply':
            ans = multiply(a, b);
            break;

        case 'divide':
            ans = divide(a, b);
            break;
        default:
            ans = num2;
    }
    return ans;
}

function changeDisplay(e) {
    if (clearOnNext) {
        display.textContent = '0';
        clearOnNext = false;
        operationButtons.forEach(btn => btn.classList.remove('activate'));
    }
    if (display.textContent.replace('.','').replace('-','').length < 9){
        if (e.target.textContent == '.') {
            if(!display.textContent.includes('.')) {
                display.textContent += e.target.textContent;
            }
        } else if (display.textContent == '0') {
            display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
    }
}

function clearDisplay(e) {
    num1 = 0;
    num2 = 0;
    operator = null;
    display.textContent = '0';
    operationButtons.forEach(btn => btn.classList.remove('activate'));
}

function recordOp(e) {
    if (operator !== null) doMath();
    const button = e.target;
    num1 = +display.textContent;
    operator = (button.id);
    operationButtons.forEach(btn => btn.classList.remove('activate'));
    button.classList.add('activate');
    clearOnNext = true;
}

function doMath() {

    if(operator === null||clearOnNext) return;
    num2 = +display.textContent;
    display.textContent = Math.round(operate(num1, operator, num2) * 100000000) / 100000000;
    clearOnNext = true;
}

document.querySelector('#sign').addEventListener('click', () => {
    if(display.textContent >= 0 && display.textContent !== '-0') {
        display.textContent = '-'+ display.textContent;
    } else {
        display.textContent = display.textContent.slice(1);
    }
});