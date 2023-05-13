var memory = "";
var memorySplit = "";
var memoryTemp = "";
var memoryNums = [];
var operatorMemory = [];
var operator = "";
var Syntax = false;
var firstNegative = "";
var result = 0;

const memoryClear = () => {
  memory = "";
  operator = "";
  memoryNums = [];
  memoryTemp = "";
  memorySplit = "";
  operatorMemory = [];
  result = 0;
  Syntax = false;
  firstNegative = false;
};

const input = (symbol) => {
  switch (symbol) {
    case 0:
      if (
        (memory == "" && operator != "-") ||
        (memory.charAt(0) == "-" &&
          memory.charAt(1) == "0" &&
          memory.charAt(2) != ".")
      ) {
        break;
      } else if (operator == "") {
        memory = `${memory}0`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}0`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      if (operator == "") {
        memory = `${memory}${symbol}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}${symbol}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case ".":
      if (memory == "") {
        memory = `0.`;
        document.getElementById("end").value = memory;
        break;
      } else {
        memory = `${memory}.`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case "+":
    case "*":
    case "/":
      if (memory == "") {
        break;
      } else {
        document.getElementById("end").value = memory + symbol;
        operator = symbol;
        break;
      }
    case "-":
      document.getElementById("end").value = memory + "-";
      operator = "-";
      break;
    case "C":
      memoryClear();
      document.getElementById("end").value = 0;
      break;
    case "=":
      memory = memory.split("");
      if (memory[0] == "-") {
        firstNegative = memory.shift();
      }
      for (let i = 0; i <= memory.length; i++) {
        if (isNaN(memory[i]) == false) {
          memoryTemp += memory[i];
        } else if (memory[i] == ".") {
          if (Syntax == true) {
            document.getElementById("end").value = "SyntaxError";
            return;
          } else {
            memoryTemp += memory[i];
            Syntax = true;
          }
        } else {
          memoryNums.push(parseFloat(memoryTemp));
          operatorMemory.push(memory[i]);
          Syntax = false;
          memoryTemp = "";
        }
      }
      if (firstNegative == "-") {
        memoryNums[0] *= -1;
        firstNegative = "";
      }
      for (let i = 0, j = 0, k = 0; i < memoryNums.length; i++, j++) {
        if (operatorMemory[j] == "*" && k == 0) {
          memoryNums[i + 1] = memoryNums[i] * memoryNums[i + 1];
          memoryNums[i] = 0;
          operatorMemory[j] = undefined;
          if (i == memoryNums.length - 1) {
            k = 1;
            i = -1;
            j = -1;
            continue;
          }
        } else if (operatorMemory[j] == "/" && k == 0) {
          memoryNums[i + 1] = memoryNums[i] / memoryNums[i + 1];
          memoryNums[i] = 0;
          operatorMemory[j] = undefined;
          if (i == memoryNums.length - 1) {
            k = 1;
            i = -1;
            j = -1;
            continue;
          }
        } else if (operatorMemory[j] == "+" && k == 1) {
          result += memoryNums[i + 1];
        } else if (operatorMemory[j] == "-" && k == 1) {
          result -= memoryNums[i + 1];
        } else if (
          operatorMemory[j] == undefined &&
          k == 1 &&
          !isNaN(memoryNums[i + 1])
        ) {
          for (let l = j; l >= 0; l--) {
            if (result == 0) {
              result = memoryNums[i + 1];
              break;
            } else if (operatorMemory[l - 1] == "+") {
              result += memoryNums[i + 1];
              break;
            } else if (operatorMemory[l - 1] == "-") {
              result -= memoryNums[i + 1];
              break;
            }
          }
        } else if (i == memoryNums.length - 1 && k == 0) {
          k = 1;
          i = -1;
          j = -1;
          result = memoryNums[0];
          continue;
        }
      }
      document.getElementById("end").value = result;
      memoryClear();
      break;
  }
};
