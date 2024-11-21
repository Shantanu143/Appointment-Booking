import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDb from './config/mongoDb.js';
import connectCloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';



// app Config
const app = express();
const port = process.env.PORT || 4000
connectDb();
connectCloudinary()
// middlewares
app.use(express.json());
// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: true }));
app.use(cors())


// app endpoint

// localhost:4001/api/admin
app.use('/api/admin',adminRouter)


app.get("/", (req, res) => {
    res.send("API Working 1")
})

app.listen(port, () => {
    console.log("server started", port);
})