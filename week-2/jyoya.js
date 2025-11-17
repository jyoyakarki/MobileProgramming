let number;
let message;

document.getElementById("checkBtn").addEventListener("click", function() {
  checkPrimeComposite();
});

function checkPrimeComposite() {
  number = Number(document.getElementById("number").value);

  if (number <= 1) {
    message = "Enter a number greater than 1";
  } else {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      message = number + " is a Prime number";
    } else {
      message = number + " is a Composite number";
    }
  }

  document.getElementById("result").innerHTML = message;
}

function add() {
  let x = 8, y = 5;
  return x + y;
}

function subtract() {
  let x = 8, y = 5;
  return x - y;
}

function multiply() {
  let x = 7, y = 12;
  return x * y;
}

function divide() {
  let x = 84, y = 12;
  return x / y;
}

function largestNumber() {
  let x = 7, y = 12;
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  } else {
    return "Both numbers are equal";
  }
}

function displaySum() {
  document.getElementById("toggleText1").innerHTML = "Sum: " + add();
}

function displaySub() {
  document.getElementById("toggleText2").innerHTML = "Difference: " + subtract();
}

function displayMul() {
  document.getElementById("toggleText3").innerHTML = "Product: " + multiply();
}

function displayDiv() {
  document.getElementById("toggleText4").innerHTML = "Quotient: " + divide();
}

function displayLargest() {
  document.getElementById("toggleText5").innerHTML = "Largest Number: " + largestNumber();
}