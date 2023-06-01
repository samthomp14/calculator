let num1;
let operator;
let num2

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
    switch (op) {
        case '+':
            ans = add(a, b);
            break;

        case '-':
            ans = subtract(a, b);
            break;

        case 'x':
            ans = multiply(a, b);
            break;

        case '/':
            ans = divide(a, b);
            break;
    }
    return ans;
}

const numberButtons = document.querySelectorAll('.row button');
numberButtons.forEach(button => button.addEventListener('click', changeDisplay));

function changeDisplay(e) {
    const display = document.querySelector('.text');
    if (display.textContent.replace('.','').length < 9){
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
