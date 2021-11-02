import fs, { readFileSync } from 'fs';

function readFile(file) {
  const data = readFileSync(file);
  const str = data.toString();
  const arr = str
    .replace(/[\n,\s]/g, '')
    .split(';');
  return arr;
}

function createJson(arr) {
  const obj = {};

  for (let index = 2; index < arr.length - 1; index++) {
    if (index % 2 === 0) {
      if (arr[index].indexOf('.') === -1) {
        obj[arr[index]] = arr[index + 1];
      } else {
        const key = arr[index].split('.');
        const subObj = {};
        subObj[key[1]] = arr[index + 1];
        obj[key[0]] = subObj;
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
