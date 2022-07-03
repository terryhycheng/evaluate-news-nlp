const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

//set up server
const port = 8000;
const app = express();

//middlewares
app.use(cors());
app.use(bodyParser.json());

dotenv.config();

const apiKey = process.env.API_KEY;

//GET Route
app.get("/apikey", async (req, res) => {
  try {
    res.status(200).send({ apiKey: apiKey });
  } catch (error) {
    console.log("Error from POST: ", error);
  }
});

//Console log while server starts to run
app.listen(port, () => console.log(`Listening on port ${port}`));
