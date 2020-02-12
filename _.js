const _ = {
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  inRange(number, start, end) {
    if (!end) {
      end = start;
      start = 0;
    }
    if (start > end) {
      [start, end] = [end, start];
    }
    return number >= start && number < end;
  },
  words(string) {
    return string.split(' ');
  },
  pad(string, length) {
    if (length > string.length) {
      let startPaddingLength = Math.floor((length - string.length) / 2);
      let endPaddingLength = length - string.length - startPaddingLength;
      let paddedString = ' '.repeat(startPaddingLength).concat(string).concat(' '.repeat(endPaddingLength));
      return paddedString;
    } else {
      return string;
    }
  },
  has(object, key) {
    return Object.keys(object).includes(key);
  },
  invert(object) {
    let newObj = {};
    Object.keys(object).forEach(key => newObj[object[key]] = key);
    return newObj;
  },
  findKey(object, func) {
    for (let key in object) {
      if (func(object[key])) {
        return key;
      } else {
        return undefined;
      }
    }
  },
  drop(array, number) {
    if (!number) {
      return array.slice(1);
    } else {
      return array.slice(number);
    }
  },
  dropWhile(array, func) {
    let dropNumber = array.findIndex((elem, ind) => { return !(func(elem, ind, array)) });
    let newArr = this.drop(array, dropNumber);
    return newArr;
  },
  chunk(array, size) {
    if (!size) {
      size = 1;
    }
    let newArr = [];
    for (let i = 0; i < array.length; i += size) {
      newArr.push(array.slice(i, i + size));
    }
    return newArr;
  }
};


// Do not write or modify code below this line.
module.exports = _;