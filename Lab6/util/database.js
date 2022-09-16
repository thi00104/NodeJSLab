const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://nguyenanhthi:anhtruc@cluster0.4jlb6hg.mongodb.net/?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("Connected!");
      callback(client);
    })
    .catch((err) => console.error(err));
};

module.exports = mongoConnect;
