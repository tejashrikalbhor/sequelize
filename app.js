const express = require('express');
const app =express();

const port =8030;
require('./models');
var userCtrl = require('./controllers/userController');

app.get("/",(req,res)=>{
    res.send("home page");
});
    app.get("/add",userCtrl.addUser);
        

app.listen(port,()=>{
    console.log("app is listerning at http://localhost:8030");
});