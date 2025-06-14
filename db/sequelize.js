import { Sequelize } from "sequelize";

console.log("Connecting as:", process.env.DB_USER, process.env.DB_PASSWORD);

export const sequelize = new Sequelize({
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

try {
  await sequelize.authenticate();
  console.log("Successfully connect database");
} catch (error) {
  console.log("Failed connect database");
  console.log(error);
  process.exit(1);
}

export default sequelize;
