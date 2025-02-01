import express from 'express';
import { config } from 'dotenv';
import cors from 'cors'
import { dbConnection } from './database/dbConnection.js';
import studentRouter from "./routers/studentRouter.js";
import eventsRouter from './routers/eventsRouters.js';
import teacherRouter from './routers/teacherRouters.js';
import assignmentRouter from './routers/assignmentRouters.js';
import announcementRouter from './routers/announcementRouters.js';
import libraryRouter from './routers/libraryRouters.js';
import classRouter from './routers/classRouters.js';
import examRouter from './routers/examRouters.js';
import attendanceRouter from './routers/attendanceRouters.js';
import usersRouter from "./routers/usersRouter.js"
import adminRegisterRouter from "./routers/adminRegisterRouter.js"

import { errorHandler } from './middlewares/errorHandler.js';


const app=express();
app.use(cors());
config({path: './config/config.env'});

// app.use(
//     cors({
//         origin:[process.env.FRONTEND_URL],
//         methods:["GET","POST","PUT","DELETE"]
//     })
// );

app.use((err,req,res,next)=>{
    errorHandler(err,req,res,next)
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/v1/students",studentRouter);
app.use("/api/v1/events",eventsRouter);
app.use("/api/v1/library", libraryRouter);
app.use("/api/v1/announcements", announcementRouter);
app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/exam", examRouter);
app.use("/api/v1/class", classRouter);
app.use("/api/v1/attendance", attendanceRouter);
app.use("/api/v1/assignments", assignmentRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/register", adminRegisterRouter);



dbConnection();

export default app;