var express = require('express');
var router = express.Router();

router.get('*', (req, res) => {
  res.sendFile('C:\\Users\\Eric Garcia\\Desktop\\Github\\Proyecto-Principal\\prueba_angular\\kappagod\\src\\index.html');
});


module.exports = router;