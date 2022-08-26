import express = require("express");
import { admRouter, user } from "./routes";
const app = express();
app.use(express.json());

app.use("/api/controlers", admRouter);
app.use("/api", user);

export default app;
