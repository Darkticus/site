module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
      name: {
        type: Sequelize.STRING,
      },
      picture: {
        type: Sequelize.STRING,
      },
      body: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      sale: {
        type: Sequelize.STRING,
      },
      smallbody: {
        type: Sequelize.STRING,
      },
    });
  
    return Products;
  };