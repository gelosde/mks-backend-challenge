import * as express from "express";
import * as router from "./routes";
const app = express();
app.use(express.json());

app.use("/api/adm/", router.admRouter);
app.use("/api/user/", router.user);

export default app;
