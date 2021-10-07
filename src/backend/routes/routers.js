const express = require('express');
const router = express.Router();

router.post('*', (req, res) => {
   res.send(200, [
      {"id": 10, "name": "Starlord", "saying": "oh yeah"}
   ])
});

router.get('*', (req, res) => {
   res.send(200, [
      {"id": 10, "name": "Starlord", "saying": "oh yeah"}
   ])
});

router.put('*', (req, res) => {
   res.send(200, [
      {"id": 20, "name": "Pepe", "saying": "Sisi"}
   ])
});

router.delete('*', (req, res) => {
   res.send(200, [
      {"id": 10, "name": "Starlord", "saying": "oh yeah"}
   ])
});

module.exports=router;