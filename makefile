dev:
	docker-compose run --rm --service-ports --name dsasite gridsome gridsome develop

build:
	docker-compose run --rm gridsome gridsome build

serve-static:
	docker-compose run --rm --service-ports --name dsasite-static serve-static

stop:
	docker kill dsasite