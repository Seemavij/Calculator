let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

const operation = document.querySelector(".operation");

let string = "";
let arr = Array.from(buttons);

let operand1;
let operand2;
let operator;
let result;

let statementValid = false;

arr.forEach((button) => {
  // debugger;
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      if (!operand2) {
        operand2 = input.value;
      }
      operation.innerHTML = `${operand1} ${operator} ${operand2} =`;
      if (operator === "%") {
        result = (operand1 / 100) * operand2;
      } else {
        result = eval(operand1 + operator + operand2);
      }
      input.value = result;
      operand1 = result;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      operand1 = "";
      operand2 = "";
      operator = "";
      input.value = string;
      operation.innerHTML = "";
    } else if (["+", "-", "%", "/", "*"].includes(e.target.innerHTML)) {
      if (!operand1) {
        operand1 = input.value;
        operator = e.target.innerHTML;
        string = `${operand1} ${operator}`;
        input.value = "";
        operation.innerHTML = string;
      } else {
        operator = e.target.innerHTML;
        string = `${operand1} ${operator}`;
        operation.innerHTML = string;
      }
      string = "";
    } else {
      // console.log(e.target)
      //    string = string + e.target.innerHTML;
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});