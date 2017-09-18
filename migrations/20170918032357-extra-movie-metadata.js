'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    function defineStrFieldDefault(col) {
      queryInterface.changeColumn('Movies', col, {
        type: Sequelize.STRING,
        defaultValue: '',
      })
    }
    
    [
      'director',
      'genres',
      'actors',
      'notes'
    ].forEach(defineStrFieldDefault);
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
