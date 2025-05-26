const dotenv = require('dotenv');
const { defineConfig } = require('drizzle-kit');

dotenv.config();

module.exports = defineConfig({
  schema: './models/schema.js',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL
  }
});
