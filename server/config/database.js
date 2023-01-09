const mongoose = require('mongoose');

const connectDB = async () => {

  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI);
    const conn = await mongoose.connect('mongodb://mongoadmin:secret@localhost:27017');
    console.log(`Mongodb Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch(e) {
    console.log(`Can't connect to DB:${e.message}`);
  }
}

module.exports = connectDB;