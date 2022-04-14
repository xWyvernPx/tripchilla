import express from "express"
import addressController from "./address.controller";
const router = express.Router()

router.post("/",addressController.createAddress);
router.get("/:id",addressController.getAddressById);
router.put("/",addressController.updateAddress);
router.delete("/:id",addressController.deleteAddress);

export default router;