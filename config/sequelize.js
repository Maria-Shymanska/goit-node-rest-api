import { Sequelize } from "sequelize";
import "dotenv/config";

// Створюємо екземпляр Sequelize
const sequelize = new Sequelize({
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Successfully connected to database");

    await sequelize.sync(); // Створює таблиці (якщо ще не існують)
    console.log("✅ All models synced");
  } catch (error) {
    console.log("❌ Failed to connect to database");
    console.error(error);
    process.exit(1);
  }
})();

export default sequelize;
