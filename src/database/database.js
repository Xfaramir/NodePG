import Sequelize from "sequelize";
const sequelize = new Sequelize(
  "postgres://jbarrera:postgress@localhost:5432/nodeserver"
);
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

export default sequelize;
