let os = require('os');

console.log(os.platform()); //win32
console.log(os.arch()); //x64
console.log(os.cpus().length);//8
console.log(os.uptime());
