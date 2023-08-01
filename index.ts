import express from "express";
import { AdminRoute, VandorRoute } from "./routes";

const app = express();

app.use("/api/v1/admin", AdminRoute);
app.use("/api/v1/vandor", VandorRoute);



app.listen(5000, () => {
  console.log("app is running on port 5000");
});
