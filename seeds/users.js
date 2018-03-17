
exports.seed = function(knex, Promise) {
  var faker = require('faker');

  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: faker.internet.userName(),
          email: faker.internet.exampleEmail()},
        {username: faker.internet.userName(),
          email: faker.internet.exampleEmail()},
        {username: faker.internet.userName(),
          email: faker.internet.exampleEmail()}
      ]);
    });
};
