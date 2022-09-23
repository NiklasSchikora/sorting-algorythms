import { findPrimes } from "./algorithms/eratosthenes.js";
import { findPrimes as findPrimesWASM } from "../primes/build/release.js";

let upperLimit = document.querySelector("#upperLimit");
let resultBox = document.querySelector("#numberOutput");
let jsRadio = document.querySelector("#js_radio");

let resultTable = document.querySelector("#resultTableBody");

let rNumber = 0;
let rRuntume = "";
let rElements = 0;
let rExecTime = 0;

document.querySelector("#generatePrimes").addEventListener("click", () => {
  rNumber++;
  let start = new Date();
  let n = parseInt(upperLimit.value);
  rElements = n;
  if (jsRadio.checked) {
    let result = findPrimes(n);
    resultBox.innerHTML = result.join(", ");
    rRuntume = "JS";
  } else {
    let result = findPrimesWASM(n);
    resultBox.innerHTML = result.join(", ");
    rRuntume = "WASM";
  }
  let end = new Date();
  rExecTime = end.getTime() - start.getTime();
  appendResult();
});

const appendResult = () => {
  let current = resultTable.innerHTML;
  current += `<tr>
    <td>${rNumber}</td>
    <td>${rRuntume}</td>
    <td>${rElements}</td>
    <td>${rExecTime}ms</td>
  </tr>`;
  resultTable.innerHTML = current;
};
