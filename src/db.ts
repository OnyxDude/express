import mysql from "mysql12/promise";
import { ConnectionOptions } from "mysql12";
import dotenv from "dotenv";

dotenv.config();

const configOptions: ConnectionOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const pool = mysql.createPool(configOptions);

export default pool;
