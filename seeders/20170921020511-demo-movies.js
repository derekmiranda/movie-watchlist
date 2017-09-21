'use strict';

const recordsWithDateCols = records => (
  records.map(record => Object.assign(record, {
    createdAt: new Date(),
    updatedAt: new Date()
  }))
)

const records = recordsWithDateCols([
  {
    title: 'Toy Story',
    director: 'John Lasseter',
    genres: 'Animated',
    actors: 'Woody and Buzz',
    notes: 'Great movie',
  },
  {
    title: 'Toy Story 2',
    director: 'John Lasseter',
    genres: 'Animated',
    actors: 'Woody and Buzz',
    notes: 'Also a great movie',
  },
  {
    title: 'Toy Story 3',
    director: 'Not John Lasseter?',
    genres: 'Animated',
    actors: 'Woody and Buzz',
    notes: 'Pretty good movie',
  },
])

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Movies', records)
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
