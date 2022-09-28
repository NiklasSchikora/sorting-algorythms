/** Exported memory */
export declare const memory: WebAssembly.Memory;
/**
 * assembly/index/bubbleSort
 * @param set `~lib/array/Array<i32>`
 * @returns `~lib/array/Array<i32>`
 */
export declare function bubbleSort(set: Array<number>): Array<number>;
/**
 * assembly/index/shellSort
 * @param set `~lib/array/Array<i32>`
 * @returns `~lib/array/Array<i32>`
 */
export declare function shellSort(set: Array<number>): Array<number>;
/**
 * assembly/index/radixSort
 * @param inputArray `~lib/array/Array<i32>`
 * @returns `~lib/array/Array<i32>`
 */
export declare function radixSort(inputArray: Array<number>): Array<number>;
/**
 * assembly/index/countingSort
 * @param set `~lib/array/Array<i32>`
 * @returns `~lib/array/Array<i32>`
 */
export declare function countingSort(set: Array<number>): Array<number>;
