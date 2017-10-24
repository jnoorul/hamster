/* eslint-disable */
var express = require('express');
const app = express();
const port = 4000;

app.use(express.static('build'));

app.listen(port, ()=>{
  console.log(`server started using port:${port}`);
});

