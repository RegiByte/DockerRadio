process.env.NODE_ENV = 'test';
process.env.PORT = 3001;
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src');
const knex = require('../src/lib/knex');

chai.use(chaiHttp);

describe('Routes: users', () => {
	beforeEach(() => {
		return knex.migrate.rollback()
			.then(() => knex.migrate.latest())
			.then(() => knex.seed.run())
	});

	afterEach(() => {
		return knex.migrate.rollback()
	});

	describe('Get /', () => {
		test('Should return array of posts', async () => {
			const res = await chai.request(server).get('/');
			expect(res.status).toEqual(200);
			expect(res.body.data).toBeDefined()
		})
	});

	describe('Get /:id', function () {
		test('Should return multiple posts', async () => {
			const posts = await chai.request(server).get('/');
			const [first] = posts.body.data;
			const res = await chai.request(server).get(`/${first.id}`);
			expect(res.status).toEqual(200);
			expect(res.body.data).toBeDefined()
		})
	});

	describe('Post /', function () {
		test('Should return single user after insert', async () => {
			const res = await chai.request(server).post('/')
				.send({
					name: 'jhon doe',
					email: 'jhon@doe.com',
					password: '123456'
				});

			expect(res.status).toEqual(200);
			expect(res.body.data).toBeDefined();
		});

		test('Should return error status, message, when body invalid', async () => {
			const res = await chai.request(server).post('/')
				.send({
					name: ''
				});

			expect(res.status).toEqual(422);
			expect(res.body.error).toBeDefined()
		})
	})
});