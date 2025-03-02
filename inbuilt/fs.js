let fs = require('fs');

// writeFile - override the existing text

// fs.writeFile('mycode.txt','this is my data',
//     (err)=>{
//         if(err) throw err;
//         console.log('task done!');
//     }
// );

// console.log('test');

// fs.writeFile('mycode1.txt','this is my data',
//     (err)=>{
//         if(err) throw err;
//         console.log('task done!');
//     }
// );


// append 

// fs.appendFile('myappendedtxt.txt','please append this!\n',
//     (err)=>{
//         if(err) throw err;
//         console.log('file appended')
//     }
// );


// read 

//file read is async 

// fs.readFile('mycode.txt', (err, data) => { // callback function parameter is fixed
//     if (err) throw err;
//     console.log(data);
// });

// fs.readFile('city.json', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// fs.readFile('mycode.txt','utf-8',(err, data) => { // callback function parameter is fixed
//     if (err) throw err;
//     console.log(data);
// });



// to make a synchronous

// let data = fs.readFileSync('city.json',{encoding:'utf-8',flag:'r'});

// console.log(data);
// let data1 = fs.readFileSync('mycode.txt',{encoding:'utf-8',flag:'r'});

// console.log(data1);


// delete -- unlink
// fs.unlink('mycode3.txt',()=>
// {
// console.log('file deleted')
// });

// fs.unlink('mycode3.txt',(err)=>
//     {
//         if(err) throw err;
//     console.log('file deleted')
//     });


// rename 

fs.rename('mytext.txt','myxml.xml',(err)=>{  // what if mytext.txt is not exist
    if(err) throw err;
    console.log('file renamed');
});



