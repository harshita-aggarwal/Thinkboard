import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //middleware to parse JSON bodies
app.use(rateLimiter);

app.use("/api/notes", notesRoutes);
connectDB().then(() => {
  app.listen(5001, () => {
    console.log("Server started on Port:", PORT);
  });
});
