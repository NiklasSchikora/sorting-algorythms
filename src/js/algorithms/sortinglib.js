export function bubbleSort(set) {
  for (var j = 0; j < set.length; j++) {
    for (var k = 0; k < set.length - j - 1; k++) {
      if (set[k] > set[k + 1]) {
        var temp = set[k];
        set[k] = set[k + 1];
        set[k + 1] = temp;
      }
    }
  }
  return set;
}

export function shellSort(arr) {
  var increment = arr.length / 2;
  while (increment > 0) {
    for (let i = increment; i < arr.length; i++) {
      var j = i;
      var temp = arr[i];

      while (j >= increment && arr[j - increment] > temp) {
        arr[j] = arr[j - increment];
        j = j - increment;
      }

      arr[j] = temp;
    }

    if (increment == 2) {
      increment = 1;
    } else {
      increment = parseInt((increment * 5) / 11);
    }
  }
  return arr;
}

export function countingSort(inputArray) {
  if (inputArray.length < 2) return inputArray;
  let maxValue = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] > maxValue) {
      maxValue = inputArray[i];
    }
  }
  const countingArray = new Array(maxValue + 1);
  for (let value of inputArray) {
    if (!countingArray[value]) {
      countingArray[value] = 0;
    }
    countingArray[value]++;
  }
  const resultArray = [];
  for (let i = 0; i < countingArray.length; i++) {
    while (countingArray[i] > 0) {
      resultArray.push(i);
      countingArray[i]--;
    }
  }
  return resultArray;
}

export function radixSort(inputArray) {
  if (inputArray.length < 2) return inputArray;
  let maxValue = inputArray[0];
  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] > maxValue) {
      maxValue = inputArray[i];
    }
  }
  const iterationCount = maxValue.toString().length;
  for (let digit = 0; digit < iterationCount; digit++) {
    const bucketArray = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < inputArray.length; i++) {
      const digitValue = Math.floor(inputArray[i] / Math.pow(10, digit)) % 10;
      bucketArray[digitValue].push(inputArray[i]);
    }
    inputArray = [].concat(...bucketArray);
  }
  return inputArray;
}
