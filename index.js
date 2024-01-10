import express from "express";
import compRoutes from "./routes/competition.js";
const app = express();
app.use(express.json());

app.use("/api/competitions", compRoutes);

app.listen(5000, () => {
  console.log("Server Connected.");
});
