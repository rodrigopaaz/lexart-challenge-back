module.exports = (sequelize, DataTypes) => {
  const Messages = sequelize.define(
    'Messages',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      file: DataTypes.BLOB('long'),
      createdAt: {
        type: DataTypes.DATE(6),
        defaultValue: DataTypes.NOW(6),
      },
    },
    {
      timestamps: false,
      tableName: 'messages',
      underscored: true,
    },
  );

  Messages.associate = (models) => {
    Messages.belongsTo(models.Users, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return Messages;
};
