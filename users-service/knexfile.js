const path = require('path');
const BASE_PATH = path.join(__dirname, 'database');

module.exports = {
	test: {
		client: process.env.DB_CLIENT_TEST,
		connection: process.env.DB_CONNECTION_TEST,
		migrations: {
			tableName: 'migrations',
			directory: path.join(BASE_PATH, 'migrations')
		},
		seeds: {
			directory: path.join(BASE_PATH, 'seeds')
		}
	},

	development: {
		client: process.env.DB_CLIENT,
		connection: process.env.DB_CONNECTION,
		migrations: {
			tableName: 'migrations',
			directory: path.join(BASE_PATH, 'migrations')
		},
		seeds: {
			directory: path.join(BASE_PATH, 'seeds')
		}
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password'
		},
		pool: {
			min: 2,
			max: 10
		},
		migrations: {
			tableName: 'migrations',
		}
	}

};
