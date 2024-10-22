let number = [];
let firstNumber;
let operation;
let result;
let numberMaker = 0;
let display;
let count = 0;

let paragraph1 = document.querySelector(".paragraph-1");
let paragraph2 = document.querySelector(".paragraph-2");
let paragraph3 = document.querySelector(".paragraph-3");

function appendToDisplay(x) {
  if (
    x == 1 ||
    x == 2 ||
    x == 3 ||
    x == 4 ||
    x == 5 ||
    x == 6 ||
    x == 7 ||
    x == 8 ||
    x == 9 ||
    x == 0 ||
    x == "."
  ) {
    number.push(x);
    numberMaker = Number(number.join(""));
    number.slice(number.length, x);
    console.log("in 1 to 0 ",numberMaker);
    display = numberMaker.toString();
    paragraph1.innerText = `${display}   `;
  } else {
    let falseNumber;
    if (x == "+" || x == "-" || x == "*" || x == "/") {
      firstNumber = numberMaker;
      operation = x;
      console.log("this is operation ",operation);

      paragraph3.innerText = `${firstNumber}`;
      paragraph2.innerText = `${operation}  `;
      count++;
      console.log("this is coutnt ",count);

      if (count >= 2) {
        falseNumber = numberMaker;
        // console.log("falsenumber ",falseNumber);

      switch (operation) {
        case "+":
          result = firstNumber + falseNumber;
          break;
        case "-":
          result = firstNumber - falseNumber;
          break;
        case "*":
          result = firstNumber * falseNumber;
          break;
        case "/":
          result = firstNumber / falseNumber;
          break;
      }
      console.log("operation result ",result);
      paragraph3.innerText = `${result}   `;
      firstNumber = result;
      console.log(firstNumber);
      }
      number.splice(0, number.length);
      numberMaker = 0;
    } else {
      falseNumber = numberMaker;

      switch (operation) {
        case "+":
          result = firstNumber + falseNumber;
          break;
        case "-":
          result = firstNumber - falseNumber;
          break;
        case "*":
          result = firstNumber * falseNumber;
          break;
        case "/":
          result = firstNumber / falseNumber;
          break;
      }
      console.log("second operation result ",result);
      firstNumber = result;
      paragraph3.innerText = `${result}   `;
    }
  }
}

function clearDisplay(x) {
  if (x == "X") {
    number.splice(number.length - 1, number.length);
    numberMaker = Number(number.join(""));
    console.log("backed number ",numberMaker);
    paragraph1.innerText = `${numberMaker}`;
  } else {
    number = [];
    firstNumber;
    operation;
    result;
    numberMaker = 0;
    console.log("Values are Refreshed.");
    paragraph1.innerText = `0`;
    paragraph2.innerText = ``;
    paragraph3.innerText = `0`;
  }
}
