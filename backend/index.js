import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import ProductRoute from "./routes/ProductRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(ProductRoute);
cd;
app.listen(5000, () => console.log("Serve up and Running"));
