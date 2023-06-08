const mongoose = require('mongoose');

const uri =
    'mongodb+srv://fear_not:Hdtb8ZEiaFyDw0dN@squirrel.rujxob1.mongodb.net/fear_not_db?retryWrites=true&w=majority';
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB database.');
});

module.exports = mongoose;
module.exports = db;


