const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (typeof end === "undefined") {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }

    let isInRange = start <= number && number < end;
    return isInRange;
  },
  words(string) {
    const words = string.split(" ");
    return words;
  },
  pad(string, length) {
    if (!(length > string.length)) {
      return string;
    }
    let numOfSpaces = length - string.length;
    for (let i = 0; i < numOfSpaces; i++) {
      if (i % 2 === 0) {
        string = string + " ";
      } else {
        string = " " + string;
      }
    }
    return string;
  },
  has(object, key) {
    const hasValue = object[key] ? true : false;
    return hasValue;
  },
  invert(object) {
    const invertedObject = {};
    for (let key in object) {
      let originalValue = object[key];
      invertedObject[originalValue] = key;
    }
    return invertedObject;
  },
  findKey(object, predicate) {
    for (let key in object) {
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
    }
    return undefined;
  },
  drop(array, n) {
    if (typeof n === "undefined") {
      n = 1;
    }
    const droppedArray = array.slice(n, array.length);
    return droppedArray;
  },
  dropWhile(array, predicate) {
    let dropNumber = array.findIndex((element, index) => {
      return !predicate(element, index, array);
    });
    let droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  chunk(array, size) {
    if (typeof size === "undefined") {
      size = 1;
    }
    const arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  },
};

// Do not write or modify code below this line.
module.exports = _;
