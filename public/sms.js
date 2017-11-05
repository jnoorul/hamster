var recipient = document.getElementById('mobileNumber').value;
var message = document.getElementById('message').value;

var smsDetails = {
  to: recipient,
  message: message
};


function sendSms() {
  fetch('/sendSms', {
    method: 'POST',
    body: smsDetails,
  }).then(function(res){
    res.json();
  }).then((messge) => {
    window.alert(message);
  });
}

