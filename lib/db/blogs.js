import Blog from "../../models/blogs";

export function getAllBlogs() {
  return Blog.findAll();
}

export function getFeaturedBlogs() {
  return Blog.findAll({ where: { isFeatured: true } });
}

export function getBlog(slug) {
  return Blog.findOne({ where: { slug } });
}
