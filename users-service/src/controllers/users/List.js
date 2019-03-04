const Users = require('../../models/User')

module.exports = async ctx => {
	try {
		const users = await Users.query()

		ctx.status = 200
		ctx.body = {
			data: users
		}
	} catch (e) {
		const message = 'Internal server error'
		ctx.status = e.statusCode || 500
		ctx.body = {
			error: e.data || {message}
		}
	}
}