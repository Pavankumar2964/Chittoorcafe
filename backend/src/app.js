import express from "express";
import cors from "cors";
import morgan from "morgan";
import adminRoutes from "./routes/admin.routes.js";
import menuRoutes from "./routes/menu.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/admin", adminRoutes);
app.use("/menu", menuRoutes);

app.use(errorHandler);

export default app;
