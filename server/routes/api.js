const express = require('express');
const router = express.Router();
const Model1 = require('../models/model1');
const Model2 = require('../models/model2');
const CardiogramModel = require('../models/CardiogramModel');

router.get('/model1', async (req, res) => {
  try {
    const data = await Model1.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Server Error'});
  }
});
router.get('/cardiogram', async (req, res) => {
  try {
    const data = await CardiogramModel.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


router.get('/model2', async (req, res) => {
  try {
    const data = await Model2.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Server Error'});
  }
});

router.post('/cardiogram', async (req, res) => {
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

    res.status(201).json({message: 'Data saved successfully'});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: 'Server error'});
  }
});

module.exports = router;
