"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("projects", [
      {
        name: "Initial Project",
        priority: 2,
        description: "Learning",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Second Project",
        priority: 3,
        description: "Learning",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("projects", null, {});
  }
};
