const calculator = document.querySelector(".calc");
const buttons = document.querySelector(".calculator-keys");
const output = document.querySelector(".calc__result");
const text = document.querySelector(".calc__text");
const title = document.querySelector(".calc__title");
const equal = document.querySelector(".equal-sign");
const clear = document.querySelector(".all-clear");

var firstOperand = "";
var secondOperand = "";
var result = 0;
var operator = undefined;
var decimal = false;
var danger = false;
var maxLength = 10;

addEvents();

function addEvents() {
    buttons.addEventListener("click", displayData);
    equal.addEventListener("click", calculate);
    clear.addEventListener("click", clearAll);
}

function removeEvents() {
    buttons.removeEventListener("click", displayData);
    equal.removeEventListener("click", calculate);
    clear.removeEventListener("click", clearAll);
}

function displayData(e) {
    let btn = e.target;
    if (btn.className.includes("digit")) {
    if (!operator) {
        if (result) {
            clearAll();
        }
        if (btn.value === "." && decimal) return;
        if (btn.value === ".") decimal = true;
            firstOperand += btn.value;
        if (firstOperand === ".") firstOperand = "0.";
            output.value = firstOperand;
            lengthCheck(firstOperand);
    } else {
        if (btn.value === "." && decimal) return;
        if (btn.value === ".") decimal = true;
        secondOperand += btn.value;
        if (secondOperand === ".") secondOperand = "0.";
            text.value = `${firstOperand} ${operator}`;
            output.value = secondOperand;
            lengthCheck(secondOperand);
    }
    } else if (btn.className.includes("op")) {
        if (firstOperand) {
            if (secondOperand) {
                calculate();
                if (danger) return;
        }
        } else {
            firstOperand = "0";
        }
    operator = btn.value;
    text.value = firstOperand;
    output.value = operator;
    decimal = false;
    }
}

function calculate() {   
    if (firstOperand && !secondOperand){
        let firstNum = Number(firstOperand);
        if (operator === "frac") {
            result = 1 / firstNum;
            operator = 'frac';
            text.value = result;
        } else if (operator === "square") {
            result = Math.pow(firstNum, 2)
            operator = "²"
            text.value = result;
        }
        
        result = result.toString();
        if (result.includes(".")) {
            result = Number(result).toFixed(2);
        }
        if (result.includes("e")) {
            result = Number(result).toPrecision(3);
        }

        text.value = `${firstOperand} ${operator} `;
        output.value = result;
        firstOperand = result;
        operator = undefined;
        decimal = false;
        lengthCheck(result);
    } 
    
    if (firstOperand && secondOperand) {
        let firstNum = Number(firstOperand);
        let secondNum = Number(secondOperand);
        if (operator === "+") {
            result = firstNum + secondNum;
        } else if (operator === "-") {
            result = firstNum - secondNum;
        } else if (operator === "x") {
            result = firstNum * secondNum;
        } else if (operator === "÷") {
            if(secondNum === 0){
                output.value ="Can't divide by zero";
                return
            } else {
                result = firstNum / secondNum;
            }
            
        } else if (operator === "%") {
            result = (firstNum/100) * secondNum
        } else if (operator === "^") {
            result = firstNum ** secondNum;
        } 
        
            result = result.toString();
        if (result.includes(".")) {
            result = Number(result).toFixed(2);
        }
        if (result.includes("e")) {
            result = Number(result).toPrecision(3);
        }

        text.value = `${firstOperand} ${operator} ${secondOperand}`;
        output.value = result;
        firstOperand = result;
        secondOperand = "";
        operator = undefined;
        decimal = false;
        lengthCheck(result);
    }
}

function clearAll() {
    firstOperand = "";
    secondOperand = "";
    operator = undefined;
    result = 0;
    decimal = false;
    danger = false;
    text.value = '';
    output.value = 0;
    output.classList.remove("result-small");
}

function lengthCheck(input) {
    if (input.length > maxLength) {
        output.classList.add("result-small");
    } else {
        output.classList.remove("result-small");
    }
}

