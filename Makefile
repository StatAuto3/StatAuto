up:
	docker compose -f docker/docker-compose.local.yml up --build

down:
	docker compose -f docker/docker-compose.local.yml down

logs:
	docker compose -f docker/docker-compose.local.yml logs -f

ps:
	docker compose -f docker/docker-compose.local.yml ps