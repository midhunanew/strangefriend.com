var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config.json');

var ses = new AWS.SES();


    console.log("try here");
    // send to list
var to = ['midhun@toobler.com']

// this must relate to a verified SES account
var from = 'Silent Friend <no-reply@strangefriend.com>'


// this sends the email
// @todo - add HTML version
ses.sendEmail( { 
   Source: from, 
   Destination: { ToAddresses: to },
   Message: {
       Subject: {
          Data: 'A Message To You Rudy'
       },
       Body: {
           Html: {
                Data:  'Stop your messing around HTML',
            },
           Text: {
               Data: 'Stop your messing around',
            }
        }
   }
}
, function(err, data) {
   if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
 });
    
