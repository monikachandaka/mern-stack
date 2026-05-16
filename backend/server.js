const express = require("express");
const app = express();
const PORT = 5000;

const connection=require("./config/db");
app.use(express.json());
connection();
const studentRouter=require("./routes/studentRouter");
const collegeRouter=require("./routes/collegeRouter")
app.use("/students",studentRouter);
app.use("/colleges",collegeRouter);
//to start the server
app.listen(PORT,()=>{
    console.log("Server running on port",PORT);
});