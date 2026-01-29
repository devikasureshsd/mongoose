const mongoose=require("mongoose")
const User=require("./userModel")
mongoose.connect("mongodb://127.0.0.1:27017/mydevi").then(()=>{
console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("Error connection")
})
const myinp=new User({
    sname:"Rohith", //if give key as sname instead of name also give success output in console but its not display in the mongodb compassa'
    age:22,
    addr:"no.15,selvanagar,karur"
})
myinp.save().then(()=>{
    console.log("Success")
}).catch((err)=>{
    console.log("error:",err)
})