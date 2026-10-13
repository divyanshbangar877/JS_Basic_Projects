const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");
const display = document.querySelector("#display");

let currentNumber = "";
let firstNumber = null;
let operator = null;


// Numbers
numbers.forEach((number) => {

    number.addEventListener("click", () => {

        currentNumber += number.innerText;

        display.innerText = currentNumber;

    });

});


// Operators
operators.forEach((op) => {

    op.addEventListener("click", () => {

        if (currentNumber === "") return;

        firstNumber = Number(currentNumber);

        operator = op.innerText;

        currentNumber = "";

    });

});


// Decimal
decimal.addEventListener("click", () => {

    if (currentNumber.includes(".")) return;

    if (currentNumber === "") {
        currentNumber = "0";
    }

    currentNumber += ".";

    display.innerText = currentNumber;

});


// Equal
equal.addEventListener("click", () => {

    if (firstNumber === null || currentNumber === "" || operator === null) {
        return;
    }

    const secondNumber = Number(currentNumber);

    let result;


    switch (operator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "−":
            result = firstNumber - secondNumber;
            break;

        case "×":
            result = firstNumber * secondNumber;
            break;

        case "÷":

            if (secondNumber === 0) {
                display.innerText = "Error";
                return;
            }

            result = firstNumber / secondNumber;
            break;

        case "%":
            result = firstNumber % secondNumber;
            break;

    }


    display.innerText = result;

    currentNumber = String(result);
    firstNumber = null;
    operator = null;

});


// Clear
clear.addEventListener("click", () => {

    currentNumber = "";
    firstNumber = null;
    operator = null;

    display.innerText = "0";

});


// Delete
deleteBtn.addEventListener("click", () => {

    currentNumber = currentNumber.slice(0, -1); // or currentNumber.slice(0, currentNumber.length - 1);

    if (currentNumber === "") {
        display.innerText = "0";  
    } else {
        display.innerText = currentNumber;    
    }

});
