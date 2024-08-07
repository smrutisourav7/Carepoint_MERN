import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URL}/${process.env.DB_NAME}`
    );
    console.log(
      `MongoDB connected DB host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
export default dbConnect;
