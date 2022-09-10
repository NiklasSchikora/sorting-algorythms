import {
  bubbleSort as bubbleSortWASM,
  shellSort as shellSortWASM,
  countingSort as countingSortWASM,
  radixSort as radixSortWASM,
} from "../wasm/build/release.js";
import {
  bubbleSort as bubbleSortJS,
  countingSort as countingSortJS,
  shellSort as shellSortJS,
  radixSort as radixSortJS,
} from "../js/sortinglib.js";

let button = document.querySelector("#startSort");
let randomGenerator = document.querySelector("#randomGenerator");
let randomGeneratorCount = document.querySelector("#randomGeneratorCount");
let randomGeneratorMin = document.querySelector("#randomGeneratorMin");
let randomGeneratorMax = document.querySelector("#randomGeneratorMax");
let input = document.querySelector("#numberInput");
let outputElement = document.querySelector("#numberOutput");
let select = document.querySelector("#algoSelect");

let resultTable = document.querySelector("#resultTableBody");

let rNumber = 0;
let rAlgo = "";
let rRuntume = "";
let rElements = 0;
let rExecTime = 0;

button.addEventListener("click", () => {
  // Get Algorythm and sorting set
  let algoId = select.value;
  let iValue = input.value;
  iValue.replace(" ", "");
  let arr = iValue.split(",");
  let numbers = arr.map(function (str) {
    return parseInt(str);
  });

  console.log(numbers);

  // set start time
  let start = new Date();

  //Run Algorythm
  let sortedArray = runSortingAlgorythm(algoId, numbers);

  // set end time
  let end = new Date();
  // measure delta time and log
  rExecTime = end.getTime() - start.getTime();
  outputElement.value = sortedArray.join(", ");
  appendResult();
});

/*
    1: WASM: BubbleSort
    2: WASM: ShellSort
    3: WASM: RadixSort
    4: WASM: CountingSort
    5: JS: BubbleSort
    6: JS: ShellSort
    7: JS: RadixSort
    8: JS: CountingSort
*/
const runSortingAlgorythm = (algoId, arr) => {
  rNumber++;
  rElements = arr.length;
  let output;
  switch (algoId) {
    case "1":
      rAlgo = "Bubble Sort";
      rRuntume = "WASM";
      output = bubbleSortWASM(arr);
      break;
    case "2":
      rAlgo = "Shell Sort";
      rRuntume = "WASM";
      output = shellSortWASM(arr);
      break;
    case "3":
      rAlgo = "Radix Sort";
      rRuntume = "WASM";
      output = radixSortWASM(arr);
      break;
    case "4":
      rAlgo = "Counting Sort";
      rRuntume = "WASM";
      output = countingSortWASM(arr);
      break;
    case "5":
      rAlgo = "Bubble Sort";
      rRuntume = "JS";
      output = bubbleSortJS(arr);
      break;
    case "6":
      rAlgo = "Shell Sort";
      rRuntume = "JS";
      output = shellSortJS(arr);
      break;
    case "7":
      rAlgo = "Radix Sort";
      rRuntume = "JS";
      output = radixSortJS(arr);
      break;
    case "8":
      rAlgo = "Counting Sort";
      rRuntume = "JS";
      output = countingSortJS(arr);
      break;
    default:
      output = [];
  }
  return output;
};

randomGenerator.addEventListener("click", () => {
  let count = parseInt(randomGeneratorCount.value);
  let min = parseInt(randomGeneratorMin.value);
  let max = parseInt(randomGeneratorMax.value);
  if (count) {
    let randomArr = [];
    for (let i = 0; i < count; i++) {
      let random = Math.floor(Math.random() * (max - min + 1) + min);
      randomArr[i] = random;
    }
    input.value = randomArr.join(", ");
  }
});

const appendResult = () => {
  let current = resultTable.innerHTML;
  current += `<tr>
    <td>${rNumber}</td>
    <td>${rAlgo}</td>
    <td>${rRuntume}</td>
    <td>${rElements}</td>
    <td>${rExecTime}ms</td>
  </tr>`;
  resultTable.innerHTML = current;
};
