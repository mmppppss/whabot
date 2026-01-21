import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "whabot",
    port: 3306,
});

export const db = drizzle(pool);
