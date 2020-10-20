import mysql from 'mysql';
require("dotenv").config();


const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    port: 3306,
    password: process.env.DB_PASSWORD,
    database: 'bamazon',
})

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) =>
        new Promise((resolve, reject) => {
            connection.query(queryString, escapedValues, (error, results, fields) => {
                if (error) reject(error);
                resolve({ results, fields });
            })
        }),
    end: () => connection.end(),
}