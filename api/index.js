// creating express server 
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors")
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");
// created this route 

const userRoute = require("./routes/users")

const postRoute = require("./routes/posts");

const categoryRoute = require("./routes/categories");

const multer = require("multer");

dotenv.config();
app.use(express.json()); 
app.use(cors());
//by this we can send any .json file 

const uri = process.env.MONGO_URL;
mongoose.connect(uri, { useNewUrlParser: true })
.then(console.log("Connected to MongoDB"))
.catch((err) => {
    console.log(err);
});

const storage =  multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, "images")
    },filename:(req, file, cb)=>{
        cb(null,req.body.name)
    }
})

const upload = multer({storage:storage});    
app.post("/api/upload",upload.single("file"),(req,res) => {
    res.send(200).json("File has been uploaded")
})

app.use("/api/auth", authRoute);

app.use("/api/users", userRoute);

app.use("/api/posts", postRoute);

app.use("/api/categories", categoryRoute);

app.listen("5000", () => {
    // use "clg" to type following command 
    console.log("Backend is running ");
})