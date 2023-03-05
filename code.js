var memory = "";
var memorySplit = "";
var memoryTemp = "";
var memoryNums = [];
var operatorMemory = [];
var operator = "";
var result = 0;

var input = (symbol) => {
  switch (symbol) {
    case 0:
      if (operator == "") {
        memory = `${memory}${0}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}${0}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case 1:
      if (operator == "") {
        memory = `${memory}${1}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}${1}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case 2:
      if (operator == "") {
        memory = `${memory}${2}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}${2}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case 3:
      if (operator == "") {
        memory = `${memory}${3}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}${3}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case 4:
      if (operator == "") {
        memory = `${memory}${4}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}${4}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case 5:
      if (operator == "") {
        memory = `${memory}${5}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}${5}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case 6:
      if (operator == "") {
        memory = `${memory}${6}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}${6}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case 7:
      if (operator == "") {
        memory = `${memory}${7}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}${7}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case 8:
      if (operator == "") {
        memory = `${memory}${8}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}${8}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case 9:
      if (operator == "") {
        memory = `${memory}${9}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      } else {
        memory = `${memory}${operator}${9}`;
        document.getElementById("end").value = memory;
        operator = "";
        break;
      }
    case "+":
      if (memory == "") {
        break;
      } else {
        document.getElementById("end").value = memory + "+";
        operator = "+";
        break;
      }
    case "-":
      if (memory == "") {
        break;
      } else {
        document.getElementById("end").value = memory + "-";
        operator = "-";
        break;
      }
    case "*":
      if (memory == "") {
        break;
      } else {
        document.getElementById("end").value = memory + "*";
        operator = "*";
        break;
      }
    case "/":
      if (memory == "") {
        break;
      } else {
        document.getElementById("end").value = memory + "/";
        operator = "/";
        break;
      }
    case "C":
      document.getElementById("end").value = 0;
      memory = "";
      operator = "";
      memoryNums = [];
      memoryTemp = "";
      memorySplit = "";
      operatorMemory = [];
      result = 0;
      break;
    case "=":
      memory = memory.split("");
      for (let i = 0; i <= memory.length; i++) {
        if (isNaN(memory[i]) == false) {
          memoryTemp += memory[i];
        } else {
          memoryNums.push(parseInt(memoryTemp));
          operatorMemory.push(memory[i]);
          memoryTemp = "";
        }
      }
      // result = memoryNums[0];
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
            if (operatorMemory[l - 1] == "+") {
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
      if (result == 0) {
        result = memoryNums[memoryNums.length - 1];
      }
      document.getElementById("end").value = result;
      // result = operatorMemory;
      // document.getElementById("end").value = result;
      break;
  }
};
