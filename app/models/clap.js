module.exports = (sequelize, DataTypes) => {
  const Clap = sequelize.define('Clap', {
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    clapCount: DataTypes.INTEGER,
  }, {});
  Clap.associate = (models) => {
    Clap.belongsTo(models.User, {
      foreignKey: 'UserId',
      onDelete: 'CASCADE',
    });
  };
  return Clap;
};
