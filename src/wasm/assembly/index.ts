// The entry file of your WebAssembly module.

export function bubbleSort(set: i32[]): i32[] {
  for (let j: i32 = 0; j < set.length; j++) {
    for (let k: i32 = 0; k < set.length - j - 1; k++) {
      if (set[k] > set[k + 1]) {
        var temp: i32 = set[k];
        set[k] = set[k + 1];
        set[k + 1] = temp;
      }
    }
  }
  return set;
}

export function shellSort(set: i32[]): i32[] {
  let increment = set.length / 2;
  while (increment > 0) {
    for (let i = increment; i < set.length; i++) {
      let j = i;
      let temp = set[i];

      while (j >= increment && set[j - increment] > temp) {
        set[j] = set[j - increment];
        j = j - increment;
      }
      set[j] = temp;
    }

    if (increment == 2) {
      increment = 1;
    } else {
      increment = (increment * 5) / 11;
    }
  }
  return set;
}

export function radixSort(inputArray: i32[]): i32[] {
  if (inputArray.length < 2) return inputArray;
  let maxValue = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] > maxValue) {
      maxValue = inputArray[i];
    }
  }
  const iterationCount = maxValue.toString().length;
  for (let digit = 0; digit < iterationCount; digit++) {
    const bucketArray = new Array<i32[]>(10);
    for (let i = 0; i < 10; i++) {
      bucketArray[i] = [];
    }
    for (let i = 0; i < inputArray.length; i++) {
      const digitValue = Math.floor(inputArray[i] / Math.pow(10, digit)) % 10;
      bucketArray[digitValue as i32].push(inputArray[i]);
    }
    let tmp: i32[] = [];
    for (let i = 0; i < bucketArray.length; i++) {
      tmp = tmp.concat(bucketArray[i]);
    }
    inputArray = tmp;
  }
  return inputArray;
}

export function countingSort(set: i32[]): i32[] {
  let max: i32, min: i32;
  // Find min and max values
  max = set[0];
  min = set[0];
  for (let i = 1; i < set.length; i++) {
    if (set[i] > max) max = set[i];
    if (set[i] < min) min = set[i];
  }
  let i = min,
    j = 0,
    len = set.length,
    count = [];
  for (i; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < len; i++) {
    count[set[i]] += 1;
  }
  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      set[j] = i;
      j++;
      count[i]--;
    }
  }
  return set;
}
