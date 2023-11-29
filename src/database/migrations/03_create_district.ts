exports.up = (knex) => {
   return knex.schema.createTable('district', table => {
      table.increments('id').primary();

      table.integer('province_id')
         .notNullable()
         .unsigned() // Adicionado para indicar que é uma referência não assinada
         .references('id')
         .inTable('province');

      table.integer('city_id')
         .notNullable()
         .unsigned() // Adicionado para indicar que é uma referência não assinada
         .references('id')
         .inTable('city');

      table.string('name').notNullable();
   });
}

exports.down = (knex) => {
   return knex.schema.dropTable('district');
}