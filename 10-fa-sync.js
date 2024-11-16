const { isUtf8 } = require('buffer')
const { readFileSync, writeFileSync} = require('fs')
const first = readFileSync('./content/first.txt',isUtf8)
const second = readFileSync('./content/second.txt',isUtf8)
// console.log(`${first}
//     ${second}`);
writeFileSync('./content/third.txt',`Here is the first file content ${first}
    And here is the second file content ${second}`)