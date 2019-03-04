const objection = require('objection')
const uuid = require('uuid/v4')
const knex = require('./knex')
const _ = require('lodash')

objection.Model.knex(knex)

class Model extends objection.Model {
	$beforeInsert() {
		this.id = uuid()
	}

	$beforeValidate(jsonSchema, json, opt) {
		return jsonSchema
	}

	$beforeUpdate() {
		this.updated_at = new Date()
	}

	$formatDatabaseJson(json) {
		return _.mapKeys(json, (value, key) => _.snakeCase(key))
	}

	$parseDatabaseJson(json) {
		return _.mapKeys(json, (value, key) => _.camelCase(key))
	}
}

module.exports = Model