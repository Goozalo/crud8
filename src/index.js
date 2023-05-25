import express from "express";
import router from "./routers/user.router.js";
import "dotenv/config";
import "../db/connection.js";

const app = express();

app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Conectado al servidor http://localhost:" + PORT);
});
