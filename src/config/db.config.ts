import mongoose from 'mongoose';
import { MONGO_URL } from '.';

const dbConnection = async () => {
  try {
    mongoose.connect(MONGO_URL as string);
    console.log('Database connection established');
  } catch (error) {
    console.log(error);
  }
};

export default dbConnection;
