const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
  day: {
    type: Number,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  military: {
    type: mongoose.Schema.Types.Mixed,
  },
  civil: {
    type: mongoose.Schema.Types.Mixed,
  },
  russian: {
    type: mongoose.Schema.Types.Mixed,
  },
  rusIsolation: {
    type: Boolean,
    required: true,
  },
});

const DataModel = mongoose.model('Data', DataSchema);

module.exports = DataModel;
