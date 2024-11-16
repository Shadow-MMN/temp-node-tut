
const os = require('os')
let user = os.userInfo()
const systemUpTime = os.uptime()

console.log(user)
console.log( `System Up time is ${systemUpTime}`);

const info ={
    name : os.type(),
    reelease : os.release(),
    totalMem : os.totalmem(),
    freeMem : os.freemem()
}
console.log(info);
