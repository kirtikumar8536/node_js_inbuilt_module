let express = require('express');

// get the object of express
let app = express();

let dotenv = require('dotenv'); // Import the dotenv package
dotenv.config(); // Load environment variables from a .env file
let port = process.env.PORT || 6700; // Set port from env variable or default to 6700

let morgan = require('morgan');
let fs = require('fs');

let categoryRouter = require('./src/controller/CategoryRouter');
let productRouter = require('./src/controller/productRouter');
const { title } = require('process');


// Apply Morgan Middleware Before Routes
// Move the app.use(morgan(...)) above the routes so that it executes before handling any request.

// This line writes logs to app.log but overwrites the file on each request
// app.use(morgan('combined', { stream: fs.createWriteStream('./app.log') }));

// The following line ensures logs are appended to app.log instead of being overwritten on each request
app.use(morgan('common')); // Logs to console
app.use(morgan('common', { stream: fs.createWriteStream('./app.log', { flags: 'a' }) })); // Logs to file



// Import Routers
// Register Routers after middleware
app.use('/category',categoryRouter);

app.use('/product',productRouter);


// Serve static files (CSS, JS, Images) from the 'public' folder
app.use(express.static(__dirname + '/public'));

/* 
  Set the directory where HTML (EJS) files are stored.
  By default, Express looks for views in a folder named "views", 
  but here we are explicitly setting it to './src/views'.
*/
app.set('views', './src/views');

/* 
  Set EJS as the templating/view engine for rendering dynamic content.
  This allows us to use `.ejs` files inside the 'views' directory.
*/
app.set('view engine', 'ejs');





//default
app.get('/',(req,res)=>{
   // res.send('Hi from express');
   res.render('index', { title: 'Home Page', message: 'Welcome to EJS!' });
  
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
