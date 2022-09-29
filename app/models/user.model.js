module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false
    },
    activityDate: {
      type: Sequelize.DATE,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    ID: {
      type: Sequelize.BIGINT,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    regDate: {
      type: Sequelize.DATE,
      allowNull: false
    }

  });

  return User;
};
