const uuid = require('uuid/v4');

exports.seed = async function(knex, Promise) {
	await knex('users').where('email', process.env.ADMIN_EMAIL).del();

	await knex('users').insert([
		{
			id: uuid(),
			name: process.env.ADMIN_NAME,
			email: process.env.ADMIN_EMAIL,
			password: process.env.ADMIN_PASSWORD
		}
	])
};
