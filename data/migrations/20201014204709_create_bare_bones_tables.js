exports.up = async (knex) => {
  await knex.schema
    // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('groomer', (table) => {
      table.increments('id');
      table.string('name');
    });
  await knex.schema
    // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('customer', (table) => {
      table.increments('id');
      table.string('name');
    });
  await knex.schema
    // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('pet_types', (table) => {
      table.increments('id');
      table.string('breed');
    });
  await knex.schema
    // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('pets', (table) => {
      table.increments('id');
      table.bigint('pet_types_id').references('id').inTable('pet_types');
      table.string('name').notNullable();
    });
  await knex.schema
    // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('services', (table) => {
      table.increments('id');
      table.string('service_name').notNullable();
    });
  await knex.schema
    // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('groomer_services', (table) => {
      table.bigint('groomer_id').references('id').inTable('groomer');
      table.bigint('services_id').references('id').inTable('services');
      table.bigint('services_price');
    });
  await knex.schema
    // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('customer_pets_type', (table) => {
      table.bigint('customer_id').references('id').inTable('customer');
      table.bigint('pets_id').references('id').inTable('pets');
    });
  await knex.schema
    // .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('groomer_schedule', (table) => {
      table.increments('id');
    });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('customer_pets_type');
  await knex.schema.dropTableIfExists('groomer_services');
  await knex.schema.dropTableIfExists('groomer_schedule');
  await knex.schema.dropTableIfExists('services');
  await knex.schema.dropTableIfExists('pets');
  await knex.schema.dropTableIfExists('pet_types');
  await knex.schema.dropTableIfExists('customer');
  await knex.schema.dropTableIfExists('groomer');
};
