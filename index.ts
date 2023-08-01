import express from "express";
import { AdminRoute, VandorRoute } from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/admin", AdminRoute);
app.use("/api/v1/vandor", VandorRoute);

app.listen(5000, () => {
  console.log("app is running on port 5000");
});
