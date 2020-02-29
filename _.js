const _ = {
  chunk(array, size) {
    if (!size) {
      size = 1;
    }
    const newArr = [];
    for (let i = 0; i < array.length; i += size) {
      newArr.push(array.slice(i, i + size));
    }
    return newArr;
  },
  compact(array) {
    const newArr = array.filter(elem => elem);
    return newArr;
  },
  concat(array, values) {
    const newArr = array.slice();
    values.map(value => Array.isArray(value) ? value.map(value => newArr.push(value)) : newArr.push(value));
    return newArr;
  },
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
      const startPaddingLength = Math.floor((length - string.length) / 2);
      const endPaddingLength = length - string.length - startPaddingLength;
      const paddedString = ' '.repeat(startPaddingLength).concat(string).concat(' '.repeat(endPaddingLength));
      return paddedString;
    } else {
      return string;
    }
  },
  has(object, key) {
    return Object.keys(object).includes(key);
  },
  invert(object) {
    const newObj = {};
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
    const dropNumber = array.findIndex((elem, ind) => { return !(func(elem, ind, array)) });
    const newArr = this.drop(array, dropNumber);
    return newArr;
  }


};


module.exports = _;
