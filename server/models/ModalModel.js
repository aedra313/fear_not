const mongoose = require('mongoose');

const ModalSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  videoURL1: {
    type: String,
    required: true,
  },
  description1: {
    type: String,
    required: true,
  },
  videoURL2: {
    type: String,
  },
  description2: {
    type: String,
  },
});

const ModalModel = mongoose.model('modal', ModalSchema);

module.exports = ModalModel;
