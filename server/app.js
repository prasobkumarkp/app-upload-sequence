import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

import applicationsRoutes from "./api/routes/applications.js";
import { connectDb } from "./utility/db.js";

const app = express();
connectDb();

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/applications", applicationsRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app;
