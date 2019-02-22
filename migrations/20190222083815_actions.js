
exports.up = function(knex, Promise) {
    return knex.schema.createTable('actions', function(tbl){
      tbl.increments();
      tbl.string('notes',[100]).notNullable();
      tbl.string('description',[250]).notNullable();
      tbl.boolean('completed').notNullable();
      tbl.integer('project_id').unsigned().references('id').inTable('projects')
      .onDelete('CASCADE').onUpdate('CASCADE');
    })
};
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('actions');
  };
