const mongoose = require('mongoose');

const connectDB = async () => {

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb Connected: ${conn.connection.host}`.cyan.underline.bold);

  } catch(e) {
    console.log(`Can't connect to DB:${e.message}`);

  }
}

module.exports = connectDB;