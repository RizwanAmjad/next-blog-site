import Blog from "../../models/blogs";
import dbConnect from "../dbConnect";

dbConnect();

export function getAllBlogs() {
  return Blog.find();
}

export function getFeaturedBlogs() {
  return Blog.find({ isFeatured: true });
}

export function getBlog(slug) {
  return Blog.findOne({ slug });
}
