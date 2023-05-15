import * as dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
  })
  .promise();

const getUsers = async () => {
  const [result] = await pool.query('SELECT * FROM user');
  return result;
};

console.log(result);
