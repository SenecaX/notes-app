const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log('data.title :>> ', data.title);

// load data from json file
const readJsonFile = fs.readFileSync('1-json.json');

// convert buffer to string
const bufferToString = readJsonFile.toString();

// parse JSON to js object
let parsedData = JSON.parse(bufferToString);

// change name to yours
parsedData.name = "Kedaren";

// console.log('parsedData :>> ', parsedData);

// convert parsedData to JSON before writing to file
const dataToJSON = JSON.stringify(parsedData);

// write newly modified object to json
fs.writeFileSync('1-json.json', dataToJSON);