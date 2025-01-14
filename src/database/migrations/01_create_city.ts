exports.up = (knex) => {
   return knex.schema.createTable('city', table => {
      table.increments('id').primary();

      table.integer('province_id')
         .notNullable()
         .unsigned() // Adicionado para indicar que é uma referência não assinada
         .references('id')
         .inTable('province');

      table.string('name').notNullable();
      table.string('code').notNullable();
   });
}

exports.down = (knex) => {
   return knex.schema.dropTable('city');
}
