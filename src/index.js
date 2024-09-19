require('dotenv').config()

const express = require('express')
const cors = require('cors')
const pool = require('./config/db.config')
const app = express()

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT, () => {
    console.log(`server is Running on port: ${process.env.PORT}`)
})

pool.getConnection((err,connect)=>{
    if(err){
        console.error('error in database connection ', err.message)
        console.error(err.code)
        return
    }
    console.log('database connected')
    connect.release()
})