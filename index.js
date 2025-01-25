import express from 'express'
import dotenv from "dotenv";
import connectDB from './src/db/index.js'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import userRouter from "./src/routes/user.route.js"
import postRouter from "./src/routes/post.route.js"
import loanRouter from "./src/routes/loan.route.js"





dotenv.config()


const app = express()
 
app.use(
  cors({
    origin: 'https://client-puce-tau-47.vercel.app',
    credentials: true,
    exposedHeaders: ["set-cookie"],
  })
);
app.use(express.json())
app.use(cookieParser())



app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api",userRouter)
// app.use("/api/userPost",postRouter)
app.use("/api",loanRouter)




connectDB()
.then(()=>{
    app.listen(process.env.PORT, () => {
        console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
      });
})
.catch((err)=>{
    console.log("MONGO DB connection failed !!! ", err);
})