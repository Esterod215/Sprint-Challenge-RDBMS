
exports.up = function(knex, Promise) {
    return knex.schema.createTable('projects', function(tbl){
      tbl.increments();
      tbl.text('name').notNullable();
      tbl.string('description',[250]).notNullable();
      tbl.boolean('completed').notNullable();
    })
};
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('projects');
  };

