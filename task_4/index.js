/* eslint-disable no-param-reassign */
/* eslint-disable no-lonely-if */
import fs, { readFileSync } from 'fs';

function readFile(file) {
  const data = readFileSync(file);
  const str = data.toString();
  const arr = str
    .replace(/[\n,\s]/g, '')
    .split(';');
  return arr;
}
function createObj(obj, key, value) {
  // const obj = {};
  /**
   * obj
   * obj => obj.field => object
   * obj => obj.field === undefined
   * obj => obj.filed => string
   */
  // if (Object.hasOwnProperty.call(obj, key[0])) {
  //   if (typeof obj[key[0]] === 'object') {

  //   }
  // } else {
  // }

  if (typeof obj[key[0]] !== 'object') {
    obj[key[0]] = {};
  }

  if (key.length > 1) {
    const newKey = key.slice(1);
    createObj(obj[key[0]], newKey, value);
  } else {
    obj[key[0]] = value;
  }
  console.log(obj);
  return obj;
}
function createJson(arr) {
  const obj = {};

  for (let index = 2; index < arr.length - 1; index++) {
    if (index % 2 === 0) {
      if (arr[index].indexOf('.') === -1) {
        obj[arr[index]] = arr[index + 1];
      } else {
        const key = arr[index].split('.');

        createObj(obj, key, arr[index + 1]);
      }
    }
  }

  return JSON.stringify(obj);
}

const arr = readFile('data.csv');
const json = createJson(arr);

fs.writeFile('data.json', json, (err) => {
  if (err) {
    console.log(err);
  }
});
