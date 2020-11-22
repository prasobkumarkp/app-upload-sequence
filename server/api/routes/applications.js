import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import { parseApk } from "../../utility/fileParser.js";

import Application from "../models/application.js";

const router = express.Router();
const upload = multer({ limits: { fileSize: 50 * 1024 * 1024 } }).single(
  "file"
);

router.get("/", async (req, res) => {
  var applications = await Application.find().exec();
  res.status(200).json({
    applications: applications,
  });
});

router.post("/", upload, async (req, res) => {
  try {
    if (req.file) {
      var manifest = await parseApk(req.file);
      const application = new Application({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        version: manifest.version,
        size: req.file.size,
      });
      const status = await application.save();
      const { _id, name, description, version, size } = status;
      res.status(201).json({
        message: "Handling POST requests",
        application: { _id, name, description, version, size },
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/:applicationId", async (req, res) => {
  const id = req.params.applicationId;
  var applications = await Application.deleteOne({ _id: id }).exec();
  res.status(200).json({
    applications: applications,
  });
});

export default router;
