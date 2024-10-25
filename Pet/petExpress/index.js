const express = require('express');
const app = express();
const port = 3001;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.get('/',(req,res) => {
    res.send(JSON.stringify({vadim:"EBATSOSAT"}))
})

app.listen(port, () => {
    console.log("lissten")
})