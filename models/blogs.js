import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: String,
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
  slug: { type: String, required: true },
  image: { type: String, required: true },
  isFeatured: Boolean,
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
