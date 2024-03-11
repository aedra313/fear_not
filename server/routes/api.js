const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

const CardiogramModel = require('../models/CardiogramModel');
const ModalModel = require('../models/ModalModel');
const QuizModel = require('../models/QuizModel');


// cardiogram get post

router.get('/cardiogram', async (req, res) => {
  try {
    const data = await CardiogramModel.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
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

// video data in modal window get post

router.get('/modal', async (req, res) => {
  try {
    const data = await ModalModel.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/modal', async (req, res) => {
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

    res.status(201).json({message: 'Data saved suсcessfully'});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: 'Server error'});
  }
});

// Quiz URL

router.get('/quiz', async (req, res) => {
  try {
    const data = await QuizModel.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.post('/quiz', async (req, res) => {
  try {
    const {quizURL} = req.body;

    const data = new QuizModel({
      quizURL,
    });

    await data.save();

    res.status(201).json({message: 'Data saved successfully'});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: 'Server error'});
  }
});

router.put('/cardiogram', async (req, res) => {
  try {
    const {day, military, civil, russian, rusIsolation} = req.body; // Получаем данные для обновления из тела запроса

    // Проверяем, есть ли запись с указанным значением поля day в базе данных
    const existingData = await CardiogramModel.findOne({day: Number(day)});
    if (!existingData) {
      return res.status(404).json({message: 'Запись не найдена'});
    }

    // Обновляем поля записи на основе полученных данных
    existingData.military = Array.isArray(military) ? military : military;
    existingData.civil = Array.isArray(civil) ? civil : civil;
    existingData.russian = russian;
    existingData.rusIsolation = rusIsolation;

    // Сохраняем обновленную запись в базе данных
    await existingData.save();

    res.json({message: 'Данные кардиограммы обновлены'});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: 'Ошибка сервера'});
  }
});
// Update modal data by ID
router.put('/modal/:id', async (req, res) => {
  try {
    const {day, videoURL1, description1, videoURL2, description2} = req.body;
    const updatedData = await ModalModel.findByIdAndUpdate(
        req.params.id,
        {
          day,
          videoURL1,
          description1,
          videoURL2,
          description2,
        },
        {new: true}, // Return the updated data
    );

    if (!updatedData) {
      return res.status(404).json({message: 'Data not found'});
    }

    res.json(updatedData);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({message: 'Server error'});
  }
});

module.exports = router;
