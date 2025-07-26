const express = require('express');
const urlRoute = require('./routes/url');
const { connectToMongoDB } = require('./connect');

const app = express();
const PORT = 8001;

connectToMongoDB("mongodb://127.0.0.1:27017/short-url")
.then(()=>console.log(`MongoDB connected!`));

app.use("/url", urlRoute);

app.listen(PORT, ()=>console.log(`server started at ${PORT}`));

