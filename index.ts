import express from "express";

const app = express();

app.use("/", (req, res) => {
  return res.json("testing current route");
});

app.listen(5000, () => {
  console.log("app is running on port 5000");
});
