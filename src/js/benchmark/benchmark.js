import {
  bubbleSort as bubbleSortJS,
  countingSort as countingSortJS,
  shellSort as shellSortJS,
  radixSort as radixSortJS,
} from "../sortinglib.js";

let benchmarkJSLogs = document.querySelector("#benchmarkJSLogs");
var randomArr = [];

var suiteTestJS = new Benchmark.Suite("Sorting algorithms test");

suiteTestJS
  .add("Sort#BubbleSort", () => {
    const sorted = bubbleSortJS(randomArr);
  })
  .add("Sort#ShellSort", () => {
    const sorted = shellSortJS(randomArr);
  })
  .add("Sort#RadixSort", () => {
    const sorted = radixSortJS(randomArr);
  })
  .add("Sort#CountingSort", () => {
    const sorted = countingSortJS(randomArr);
  })
  .on("cycle", (event) => {
    const benchmark = event.target;
    console.log(benchmark.toString());
    benchmarkJSLogs.innerHTML += `<p>${benchmark.toString()} <br>Time: ${
      benchmark.times.cycle
    } Seconds</p>`;
  })
  .on("complete", function (event) {
    const suite = event.currentTarget;
    const fastestOption = suite.filter("fastest").map("name");

    console.log("Fastest performance: " + fastestOption);
    benchmarkJSLogs.innerHTML += `<p><b>Result:</b></p><p>${fastestOption}</p>`;
  });

var suiteTestWASM = new Benchmark.Suite("WASM Benchmark");

suiteTestWASM
  .add("Sort#BubbleSort", () => {
    const sorted = bubbleSortJS(randomArr);
  })
  .add("Sort#ShellSort", () => {
    const sorted = shellSortJS(randomArr);
  })
  .add("Sort#RadixSort", () => {
    const sorted = radixSortJS(randomArr);
  })
  .add("Sort#CountingSort", () => {
    const sorted = countingSortJS(randomArr);
  })
  .on("cycle", (event) => {
    const benchmark = event.target;
    console.log(benchmark.toString());
  })
  .on("complete", function (event) {
    const suite = event.currentTarget;
    const fastestOption = suite.filter("fastest").map("name");

    console.log("fastest: " + fastestOption);
  });

export const testJS = (sortArray) => {
  randomArr = sortArray;
  suiteTestJS.run({ async: true });
};

export const testWASM = (sortArray) => {
  randomArr = sortArray;
  suiteTestWASM.run({ async: false });
};
