const express = require('express');
require('dotenv').config()

const app = express()

app.get('/',(req, res)=>{
    res.send('This is sample test');
})

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server is listen at port: ${port}`)
})
