const path = require("path");
const express = require("express");
const app = express();
const db = require("./db/index")

const PORT = 4000
app.listen(PORT, ()=>{
    console.log(`Listening on port:${PORT}`)
})
// Body parsing middleware
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

