/* eslint-disable */
let express = require('express');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');
let Nexmo = require('nexmo');

const app = express();
const port = process.env.PORT || '3000';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('build'));

app.listen(port, ()=>{
  console.log(`server started using port:${port}`);
});

let nexmo = new Nexmo({
  apiKey: '1424594a',
  apiSecret: '6513db48610e6a78',
}, {});

app.post('/sendSms',function(req, res) {
  // let to = req.body.to;
  // let message = req.body.message;
  // console.log(to);
  // console.log(message);
  nexmo.message.sendSms('Noorul', '6581114270', 'test sms', {}, (nexmoResponse) => {
    console.log('sms sent');
    console.log(nexmoResponse);
    res.json({message: 'sms sent successfully'});
  });
});

