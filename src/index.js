const express = require("express");
const morgan = require("morgan");
const data = require("./data.json");

const app = express();

app.use(morgan("dev"));

app.get("/v2/top-headlines", (req, res) => {
  const { category, q } = req.query;

  data.articles.at(0).title = category + q;

  res.send(data);
});

app.listen(8000, () => {
  console.log("Listening on port: ", 8000);
});
