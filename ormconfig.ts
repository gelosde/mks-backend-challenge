const dotenv = require("dotenv");
const pats = require("path");

dotenv.config();

const dbConfig = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  entities: [pats.join(__dirname, "./src/entities/**/*.ts")],
  migrations: [pats.join(__dirname, "./src/migrations/**/*.ts")],
  cli: {
    entitiesDir: pats.join(__dirname, "./src/entities"),
    migrationsDir: pats.join(__dirname, "./src/migrations"),
  },
};

const dbProductionConfig = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  entities: [pats.join(__dirname, "./build/src/entities/**/*.js")],
  migrations: [pats.join(__dirname, "./build/src/migrations/**/*.js")],
  cli: {
    entitiesDir: pats.join(__dirname, "./build/src/entities"),
    migrationsDir: pats.join(__dirname, "./build/src/migrations"),
  },
  ssl: { rejectUnauthorized: false },
};

module.exports =
  process.env.NODE_ENV === "production" ? dbProductionConfig : dbConfig;
