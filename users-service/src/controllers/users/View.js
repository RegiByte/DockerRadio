const User = require('../../models/User');

module.exports = async ctx => {
	try {
		const {id} = ctx.params;
		const [user] = await User.query().where({id});

		ctx.status = 200;
		ctx.body = {data: user}
	} catch (e) {
		const message = 'Internal server error';
		ctx.status = e.statusCode || 500;
		ctx.body = {
			error: e.data || {message}
		}
	}
};