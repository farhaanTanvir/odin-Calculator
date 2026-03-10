const display = document.querySelector('#current');
const expression = document.querySelector('#expression');

const btnZero = document.querySelector('#zero');
const btnOne = document.querySelector('#one');
const btnTwo = document.querySelector('#two');
const btnThree = document.querySelector('#three');
const btnFour = document.querySelector('#four');
const btnFive = document.querySelector('#five');
const btnSix = document.querySelector('#six');
const btnSeven = document.querySelector('#seven');
const btnEight = document.querySelector('#eight');
const btnNine = document.querySelector('#nine');
const btnDecimal = document.querySelector('#decimal');

const btnAdd = document.querySelector('#add');
const btnSubtract = document.querySelector('#subtract');
const btnMultiply = document.querySelector('#multiply');
const btnDivide = document.querySelector('#divide');

const btnEquals = document.querySelector('#equals');
const btnClear = document.querySelector('#clear');
const btnDelete = document.querySelector('#delete');

const numberContainer = document.querySelector('.container')


// ALL THE BUTTONS READY


let firstNumber = "";
let operator;
let lastNumber = "";

let conditionMovedOn = false;

const ops = ["add", "subtract", "multiply", "divide"]

function loadScreen(num) {
    display.innerText = num;
}


function handleFirstInput(e) {
    e.preventDefault();
    if (!e.target.classList.contains('btn-number')) {
        return;
    }
    const number = Number(e.target.textContent);
    firstNumber += `${number}`;
    loadScreen(firstNumber);
    return firstNumber;
}

numberContainer.addEventListener('click', handleFirstInput)

function switchToSecondVal() {
    numberContainer.removeEventListener('click', handleFirstInput)
    numberContainer.addEventListener('click', (e) => {
        e.preventDefault();
        if (!e.target.classList.contains('btn-number')) {
            return;
        }
        const number = Number(e.target.textContent);
        lastNumber += `${number}`;
        loadScreen(lastNumber);
        return lastNumber;
    });
}

btnAdd.addEventListener('click', () => {
    if (firstNumber === "") {
        return;
    }
    operator = 0;
    switchToSecondVal();
    return operator;

})
btnSubtract.addEventListener('click', () => {
    if (firstNumber === "") {
        return;
    }
    operator = 1;
    switchToSecondVal();
    return operator

})
btnMultiply.addEventListener('click', () => {
    if (firstNumber === "") {
        return;
    }
    operator = 2;
    switchToSecondVal();
    return operator
})
btnDivide.addEventListener('click', () => {
    if (firstNumber === "") {
        return;
    }
    operator = 3;
    switchToSecondVal();
    return operator
})


btnEquals.addEventListener("click", () => {
    const operatorArr = [function add() { return Number(firstNumber) + Number(lastNumber) }, function subtract() { return Number(firstNumber) - Number(lastNumber) }, function multiply() { return Number(firstNumber) * Number(lastNumber) }, function divide() { return Number(firstNumber) / Number(lastNumber) }];
    let result = operatorArr[operator]();
    loadScreen(result);
})