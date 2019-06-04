import Sequelize from "sequelize";
import sequelize from "../database";
import Task from "./tasks";

class Project extends Model {}
Project.init(
  attributes,
  {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    priority: DataTypes.INTEGER,
    description: DataTypes.STRING
  },
  {
    sequelize,
    modelName: "project"
  }
);

Project.belongsToMany(Task, { foreignKey: "project_id", sourceKey: "id" });

export default Project;
