module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
    },
    pasword: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    block_unblock_user: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
