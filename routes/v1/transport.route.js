import {Router} from "express";
import TransportController from '../../controllers/transport.controller'
const router = Router();

// Get all emission
router.get("/", TransportController.index)

// Create a new emission
router.post("/", TransportController.create);

// Get details emission by id
//router.get("/:id", controller.detailbyid); 

// Edit a emission by id
//router.put("/:id", controller.edit)

// Delete a emission by id
//router.delete("/:id", controller.deletebyid)

export default router;
