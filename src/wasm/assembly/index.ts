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

export function countingSort(set: i32[]): i32[] {
  if (set.length < 2) return set;
  let maxValue = set[0];
  // Find max index
  for (let i = 1; i < set.length; i++) {
    if (set[i] > maxValue) {
      maxValue = set[i];
    }
  }
  const countingArray: i32[] = [];
  for (let i = 1; i < set.length; i++) {
    let value = set[i];
    if (!countingArray[value]) {
      countingArray[value] = 0;
    }
    countingArray[value]++;
  }
  const resultArray: i32[] = [];
  for (let i = 0; i < countingArray.length; i++) {
    while (countingArray[i] > 0) {
      resultArray.push(i);
      countingArray[i]--;
    }
  }
  return resultArray;
}

/*
export function countingSortA(set: i32[]): i32[] {
  let max = set[0];
  let min = set[0];
  for (let i = 0; i <= set.length; i++) {
    if (set[i] > max) max = set[i];
    if (set[i] < min) min = set[i];
  }

  let i,
    z = 0,
    count = [];
  for (i = min; i <= max; i++) {
    count[i] = 0;
  }

  for (i = 0; i < set.length; i++) {
    count[set[i]]++;
  }
}
*/

export function radixSort(set: i32[]): i31[] {
  if (set.length < 2) return set;
  let maxValue = set[0];
  // get max value of set
  for (let i = 1; i < set.length; i++) {
    if (set[i] > maxValue) {
      maxValue = set[i];
    }
  }
  for (let i = 0; i < maxValue.toString().length; i++) {
    let buckets: Array<i32[]> = [[], [], [], [], [], [], [], [], [], []];
    for (let j = 0; j < set.length; j++) {
      let num = getNum(set[i], i);
      buckets[num].push(set[j]);
    }
    set = buckets.flat();
  }
  return set.flat();
}

function getNum(num: i32, index: i32): i32 {
  const strNum = num.toString().split("");
  let end = strNum.length - 1;
  const foundNum = strNum[end - index];

  if (!foundNum) return 0;
  else return parseInt(foundNum);
}
