"use strict";

const _ = {
  chunk(array, size = 1) {
    const newArr = [];
    for (let i = 0; i < array.length; i += size) {
      newArr.push(array.slice(i, i + size));
    }
    return newArr;
  },
  compact(array) {
    return newArr = array.filter(elem => elem);
  },
  concat(array, ...values) {
    const newArr = array.slice();
    values.map(value => Array.isArray(value) ? value.map(value => newArr.push(value)) : newArr.push(value));
    return newArr;
  },
  difference(array, ...values) {
    let valuesArr = values.join(',');
    return newArr = array.filter(elem => valuesArr.indexOf(elem) === -1);
  },
  differenceBy(array, values, func) {
    return newArr = array.filter(elem => (values.map(value => func(value))).indexOf(func(elem)) === -1);
  },
  drop(array, number = 1) {
    return array.slice(number);
  },
  dropRight(array, number = 1) {
    if (number === 0) {
      return array;
    }
    return array.slice(0, -number);
  },
  dropWhile(array, func) {
    const dropNumber = array.findIndex((elem, ind) => !(func(elem, ind, array)));
    return newArr = array.slice(dropNumber);
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
  flatten(array) {
    const newArr = [];
    array.forEach(elem => Array.isArray(elem) ? elem.forEach(el => newArr.push(el)) : newArr.push(elem));
    return newArr;
  },
  flattenDeep(array) {
    const newArr = [];
    array.forEach(elem => Array.isArray(elem) ? newArr = newArr.concat(flattenDeep(elem)) : newArr.push(elem));
    return newArr;
  },
  flattenDepth(array, depth = 1) {
    const newArr = [];
    if (depth < 0) {
      newArr.push(array)
      return newArr;
    }
    array.forEach(elem => Array.isArray(elem) ? newArr = newArr.concat(flattenDepth(elem, depth - 1)) : newArr.push(elem));
    return newArr;
  },
  clamp(number, lower, upper) {
    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  fromPairs(pairs) {
    let obj = {};
    pairs.forEach(pair => obj[pair[0]] = pair[1])
    return obj;
  },
  head(array) {
    return array[0];
  },
  indexOf(array, value, fromIndex = 0) {
    return array.findIndex((element, index) => {
      return element === value && index > fromIndex;
    })
  },
  initial(array) {
    return array.slice(0, array.length - 1);
  },
  intersection(array, ...values) {
    let valuesArr = values.join(',');
    return newArr = array.filter(element => {
      return valuesArr.indexOf(element) !== -1;
    });
  },
  intersectionBy(array, values, func) {
    return newArr = array.filter(elem => {
      return (values.map(value => func(value))).indexOf(func(elem)) !== -1;
    })
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
  pull(array, ...values) {
    return array.filter(elem => {
      return values.indexOf(elem) === -1;
    })
  },
  take(array, n = 1) {
    return array.slice(0, n);
  },
  takeRight(array, n = 1) {
    return n && array.slice(-n) || [];
  },
  reverse(array) {
    return array.map((elem, i) => array[array.length - 1 - i]);
  },
  unzip(array) {
    let newArr = [];
    for (let i = 0; i < array[0].length; i++) {
      let arr = [];
      array.forEach(elem => arr.push(elem[i]));
      newArr.push(arr);
    }
    return newArr;
  },
  union() {
    let arrays = [];
    [...arguments].forEach(elem => elem.forEach(el => arrays.push(el)));
    return Array.from(new Set(arrays));
  },
  uniq(array) {
    return Array.from(new Set(array));
  },
  words(string) {
    return string.split(' ');
  },
  without(array, ...values) {
    let newArr = array.slice();
    return newArr.filter(elem => values.indexOf(elem) === -1);
  },
  zip() {
    let args = Array.from(arguments);
    let newArr = [];
    for (let i = 0; i < args.length - 1; i++) {
      let arr = [];
      args.forEach(elem => arr.push(elem[i]));
      newArr.push(arr);
    }
    return newArr;
  },
  zipObject(identifiers, values) {
    let obj = {};
    identifiers.forEach((elem, i) => obj[elem] = values[i]);
    return obj;
  },
  has(object, key) {
    return Object.keys(object).includes(key);
  },
  invert(object) {
    const newObj = {};
    Object.keys(object).forEach(key => newObj[object[key]] = key);
    return newObj;
  },



};


module.exports = _;

