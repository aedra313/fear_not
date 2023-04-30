const {MongoClient} = require('mongodb');

const username = encodeURIComponent('fear_not');
const password = encodeURIComponent('Hdtb8ZEiaFyDw0dN');
const cluster = 'Squirrel';
const authSource = 'fear_not_db';
const authMechanism = 'SCRAM-SHA-256';

const uri = `mongodb+srv://fear_not:Hdtb8ZEiaFyDw0dN@squirrel.rujxob1.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri);

async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas!');
  } catch (err) {
    console.log('Error connecting to MongoDB Atlas:', err);
  } finally {
    await client.close();
  }
}

testConnection();
