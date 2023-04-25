const mongoose = require('mongoose');

const model2Schema = new mongoose.Schema({
  field1: {
    type: String,
    required: true,
  },
  field2: {
    type: Number,
    required: true,
  },
});

const Model2 = mongoose.model('Model2', model2Schema);

module.exports = Model2;
