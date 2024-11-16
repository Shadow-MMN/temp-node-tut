const {readFile,writeFile} = require('fs')
readFile('./content/first.txt','utf8',(err,result) =>{
    if(err){
        console.log(err);
        return;
    } 
    const first = result
    readFile('./content/second.txt','utf8', (err,result) => {
        if(err){
            console.log(err);
            return;
        }
        const second = result
        writeFile('./content/fourth.txt',`Here is the first file content ${first}
    And here is the second file content ${second} 
    located in the fourth file`,(err,result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
        
    })
    }) 
})