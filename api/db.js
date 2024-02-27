import mysql from 'mysql';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
require('custom-env').env('staging');


export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database:"crud"
});


