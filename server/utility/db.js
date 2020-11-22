import mongoose from "mongoose";

export const connectDb = () => {
  mongoose.connect(
    `mongodb+srv://app-upload-user:${process.env.MONGO_ATLAS_SECRET}@cluster0.9eoox.mongodb.net/<dbname>?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
};
