const {MongoClient} = require('mongodb');

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
