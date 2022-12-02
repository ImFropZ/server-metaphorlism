require("dotenv").config();
const cors = require("cors");
const http = require("http");
const path = require("path");
const bodyParser = require("body-parser");
const express = require("express");

const app = express();
const directoryToServe = "client";
const port = process.env.PORT || 8080;

app.use("/client", express.static(directoryToServe));
// app.use("/public", express.static("/public"));

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  // console.log(req);
  console.log(path.join(__dirname, "...", directoryToServe));
  return res.send("HELLO BACKEND!");
});

const apiRouter = require("./lib/routes");

app.use("/", apiRouter);

http.createServer(app).listen(port, () => {
  console.log(
    `Serving the ${directoryToServe} directory at http://localhost:${port}`
  );
});
