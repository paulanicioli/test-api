const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('/', 
       async (req, res, next) => {
    // res.set('Access-Control-Allow-Origin', 'localhost:3000');
    try {
      const message_api = `You successfully reached this API! There is no info just yet, but come back soon!`

       res.status(200).json(message_api);
    } catch (error) {
      console.log(error);
    }
  };
       
       );
  
app.listen(
  // process.env.PORT,
  8000,
  console.log(`Web application running on port: ${process.env.PORT}`)
);
