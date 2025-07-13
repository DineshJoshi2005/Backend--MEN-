const express = require("express");
const { log } = require("node:console");
const app = express();

app.set("view engine","ejs");
app.use((req,res,next)=>{
    console.log("I am middleware");
    next();
});

app.get("/",(req,res,next)=>{
    console.log("System middleware");
    next();
},(req,res)=>{
    res.render("index");
});

app.get("/about", (req,res)=>{
    res.send("About page");
});

app.get("/profile", (req,res)=>{
    res.send("Profile page");
});

app.listen(3000,()=>{
    console.log("Server is running");
})