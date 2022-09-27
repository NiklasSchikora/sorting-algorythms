# WebAssembly Benchmark 🖥

This project resembles an implementation of several algorithms and scenarios that try to compare benchmark performance between JavaScript and WebAssembly (implemented via AssemblyScript).

Currently implemented algorithms:

- A variety of sorting algorithms
- Sieve of Eratosthenes
- Visualization of the Mandelbrot Set

... looking to implement more algorithms in the future.

## Installation

1. Clone this repository
2. Navigate into the wasm-directories (primes and sorting)

```
cd ./src/sorting/
// &
cd ./src/primes/
```

3. Install assembly-script dependencies

```
npm install

or

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
