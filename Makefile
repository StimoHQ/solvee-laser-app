.PHONY: build-production
build-production:
	docker compose build

.PHONY: start-production
start-production: ## Start the production docker container.
	docker compose up -d

.PHONY: stop-production
stop-production: ## Stop the production docker container.
	docker compose down

.PHONY: restart-production
restart-production: ## Restart the production docker container.
	docker compose down && docker compose up -d

.PHONY: logs-production
logs-production: ## Show logs of the production docker container.
	docker compose logs -f