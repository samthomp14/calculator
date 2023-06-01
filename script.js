let num1 = 0;
let operator;
let num2
const display = document.querySelector('.text');

function add(a, b) {
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
            ans = add(a, b);
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
    }
    return ans;
}

const numberButtons = document.querySelectorAll('.row button');
numberButtons.forEach(button => button.addEventListener('click', changeDisplay));

function changeDisplay(e) {
    if (display.textContent.replace('.','').replace('-','').length < 9){
        if (e.target.textContent == '.') {
            e.target.removeEventListener('click', changeDisplay); // deactivate decimal point
        }
    
        if (display.textContent == '0') {
            display.textContent = e.target.textContent;
        } else {
            display.textContent += e.target.textContent;
        }
    }
}

document.querySelector('#clear').addEventListener('click', clearDisplay);

function clearDisplay(e) {
    display.textContent = '0';
    document.querySelector('#decimal').addEventListener('click', changeDisplay);
}

document.querySelector('#sign').addEventListener('click', () => {
    if(display.textContent >= 0 && display.textContent !== '-0') {
        display.textContent = '-'+ display.textContent;
    } else {
        display.textContent = display.textContent.slice(1);
    }
});


