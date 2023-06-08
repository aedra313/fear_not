const express = require("express");
// eslint-disable-next-line new-cap
const router = express.Router();

const CardiogramModel = require("../models/CardiogramModel");
const ModalModel = require("../models/ModalModel");
const QuizModel = require("../models/QuizModel");


// cardiogram get post

router.get("/cardiogram", async (req, res) => {
  try {
    const data = await CardiogramModel.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.post("/cardiogram", async (req, res) => {
  try {
    const {day, id, military, civil, russian, rusIsolation} = req.body;

    const data = new CardiogramModel({
      day,
      id,
      military,
      civil,
      russian,
      rusIsolation,
    });

    await data.save();

    res.status(201).json({message: "Data saved successfully"});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server error"});
  }
});

// video data in modal window get post

router.get("/modal", async (req, res) => {
  try {
    const data = await ModalModel.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.post("/modal", async (req, res) => {
  try {
    const {day, videoURL1, description1, videoURL2, description2} = req.body;

    const data = new ModalModel({
      day,
      videoURL1,
      description1,
      videoURL2,
      description2,
    });

    await data.save();

    res.status(201).json({message: "Data saved successfully"});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server error"});
  }
});

// Quiz URL

router.get("/quiz", async (req, res) => {
  try {
    const data = await QuizModel.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.post("/quiz", async (req, res) => {
  try {
    const {quizURL} = req.body;

    const data = new QuizModel({
      quizURL,
    });

    await data.save();

    res.status(201).json({message: "Data saved successfully"});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: "Server error"});
  }
});

module.exports = router;
