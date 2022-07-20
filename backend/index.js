import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import routes from "./routes/routes.js";

// .env
dotenv.config();

const app = express();

// mongodb
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log(`Database is connected..`));

// cors
app.use(cors());

//format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// cookie-parser
app.use(cookieParser());

// routes
app.use(routes);

// port
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running....`));
