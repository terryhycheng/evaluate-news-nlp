const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const key = require("../../key.json");
const dotenv = require("dotenv");

//set up server
const port = process.env.PORT || 8000;
const app = express();

dotenv.config();

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

//GET Route
app.get("/apikey", async (req, res) => {
  try {
    res.status(200).send(key);
  } catch (error) {
    res.status(400).send("Error from POST: ", error);
  }
});

//Console log while server starts to run
app.listen(port, () => console.log(`Listening on port ${port}`));
