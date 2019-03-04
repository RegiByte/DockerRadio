const Router = require('koa-router');
const {List, View, Create} = require('../../controllers/users');

module.exports = new Router()
	.get('/', List)
	.get('/:id', View)
	.post('/', Create);