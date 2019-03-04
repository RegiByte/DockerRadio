const Model = require('../lib/model')

class User extends Model {
	static get tableName() {
		return 'users'
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['name', 'email', 'password'],
			properties: {
				id: {type: 'uuid'},
				name: {type: 'string', minLength: 3, maxLength: 256},
				email: {type: 'string', minLength: 3, maxLength: 256},
				password: {type: 'string', minLength: 3, maxLength: 64},
			}
		}
	}

	$beforeInsert() {
		super.$beforeInsert();
	}
}

module.exports = User