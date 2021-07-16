const express = require('express')
const app = express()
const PORT = 8080

app.get('/route-2',(req,res)=>{
    res.json(
        {
            message:"This is the route 2"
        }
    )
})
app.get('/',(req,res)=>{
    res.json(
        {
            message:"Hello world!"
        }
    )
})

app.listen(PORT,()=>{
    console.log(`Listening the port ${PORT}`);
})


