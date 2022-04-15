const express = require("express");
const cors = require("cors");
const router = require("./routes");

const app = express();  // creating server


// cors stands for cross origin resource sharing, it allows you to connect two application running on different ports to communicate with each other in order to send or receive the data.

app.use(cors());
app.use("/api/v1", router);

app.listen(process.env.PORT || 8000, ()=>{
    console.log("Application has started successfully");
})


// we are having two folders in this application
// routes : is the one in which we will be defining what and all routes our application will be supporting
// controllers : is the one in which you will be writing actual logic of sending the response in the route.... this is actually the place where it will get decided that how do you have to query the database to fetch the data.
