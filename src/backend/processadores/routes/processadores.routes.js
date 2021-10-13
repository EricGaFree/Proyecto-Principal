const express = require('express');
const router = express.Router();

var processador = {
   "10":{
      name: "Intel",
      gen: "7",
      type: "7700k"
   }
};

router.post('/', (req, res) => {
   res.send(200, {"mensaje": "Objeto insertado correctamente."})
});

router.get('/', (req, res) => {
   res.status(200).send(processador)
});

router.put('/:id', (req, res) => {
   let id = req.params.id;
      res.status(200).send({"mensaje": "Objeto alterado correctamente."})
});

router.delete('/:id', (req, res) => {
   let id = req.params.id;
   res.status(200).send({"mensaje": "Objeto eliminado correctamente."})
});

module.exports=router;