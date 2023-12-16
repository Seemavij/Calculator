let operand = "";
let operand2 = "";
let operator = "";
let operatorBlocked = false;
let resultOperation = "";

const operandList = document.querySelectorAll('button.operand');
const operatorList = document.querySelectorAll('button.operator');
const resultButton = document.getElementById('result');
const clearButton = document.getElementById('clear');



function getOperator(event) {
  if (operatorBlocked == false) {
    operator = event.target.innerText;
    operatorBlocked = true;
    console.info('operator is ' + operator);
    updateOperationDisplay();
  }
}

function getOperand(event) {
  if (operator == "") {
    operand += event.target.innerText;
    console.info(operand);
  }
  else {
    operand2 += event.target.innerText;
    console.info(operand2);
  }
  updateOperationDisplay();
}

function updateOperationDisplay() {
  document.getElementById('inputBox').value = `${operand} ${operator} ${operand2} = ${resultOperation}`;
}

function calculateResult(event) {
  resultOperation = eval(operand + operator + operand2);
  updateOperationDisplay();

}


function clearInput() {
  operand = "";
  operand2 = "";
  operator = "";
  operatorBlocked = false;
  resultOperation = "";
  document.getElementById('inputBox').value = "0";
}

operandList.forEach((button) => {
  button.addEventListener('click', getOperand)});



operatorList.forEach((button) => {
  button.addEventListener('click', getOperator)});



resultButton.addEventListener('click', calculateResult);
clearButton.addEventListener('click', clearInput);

// arr.forEach((button) => {
//   // debugger;
//   button.addEventListener("click", (e) => {
//     if (e.target.innerHTML == "=") {
//       if (!operand2) {
//         operand2 = input.value;
//       }
//       operation.innerHTML = `${operand1} ${operator} ${operand2} =`;
//       if (operator === "%") {
//         result = (operand1 / 100) * operand2;
//       } else {
//         result = eval(operand1 + operator + operand2);
//       }
//       input.value = result;
//       operand1 = result;
//     } else if (e.target.innerHTML == "AC") {
//       string = "";
//       operand1 = "";
//       operand2 = "";
//       operator = "";
//       input.value = string;
//       operation.innerHTML = "";
//     } else if (["+", "-", "%", "/", "*"].includes(e.target.innerHTML)) {
//       if (!operand1) {
//         operand1 = input.value;
//         operator = e.target.innerHTML;
//         string = `${operand1} ${operator}`;
//         input.value = "";
//         operation.innerHTML = string;
//       } else {
//         operator = e.target.innerHTML;
//         string = `${operand1} ${operator}`;
//         operation.innerHTML = string;
//       }
//       string = "";
//     } else {
//       // console.log(e.target)
//       //    string = string + e.target.innerHTML;
//       string += e.target.innerHTML;
//       input.value = string;
//     }
//   });
// });


