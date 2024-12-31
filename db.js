const mysql = require("mysql2/promise");

let pool;

async function initializeDBConnection() {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
    console.log("Database connection pool created successfully.");
  } catch (error) {
    console.error("Error initializing database connection:", error.message);
    process.exit(1);
  }
}

initializeDBConnection();

module.exports = pool;
