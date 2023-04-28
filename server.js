const express = require('express')
const app = express();
const mongoose=require('mongoose');
mongoose.set('strictQuery', false);
var routes=require('./route/routes');
const cors = require('cors');

app.use(cors({
    origin: "http://localhost:4200"
}));

app.listen(8080,function check(error){

    if(error)
    {
        console.log("Error Message");
    }
    else{
        console.log("Started Successfully")
    }
});

mongoose.connect("mongodb://localhost:27017/studentRecords",

function checkDatabase(error){
    if(error)
    {
        console.log("Error in Database Connection");
    }
    else{
        console.log("Database Connection is Successfully");
    }
  
});

app.use(express.json());
app.use(routes);

