'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.changeColumn('Users', 'username', {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      set(val) {
        this.setDataValue('username', val.toLowerCase());
      }
    });

    queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
      unique: true,
      set(val) {
        this.setDataValue('email', val.toLowerCase());
      }
    });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
