
exports.up = function (knex) {
    return knex.schema.createTable('cluckrs', t => {
        t.bigIncrements('id');
        t.string('username');
        t.string('image_url');
        t.string('content');
        t.timestamp('createdAt').defaultTo(knex.fn.now());
        t.timestamp('updatedAt').defaultTo(knex.fn.now());
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('cluckrs')
};