up:
	docker compose -f docker/docker-compose.local.yml up -d --build

down:
	docker compose -f docker/docker-compose.local.yml down

logs:
	docker compose -f docker/docker-compose.local.yml logs -f


bnr-api:
	docker build -f apps/api/docker/Dockerfile -t statauto/api --network host .
	docker run --network host statauto/api

bnr-app:
	docker build -f apps/app/docker/Dockerfile -t statauto/app --network host .
	docker run --network host statauto/app


