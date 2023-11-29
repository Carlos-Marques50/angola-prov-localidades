exports.up = function(knex) {
   return knex.schema.createTable('province', table => {
     table.increments('id').primary();
     table.string('name').notNullable();
     table.string('code', 7).notNullable();
     table.string('capital').notNullable();
     table.string('language').notNullable();
     table.decimal('latitude', 10, 6).notNullable(); // 10 dígitos no total, 6 após o ponto decimal
     table.decimal('longitude', 10, 6).notNullable(); // 10 dígitos no total, 6 após o ponto decimal
     table.integer('area').notNullable();
   });
 };
 
 exports.down = function(knex) {
   return knex.schema.dropTable('province');
 };
 