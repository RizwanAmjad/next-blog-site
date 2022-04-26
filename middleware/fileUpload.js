import nextConnect from "next-connect";
import multiparty from "multiparty";

const middleware = nextConnect();

middleware.use(async (req, res, next) => {
  const form = new multiparty.Form();

  await form.parse(req, function (err, fields, files) {
    const body = {};
    Object.keys(fields).forEach(function (name) {
      body[name] = fields[name][0];
    });
    req.body = body;
    req.files = files;
    next();
  });
});

export default middleware;
