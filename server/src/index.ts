import express from "express";
import bodyParser from "body-parser";
import connection from "./config/connection";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use("/api", router);

const port = process.env.PORT || 5002;
app.listen(port, async () => {
  await connection();
  console.log(`🚀 Server is running on port ${port}.`);
});