import { config } from "dotenv";
import { join } from "path";
config();

const dbConfig = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  entities: [join(__dirname, "./src/entities/**/*.ts")],
  migrations: [join(__dirname, "./src/migrations/**/*.ts")],
  cli: {
    entitiesDir: join(__dirname, "./src/entities"),
    migrationsDir: join(__dirname, "./src/migrations"),
  },
};

const dbProductionConfig = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  logging: false,
  entities: [join(__dirname, "./build/src/entities/**/*.js")],
  migrations: [join(__dirname, "./build/src/migrations/**/*.js")],
  cli: {
    entitiesDir: join(__dirname, "./build/src/entities"),
    migrationsDir: join(__dirname, "./build/src/migrations"),
  },
  ssl: { rejectUnauthorized: false },
};

module.exports =
  process.env.NODE_ENV === "production" ? dbProductionConfig : dbConfig;
