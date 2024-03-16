import express from "express";
import userRoutes from './routes/user.routes.js'
import cors from 'cors'

const app = express();

app.use(cors({
    origin: "*"||process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}))
app.use(express.static('public'))

app.use("/users",userRoutes)

export default app;