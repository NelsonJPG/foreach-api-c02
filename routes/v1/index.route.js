import {Router} from "express";
import api from '../../index';
import TravelRoute from './travel.route'
import TransportRoute from './transport.route'

const router = Router();

/* GET home page. */
router.get('/', (req, res, next) => { 
  res.json({ 
    name: api.get("pkg").name,
    description: api.get("pkg").description,
    author: api.get("pkg").author,
    version: api.get("pkg").version
  });
});
  
router.post('/', (req, res, next) => { 
  res.json({ 
      name: api.get("pkg").name,
      description: api.get("pkg").description,
      author: api.get("pkg").author,
      version: api.get("pkg").version
  });
});

router.use("/travels", TravelRoute);
router.use("/transport", TransportRoute);

export default router;


