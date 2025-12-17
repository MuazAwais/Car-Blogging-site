import mysql from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';
import dotenv from 'dotenv';

dotenv.config();

const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_PORT = process.env.DB_PORT || '3306';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || 'car_blog';

let db;
let connection;

export async function initDB() {
  try {
    // First, create connection to MySQL (without specifying database)
    const initialConnection = await mysql.createConnection({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
    });

    // Create database if it doesn't exist
    await initialConnection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
    await initialConnection.end();

    // Now create the main connection with database selected
    connection = await mysql.createConnection({
      host: DB_HOST,
      port: DB_PORT,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
    });

    // Initialize Drizzle ORM
    db = drizzle(connection);

    // Create tables manually
    await connection.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS blogs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        img VARCHAR(1024) NOT NULL,
        title TEXT NOT NULL,
        date VARCHAR(100) NOT NULL,
        author VARCHAR(255) NOT NULL,
        content TEXT NOT NULL,
        authorName VARCHAR(255) NOT NULL,
        authorBio TEXT NOT NULL,
        authorAvatar VARCHAR(1024) NOT NULL,
        category_id INT DEFAULT NULL,
        views INT DEFAULT 0,
        isTrending TINYINT(1) DEFAULT 0,
        isLatest TINYINT(1) DEFAULT 0,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
      ) ENGINE=InnoDB;
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255),
        message TEXT,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS subscriptions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `);

    await connection.query(`
      CREATE TABLE IF NOT EXISTS testimonials (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        content TEXT,
        approved TINYINT(1) DEFAULT 0,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB;
    `);

    console.log('Database initialized successfully with Drizzle ORM');
    return db;
  } catch (error) {
    console.error('Database initialization error:', error.message);
    throw error;
  }
}

export function getDB() {
  if (!db) throw new Error('Database not initialized. Call initDB() first.');
  return db;
}

export function getConnection() {
  if (!connection) throw new Error('Database connection not initialized. Call initDB() first.');
  return connection;
}

// Keep getPool for backward compatibility
export function getPool() {
  return getConnection();
}

export default {
  initDB,
  getDB,
  getConnection,
  getPool,
};
