import "reflect-metadata";
import app from "./app";
import { config } from "dotenv";
import { createConnection } from "typeorm";

config();

createConnection()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    console.log("Database connected");
    app.listen(PORT, () => console.log(`App runing on port ${PORT}`));
  })
  .catch((error) => console.log(error));
