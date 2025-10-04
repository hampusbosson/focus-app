import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
// Parse JSON
app.use(express.json());

// Security and logs
app.use(helmet());
app.use(morgan("dev"));

app.use(cors());

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});