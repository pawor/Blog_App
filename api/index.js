const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const catRoute = require('./routes/categories')
const multer = require('multer')
const app = express()

app.use(express.json())
dotenv.config()

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log("Connected to MONGODB")).catch(err => console.log(err))

const storage = multer.diskStorage({
    destination : (req, file, cb) => {
        cb(null, "images")
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
})

const upload = multer({storage: storage})
app.post('/api/upload', upload.single("file"), (req,res) => {
    res.status(200).json("File has been uploaded")
})

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/api/categories', catRoute)

app.listen(5000, () => {
    console.log("Backend is running.")
})