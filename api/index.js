const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const app = express()

app.use(express.json())
dotenv.config()

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log("Connected to MONGODB")).catch(err => console.log(err))

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)

app.listen(5000, () => {
    console.log("Backend is running.")
})