const mongoose = require('mongoose');

const model1Schema = new mongoose.Schema({
  field1: {
    type: String,
    required: true,
  },
  field2: {
    type: String,
    required: true,
  },
});

const Model1 = mongoose.model('Model1', model1Schema);

module.exports = Model1;
