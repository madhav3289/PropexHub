import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb+srv://madhav3289:Lt3a4jFXqrt3289@mern-estate.ibdcdcv.mongodb.net/?appName=mern-estate").then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});

const app=express();

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});