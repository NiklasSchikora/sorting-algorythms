import {
  bubbleSort as bubbleSortJS,
  countingSort as countingSortJS,
  shellSort as shellSortJS,
  radixSort as radixSortJS,
} from "../algorithms/sortinglib.js";
import {
  bubbleSort as bubbleSortWASM,
  shellSort as shellSortWASM,
  countingSort as countingSortWASM,
  radixSort as radixSortWASM,
} from "../../sorting/build/release.js";

let benchmarkJSLogs = document.querySelector("#benchmarkJSLogs");
var randomArr = [];

var suiteTestJS = new Benchmark.Suite("JS: Sorting algorithms test");

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
    benchmarkJSLogs.innerHTML += `<span><b>${benchmark.toString()}</b> <br>Time: ${
      benchmark.times.cycle
    } Seconds</span><br><span>Elapsed: ${
      benchmark.times.elapsed
    } Seconds</span><br><span>Timestamp: ${
      benchmark.times.timeStamp
    }</span><br><hr>`;
  })
  .on("complete", function (event) {
    const suite = event.currentTarget;
    const fastestOption = suite.filter("fastest").map("name");

    console.log("Fastest performance: " + fastestOption);
    benchmarkJSLogs.innerHTML += `<br><span><b>Result:</b><br></span><span>${fastestOption}</span>`;
  });

// Test WASM

var suiteTestWASM = new Benchmark.Suite("WASM Benchmark");

suiteTestWASM
  .add("Sort#BubbleSort", () => {
    const sorted = bubbleSortWASM(randomArr);
  })
  .add("Sort#ShellSort", () => {
    const sorted = shellSortWASM(randomArr);
  })
  .add("Sort#RadixSort", () => {
    const sorted = radixSortWASM(randomArr);
  })
  .add("Sort#CountingSort", () => {
    const sorted = countingSortWASM(randomArr);
  })
  .on("cycle", (event) => {
    const benchmark = event.target;
    console.log(benchmark.toString());
    benchmarkJSLogs.innerHTML += `<span><b>${benchmark.toString()}</b> <br>Time: ${
      benchmark.times.cycle
    } Seconds</span><br><span>Elapsed: ${
      benchmark.times.elapsed
    } Seconds</span><br><span>Timestamp: ${
      benchmark.times.timeStamp
    }</span><br><hr>`;
  })
  .on("complete", function (event) {
    const suite = event.currentTarget;
    const fastestOption = suite.filter("fastest").map("name");

    console.log("Fastest performance: " + fastestOption);
    benchmarkJSLogs.innerHTML += `<br><span><b>Result:</b><br></span><span>${fastestOption}</span>`;
  });

export const testJS = (sortArray) => {
  randomArr = sortArray;
  suiteTestJS.run({ async: true });
};

export const testWASM = (sortArray) => {
  randomArr = sortArray;
  suiteTestWASM.run({ async: true });
};
