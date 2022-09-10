# Sorting Algorythms 🖥

This project enables comparison and benchmarking of different sorting algorithms implemented in JavaScript and WebAssembly (via AssemblyScript).

Currently supported algorythms:

- Bubble Sort
- Shell Sort
- Radix Sort
- Counting Sort

... looking to implement more algorythms in the future.

## Installation

1. Clone this repository
2. Navigate into the wasm-directory

```
cd ./src/wasm/
```

3. Install assembly-script dependencies

```
npm install
// or
yarn install
```

4. Build the WASM-binaries once

```
npm run asbuild
or
yarn asbuild
```

## Run the project

To run the project you can either use the live server extension for VSCode, open the index.html in your web browser of choice or use the http-server runtime in the root directory of this project via npm:

```
npx http-server ./
```

## Project background

This project was created for a bachelor's thesis at the DHBW Mosbach.
