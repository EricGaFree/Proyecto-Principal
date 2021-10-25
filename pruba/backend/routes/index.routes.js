import { Router } from 'express';
var router = Router();

/* GET home page. */

router.get('/', (req, res) => {
  res.status(200).send()
 });

export default router;
