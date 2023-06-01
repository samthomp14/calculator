let num1 = 0;
let operator;
let num2 = 0;
const display = document.querySelector('.text');
let clearOnNext = false;


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

const numberButtons = document.querySelectorAll('.row button');
numberButtons.forEach(button => button.addEventListener('click', changeDisplay));

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

document.querySelector('#clear').addEventListener('click', clearDisplay);

function clearDisplay(e) {
    num1 = 0;
    num2 = 0;
    operator = 'none';
    display.textContent = '0';
    operationButtons.forEach(btn => btn.classList.remove('activate'));
    document.querySelector('#decimal').addEventListener('click', changeDisplay);
}

document.querySelector('#sign').addEventListener('click', () => {
    if(display.textContent >= 0 && display.textContent !== '-0') {
        display.textContent = '-'+ display.textContent;
    } else {
        display.textContent = display.textContent.slice(1);
    }
});

const operationButtons = document.querySelectorAll('.operations .math button');

operationButtons.forEach(button => button.addEventListener('click', recordOp));

function recordOp(e) {
    const button = e.target
    num1 = +display.textContent;
    operator = (button.id);
    operationButtons.forEach(btn => btn.classList.remove('activate'));
    button.classList.add('activate');
    clearOnNext = true;
}

const equalButton = document.querySelector('#equals');
equalButton.addEventListener('click', doMath);

function doMath(e) {
    num2 = +display.textContent;
    display.textContent = operate(num1, operator, num2);
    clearOnNext = true;
}