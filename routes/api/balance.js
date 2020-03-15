var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/balance/:id', function(req, res, next) {
    const id = req.params.id;
    res.json({
        message: 'Success',
        id: id,
        balance: 500
    });

});

module.exports = router;
