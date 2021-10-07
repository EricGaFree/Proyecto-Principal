import { Router } from 'express';
const router = Router();


var coches = {
    "10":{
        Marca : "Golf",
        Modelo : "GTI 5"
    },

    "11":{
        Marca : "Audi",
        Modelo : "A8"
    },

    "12":{
        Marca : "BMV",
        Modelo : "X6"
    }

}

router.get('/', (req, res) => {
    res.status(200).send(coches)
   });

router.get('/:id', (req, res) => {
    res.status(200).send(coches[req.params.id])
   });

router.post('/', (req, res) => {
    res.status(200).send({"mensaje": "Objeto creado correctamente."})
   });

   router.put('/:id', (req, res) => {
    res.status(200).send({"mensaje": "Objeto actualizado correctamente."})
   });

   router.delete('/:id', (req, res) => {
    res.status(200).send({"mensaje": "Objeto eliminado correctamente."})
   });

export default router;
