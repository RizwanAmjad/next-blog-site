import mongoose from "mongoose";

export default async function dbConnect() {
  if (mongoose.connections[0].readyState) {
    console.log("Connected");
  } else {
    mongoose.connect("mongodb://localhost/next-blogs", () => {
      console.log("Connecting to MongoDB... Success");
    });
  }
}
