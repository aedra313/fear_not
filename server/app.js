const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
// eslint-disable-next-line new-cap
const router = express.Router();

const {MongoClient} = require('mongodb');
const Model1 = require('./models/model1');
const Model2 = require('./models/model2');

const uri = 'mongodb+srv://fear_not:password@cluster0.es9x3.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


async function getItems() {
  await client.connect();
  const collection = client.db('mydatabase').collection('items');
  const items = await collection.find({}).toArray();
  await client.close();
  return items;
}

app.get('/items', async (req, res) => {
  const items = await getItems();
  res.send(items);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});


router.get('/api/model1', async (req, res) => {
  try {
    const data = await Model1.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Server Error'});
  }
});

router.get('/api/model2', async (req, res) => {
  try {
    const data = await Model2.find({});
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: 'Server Error'});
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
