import express from "express";
import morgan from "morgan";
import contactsRouter from "./routes/contactsRouter.js";

const app = express();

// Middleware
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/contacts", contactsRouter);

// 404 для нерозпізнаних маршрутів
app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// Обробник помилок
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

export default app;
