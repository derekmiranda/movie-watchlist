'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    queryInterface.changeColumn('Users', 'email', {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
      unique: true,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      set(val) {
        this.setDataValue('email', val.toLowerCase());
      }
    });

    queryInterface.changeColumn('Users', 'passHash', {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
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
