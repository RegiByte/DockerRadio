const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const usersRouter = require('./routes/users')

const PORT = process.env.PORT || 3000;

module.exports = new Koa()
	.use(bodyParser())
	.use(usersRouter.routes())
	.listen(PORT, () => console.log(`Users service running on port ${PORT}`));