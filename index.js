const express=require("express");
const dotenv=require("dotenv");
const student=require("./router/studentrouter");
const mentor=require('./router/mentorrouter');
const mango =require("./connetion");



const app=express();
dotenv.config();
mango.connect();
app.use(express.json())

app.use("/student",student);
app.use("/mentor",mentor)

app.listen(process.env.PORT);