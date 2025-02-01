import express from "express";
import { getAllAnnouncements, createAnnouncement } from "../controllers/announcementConntroller.js"

const router = express.Router();

router.get('/getall', getAllAnnouncements);
router.post('/', createAnnouncement);


export default router; 


