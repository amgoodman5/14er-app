exports.up = function(knex, Promise) {
  return knex.schema.createTable('14erList', function(table){
    table.increments();
    table.integer('class');
    table.string('name');
    table.integer('elevation');
    table.string('range');
    table.string('location');
    table.text('description');
    table.text('image');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('14erList');
};
