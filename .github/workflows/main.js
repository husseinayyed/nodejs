const express = require("express")
const app = express()
app.use("/",(req,res)=>{
  res.send("Hello")
  res.end()
})
app.listen(3000)
