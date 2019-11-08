const express = require('express');
const router = express.Router();
var axios = require('axios');

router.get('/', require('connect-ensure-login').ensureLoggedIn(),
(req, res) => {

    //estratégia para garantir que os logins de steam se comportem de maneira uniforme
    //em princípio, criar o próprio objeto user e carregá-lo com os valores de diversas
    //mídias sociais
    if(req.user.id === undefined){
        req.user = {id: req.user._json.steamid, displayName: req.user._json.personaname};
    }

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
                  "title":"TITULO DA MENSAGEM MERIT",
                  "text":"TEXTO DA MENSAGEM",
                  "sound":"default"
                },
                "to":"f0ZAaKu8HJmo7ORo2_6rxB:APA91bE7HdPVk1_tNR1DG84Eud38Qz326CeVbqNCqWKLQLTL8v60ZZ71sl4lFKlOAI74Ih5n5Euu3tqmFAx_H3tv227wxUx3KkO99Mg7efk531-nEZbz4tN1PzCEkIkbijdlHOE2DrD_",
                "priority":"high"
              }
          }
    ).then((r) => {
        console.log(r.data)
      }).catch((error) => {
        console.log(error)
      });
    }, 5000);

    console.log({...req.user});
    res.render('profile', { profile: req.user});
}

)
module.exports = router;