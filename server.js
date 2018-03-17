// objeto de coneccion
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host     : '127.0.0.1',
      user     : 'root',
      password : 'root',
      database : 'myapp_test',
      charset  : 'utf8'
    }
  });
  knex('users').select().then(function(Nombres_user){
      // este metodo es un una promesa se completo con then
    console.log(Nombres_user);
});
