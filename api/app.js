const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.status(200).json({ msg: "Hello Upasana!" });
});

app.listen(8080, (server) => {
  console.log("Example app listening production at 8080");
});
