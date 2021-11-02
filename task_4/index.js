// data.csv
/**
 * key; value;
 * name; David;
 * lastName; Gav;
 * friend.name; Peter;
 * dob; 01/01/1990;
 */

// key => 'name' => 'friend.name' => 'friend[0].name'

// Read file
// Create object => { [key]: [value] } => { name: 'David', lastName: 'Gav', dob: Date(01/01/1990), frient: { name: 'Peter' } }
// Save data to file data.json

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
  let obj = {};

  for (let index = 2; index < arr.length - 1; index++) {
    if (index % 2 === 0) {
      if (arr[index].indexOf('.') === -1) {
        obj[arr[index]] = arr[index + 1];
      } else {
        const key = arr[index].split('.');
        let subObj = {};
        subObj[key[1]] = arr[index + 1]
        obj[key[0]] = subObj;
      }
    }
  }
  console.log(obj)
  return JSON.stringify(obj);
}




const arr = readFile('data.csv');
const json = createJson(arr)

fs.writeFile('data.json', json, (err) => {

});