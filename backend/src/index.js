import express from 'express'
import dotenv from 'dotenv'
import dns from 'dns'
import cors from 'cors'
import Dbconnect from './lib/Db.js';
import authRouter from './routes/authRoutes.js'
import userRouter from './routes/userRoutes.js'
import job from './lib/cron.js';
import path from 'path';
import fs from 'fs'
dns.setServers([
  "8.8.8.8", // Google DNS
  "8.8.4.4"
]);
dotenv.config();
const app = express();
const frontend_url = process.env.FRONTEND_URL
app.use(
  cors({
    origin: frontend_url, // React/Vite frontend
    credentials: true,
  })
);
app.use("/api/auth",authRouter);
app.use("/api/user",userRouter)
const publicDir = path.join(process.cwd(),'public')

if(fs.existsSync(publicDir)){
  app.use(express.static(publicDir));
  app.get('/{*any}',(req,res,next)=>{
    res.sendFile(path.join(publicDir,'index.html'),(err)=>next(err))
  })
}
const port = process.env.PORT;
app.listen(port,()=>{
    Dbconnect();
    console.log(`server is running on ${port}`)
    if(process.env.NODE_ENV === "production") 
    job.start()
  
})