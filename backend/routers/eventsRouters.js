import express from "express";
import { getAllEvents, createEvents } from "../controllers/events.Controller.js"

const router = express.Router();

router.get('/getall', getAllEvents);
router.post('/', createEvents);


export default router;


