const mongodb = require("mongodb");
const db = require("../util/database").getDb;

const ObjectId = mongodb.ObjectId;
class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }

  save() {
    const db = getDb();
    return db.collection("users").insertOne(this);
  }

  static findById(userId) {
    const db = getDb();
    return db.collection("users").findOne({ _id: ObjectId(userId).next() });
  }
}

module.exports = User;
