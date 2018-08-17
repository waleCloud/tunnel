module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    clapCount: { type: DataTypes.INTEGER, defaultValue: 0 },
  }, {});
  Post.associate = (models) => {
    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
      as: 'author',
    });
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comment',
    });
    Post.hasMany(models.Clap, {
      foreignKey: 'postId',
      as: 'clap',
    });
  };
  return Post;
};
