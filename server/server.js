import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "url of the react",
    credentials: true,
  }),
);

app.listen(PORT, () => {
  connectDb();
  console.log(`You on port ${PORT}`);
});
