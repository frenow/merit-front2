var express = require('express');
var router = express.Router();

router.get('/', require('connect-ensure-login').ensureLoggedIn(),
(req, res) => {    

    res.render('deposito');
});

module.exports = router;
