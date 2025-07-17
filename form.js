const express = require("express");
const userModel = require("./models/user");
const dbConn = require("./config/db");
const app = express();

//this is used to set the application level variable.
app.set("view engine","ejs");

//These middleware used to show the incoming post data.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//This middleware is used to serve the static file.
app.use(express.static("public"));

//Routes...
app.get("/", (req,res)=>{
    res.render("form");
});

app.post("/get-form-data", (req,res)=>{
    console.log(req.body);
    res.send("Data Recieved");
});

app.get("/register", (req,res)=>{
    res.render("register");
});

app.post("/register",async(req,res)=>{
    const {username, email, password} = req.body;
    const user = await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send(user);
});

app.get("/get-users",async (req,res)=>{
    const users = await userModel.find({});
    res.render("show",{users});
});

app.post("/delete-user/:id", async(req,res)=>{
    const {id} = req.params;
    await userModel.findOneAndDelete({
        _id: id
    })
    res.redirect("/get-users");
});

app.get("/update-user/:id",(req,res)=>{
    const{id}=req.params;
    res.render("update", {id});
});

app.post("/update-user/:id",async(req,res)=>{
    const {id} = req.params;
    const {username , email, password}=req.body;
    await userModel.findOneAndUpdate({
        _id:id
    },{
        username:username,
        email:email,
        password:password
    });

    res.redirect("/get-users");
});

app.listen(3000);