import { Sequelize } from 'sequelize';
import config from './env.js';

// Correct Sequelize instance connection
const sequelize = new Sequelize(config.DBNAME, config.PG_USER, config.PG_PASS, { 
  host: "ep-frosty-bonus-a4o40djd-pooler.us-east-1.aws.neon.tech",     // Database host
  port: 5432,            // PostgreSQL default port
  dialect: 'postgres',   // Specify PostgreSQL as the dialect
});

// Test the connection (optional utility function)
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

export { sequelize, testConnection };
