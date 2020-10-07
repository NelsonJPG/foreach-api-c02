import {Router} from "express";
import TravelController from '../../controllers/travel.controller'
const router = Router();

// Get all emission
router.get("/", TravelController.index);

// Create a new emission
router.post("/", TravelController.create);

// Get details emission by id
//router.get("/:id", controller.detailbyid); 

// Edit a emission by id
//router.put("/:id", controller.edit)

// Delete a emission by id
//router.delete("/:id", controller.deletebyid)

export default router;
