import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/authRouter.js";
import contactsRouter from "./routes/contactsRouter.js";
import { authenticate } from "./middleware/authtenticate.js";

import "./db/sequelize.js";
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/contacts", authenticate, contactsRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server is running. Use our API on port: 3000");
});
