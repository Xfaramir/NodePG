import Project from "./projects";

module.exports = (sequelize, DataTypes) => {
  const tasks = sequelize.define(
    "tasks",
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      description: DataTypes.STRING,
      project_id: DataTypes.INTEGER
    },
    {}
  );
  tasks.associate = function(models) {
    // associations can be defined here
  };
  return tasks;
};

Task.belongsTo(Project, { foreignKey: "project_id", sourceKey: "id" });
