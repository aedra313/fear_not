/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

/* const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const functions = require("firebase-functions");*/
const express = require("express");
const cors = require("cors");
const app = express();
const db = require("../db");
app.use(cors());
const apiRouter = require("../routes/api");

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
