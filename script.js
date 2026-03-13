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
let eventExists = false;
/* let conditionMovedOn = false; */
let resultDisplayed = false;


const ops = ["add", "subtract", "multiply", "divide"]

function loadScreen(num) {
    display.innerText = '' + num;
}


function handleFirstInput(e) {
    e.preventDefault();
    if (!e.target.classList.contains('btn-number')) {
        return;
    }
    if (resultDisplayed === true) {
        firstNumber = "";
        resultDisplayed = false;
    }
    const number = Number(e.target.textContent);
    firstNumber += `${number}`;
    loadScreen(firstNumber);
    return firstNumber;
}
function handleSecondInput(e) {
    e.preventDefault();
    if (!e.target.classList.contains('btn-number')) {
        return;
    }
    const number = Number(e.target.textContent);
    lastNumber += `${number}`;
    loadScreen(lastNumber);
    return lastNumber;
}

numberContainer.addEventListener('click', handleFirstInput)


function switchToSecondVal(op) {
    if (lastNumber !== "") { return }
    loadScreen("0");
    numberContainer.removeEventListener('click', handleFirstInput);
    if (op !== undefined) { return };
    if (eventExists === true) {
        numberContainer.removeEventListener('click', handleSecondInput);
    }
    numberContainer.addEventListener('click', handleSecondInput);
    eventExists = true;
    return eventExists
}


function opButton1() {
    if (firstNumber === "") {
        return;
    }
    switchToSecondVal(operator);

    operator = 1;
    return operator;
}
function opButton2() {
    if (firstNumber === "") {
        return;
    }
    switchToSecondVal(operator);
    operator = 2;
    return operator;
}
function opButton3() {
    if (firstNumber === "") {
        return;
    }
    switchToSecondVal(operator);
    operator = 3;
    return operator;
}
function opButton4() {
    if (firstNumber === "") {
        return;
    }
    switchToSecondVal(operator);
    operator = 4;
    return operator;
}



btnAdd.addEventListener('click', opButton1);
btnSubtract.addEventListener('click', opButton2);
btnMultiply.addEventListener('click', opButton3);
btnDivide.addEventListener('click', opButton4);



function buttonEquals() {
    if (firstNumber !== "" && lastNumber !== "" && operator !== undefined) {
        if (Number(lastNumber) === 0 && operator === 4) { alert("You cannot divide by zero."); return }
        const operatorArr = [function add() { return Number(firstNumber) + Number(lastNumber) }, function subtract() { return Number(firstNumber) - Number(lastNumber) }, function multiply() { return Number(firstNumber) * Number(lastNumber) }, function divide() { return Number(firstNumber) / Number(lastNumber) }];
        let result = operatorArr[operator - 1]();
        loadScreen(Number(result.toFixed(4)));
        numberContainer.removeEventListener('click', handleSecondInput);
        numberContainer.addEventListener('click', handleFirstInput);


        resultDisplayed = true;
        firstNumber = result;
        result = 0;
        operator = undefined;
        lastNumber = "";

    } else (alert("You haven't entered all values!"))
}

btnEquals.addEventListener("click", buttonEquals);
function handleFirstInputAndMore() {
    loadScreen(0);
    firstNumber = "";
    operator = undefined;
    lastNumber = "";
    eventExists = false;
    numberContainer.removeEventListener('click', handleSecondInput);
    numberContainer.addEventListener('click', handleFirstInput);
}

btnClear.addEventListener("click", () => {
    handleFirstInputAndMore();
})



