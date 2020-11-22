import mongoose from "mongoose";

const applicationScheme = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  version: String,
  size: Number,
});

export default mongoose.model("Application", applicationScheme);
