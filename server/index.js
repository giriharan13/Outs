const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()


const app = express()

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log('Database successfully connected')})
.catch(()=>{console.log('An error occurred when trying to connect to the database')})


app.use(morgan('dev'))
app.use(cors({origin:true,credentials:true}))


const port = process.env.port || 8080;


const server = app.listen(port,()=>{console.log(`Server running on port ${port}!`)})