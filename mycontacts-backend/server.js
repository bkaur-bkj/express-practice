const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//sending response normally as a text
app.get("api/contacts", (req, res) =>{
    res.status(200).send("I m good");
});

//sending response as a json
app.get("api/contacts", (req, res) =>{
    res.status(200).json({message: "I am good"});
});


app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
