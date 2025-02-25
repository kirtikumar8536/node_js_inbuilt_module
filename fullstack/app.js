let express = require('express');

// get the object of express
let app = express();

let dotenv = require('dotenv'); // Import the dotenv package
dotenv.config(); // Load environment variables from a .env file
let port = process.env.PORT || 6700; // Set port from env variable or default to 6700
 




app.get('/',(req,res)=>{
    res.send('Hi from express');
});

app.get('/test',(req,res)=>{
    res.send('Hi from express test request');
});


app.listen(port, (err) => {
    if(err) throw err;
    else{
    console.log("Loaded PORT:", process.env.PORT); // Debugging
    console.log(`Server running on http://localhost:${port}`);
    }
});
