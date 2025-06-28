import mongoose from "mongoose";
const mongouri = process.env.MONGO_URI;
if (!mongouri) throw new Error(" MONGO_URI is not defined!");
const cached = global.mongoose || { conn: null, promise: null };

const connectDB = () => {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(mongouri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((conn) => conn);
  }
  cached.conn = cached.promise;
  return cached.conn;
};

export default connectDB;
