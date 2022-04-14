import express from "express"
import titleController from "./title.controller";
const router = express.Router();

    router.post("/",titleController.createUpdateTitle)

export default router;