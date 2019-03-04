const User = require('../../models/User')
const objection = require('objection')

module.exports = async ctx => {
	try {
		const {name, email, password} = ctx.request.body

		const user = await User.query().insert({name, email, password})

		ctx.status = 200
		ctx.body = {
			data: user
		}
	} catch(e) {
		const message = 'Internal server error'
		ctx.status = e.statusCode || 500

		if (e instanceof objection.ValidationError) ctx.status = 422

		ctx.body = {
			error: e.data || {message}
		}
	}
}