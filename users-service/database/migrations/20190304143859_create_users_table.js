exports.up = function (knex, Promise) {
	return knex.schema.createTable('users', t => {
		t.uuid('id').primary();
		t.string('name', 256);
		t.string('email', 256).unique();
		t.string('password', 64);
		t.timestamp('created_at', true)
			.notNullable()
			.defaultTo(knex.fn.now());
		t.timestamp('updated_at', true)
			.notNullable()
			.defaultTo(knex.fn.now())
	})
};

exports.down = function (knex, Promise) {
	return knex.schema.dropTable('users')
};
