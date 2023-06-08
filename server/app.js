const express = require("express");
const cors = require("cors");
const app = express();
const db = require("./db");
app.use(cors());
const apiRouter = require("./routes/api");

const PORT = 3000;

app.use(express.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});
