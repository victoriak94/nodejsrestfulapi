// FIRST we import express like so:
const express = require("express");

// SECOND we execute express
const app = express();

//NOW WE HAVE THE ABILITY TO CREATE ROUTES!!

//Routes
app.get("/", (req, res) => {
  res.send("We are on home");
});

//How do we start listening to the server?
app.listen(3000); //port name that we want to listen to
