module.exports = (sequelize, Sequelize) => {
  const Article = sequelize.define("articles", {
    name: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.STRING,
    },
    img: {
      type: Sequelize.STRING,
    },
  });

  return Article;
};
