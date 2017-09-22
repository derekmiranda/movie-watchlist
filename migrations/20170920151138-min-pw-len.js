'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn('Users', 'passHash', {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        origPasswordWithinLen: origPw => {
          if (origPw.length < 8) {
            throw new Error('Password too short');
          } else if (origPw.length > 16) {
            throw new Error('Password too long');
          }
        },
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
