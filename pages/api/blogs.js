import nc from "next-connect";
import fs from "fs";

import fileUpload from "../../middleware/fileUpload";
import Blog from "../../models/blogs";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Something broke!");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found");
  },
});

handler.use(fileUpload);

handler.post(async (req, res) => {
  const blog = Blog.build(req.body);
  try {
    // moving content markdown file
    fs.renameSync(req.files.content[0].path, `blogs/${req.body.slug}.md`);
    // moving other images
    const pathToBlogImageDirectory = `blog-images/${req.body.slug}`;
    fs.mkdirSync(pathToBlogImageDirectory);

    console.log(req.files);

    req.files.images.map((image) => {
      fs.renameSync(
        image.path,
        `${pathToBlogImageDirectory}/${image.originalFilename}`
      );
    });

    return res.status(200).json(await blog.save());
  } catch (err) {
    return res.status(400).json(err);
  }
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
