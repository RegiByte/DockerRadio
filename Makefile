restart:
	docker-compose up -d $(service)

rebuild:
	docker-compose up -d --build $(service)

install:
	docker-compose exec $(service) yarn install

logs:
	docker-compose logs $(service)

interact:
	docker-compose exec $(service) sh

access:
	sudo chmod 777 -R ./
