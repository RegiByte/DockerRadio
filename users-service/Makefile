yarn:
	docker exec -it radio_users-service_1 yarn install

migration:
	docker exec -it radio_users-service_1 yarn migration $(name)

migration\:run:
	docker exec -it radio_users-service_1 yarn migration:run

migration\:rollback:
	docker exec -it radio_users-service_1 yarn migration:rollback

seeder:
	docker exec -it radio_users-service_1 yarn seeder $(name)

seeder\:run:
	docker exec -it radio_users-service_1 yarn seeder:run

test\:run:
	docker exec -it radio_users-service_1 yarn test