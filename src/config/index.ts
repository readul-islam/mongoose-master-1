import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

//
const port = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

export { port, MONGO_URL };
