import { findPrimes } from "./algorithms/eratosthenes.js";
import { findPrimes as findPrimesWASM } from "../primes/build/release.js";

let upperLimit = document.querySelector("#upperLimit");
let resultBox = document.querySelector("#numberOutput");
let jsRadio = document.querySelector("#js_radio");
let wasmRadio = document.querySelector("#wasm_radio");

document.querySelector("#generatePrimes").addEventListener("click", () => {
  let n = parseInt(upperLimit.value);
  if (jsRadio.checked) {
    let result = findPrimes(n);
    resultBox.innerHTML = result.join(", ");
  } else {
    let result = findPrimesWASM(n);
    resultBox.innerHTML = result.join(", ");
  }
});
