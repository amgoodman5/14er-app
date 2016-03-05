exports.up = function(knex, Promise) {
  return knex.schema.createTable('14erTrails', function(table){
    table.increments();
    table.integer('mountainid');
    table.string('name');
    table.integer('gain');
    table.float('miles');
    table.string('class');
    table.text('link');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('14erTrails');
};
