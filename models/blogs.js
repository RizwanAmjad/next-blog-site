import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database.sqlite",
});

const Blog =
  sequelize.models.Blogs ||
  sequelize.define("Blogs", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, defaultValue: Date.now },
    description: { type: DataTypes.STRING, allowNull: false },
    slug: { type: DataTypes.STRING, allowNull: false },
    image: { type: DataTypes.STRING, allowNull: false },
    isFeatured: { type: DataTypes.BOOLEAN, defaultValue: false },
  });

(async () => {
  console.log("sequelize");
  await sequelize.createSchema();
  await sequelize.sync();
})();

export default Blog;
