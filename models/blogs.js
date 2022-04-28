import { Sequelize, DataTypes } from "sequelize";

const dbURI = process.env.DB_URI ? "database.sqlite" : process.env.DB_URI;

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: dbURI,
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
  await sequelize.createSchema();
  await sequelize.sync();
})();

export default Blog;
