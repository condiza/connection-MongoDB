import { ConfigFunction, config } from "dotenv";

config();

export const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/tienda';
export const PORT = process.env.PORT || 5000;