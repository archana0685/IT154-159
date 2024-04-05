require("dotenv").config();
const express = require("express");
const cors=require("cors");
const userModel=require("./models/user-model")
const recipeModel=require("./models/recipe-model")
const app= express();
const authRoute=require('./router/auth-router');
const recipeRoute=require('./router/recipe-router');

const connectDb = require("./utlis/db");
const errorMiddleware = require("./middleware/error-middleware");


const corsOptions = {
    origin:"http://localhost:3000",
    methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/publish",recipeRoute);


app.use(errorMiddleware);


const PORT=5000;

connectDb().then(()=>{
app.listen(PORT,()=>{
    console.log(`server at port: ${PORT}`);
});
});