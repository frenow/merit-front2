const express = require('express');
const router = express.Router();
var axios = require('axios');

router.post('/', (req, res) => {
  const token = req.body.token;  
  console.log('valor token: '+token);

    setTimeout(function() {    
        axios(
            {
                url: 'https://fcm.googleapis.com/fcm/send',
                method: 'post',
                headers: {
                  "Content-Type":"application/json",
                  "Authorization":"key=AAAAjgI0vfM:APA91bGo66e6F7ikV8k4SwfsjSOqIoTZJ7vFek--csDOD6oCXt0chO99UP9sI0v30AYd6HlU_NhipN6UFuu1Wowj1gcAGTgxqLaDatPFC-bvRERnRnW_w0Ed9FQnvKgGDNtCDWJOmJ3e"
                },
                data: {
                    "notification": {
                      "title":"Voce acabe de receber 10und Merit",
                      "text":"O usuario 123 enviou 10und Merit para voce.",
                      "sound":"default"
                    },
                    "to":token,
                    "priority":"high"
                  }
              }
        ).then((r) => {
            console.log(r.data)
          }).catch((error) => {
            console.log(error)
          });
        }, 5000);
    
    res.render('login');
});

module.exports = router;
