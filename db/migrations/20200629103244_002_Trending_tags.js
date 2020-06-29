
exports.up = function (knex) {
    return knex.schema.createTable('trends', t => {
        t.bigIncrements('id')
        t.string('hashtag')
        t.integer('count')
    })
};

exports.down = function (knex) {
return knex.schema.dropTable('trends')
};