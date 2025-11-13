const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('startup');
const userCollection = db.collection('user');
const postCollection = db.collection('post');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
  try {
    await db.command({ ping: 1 });
    console.log(`Connect to database`);
  } catch (ex) {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  }
})();

function getUserByField(field, value) {
  return userCollection.findOne(Object.fromEntries([[field, value]]));
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addPost(post) {
  await postCollection.insertOne(post);
}

addPost({
  id: 0,
  message: "User Unknown completed all their tasks today!",
  responses: [
    { user: "Alice", message: "Way to go!" },
    { user: "Bob", message: "You can do this!" },
  ]
})

module.exports = {
  getUserByField,
  addUser,
  updateUser,
};
