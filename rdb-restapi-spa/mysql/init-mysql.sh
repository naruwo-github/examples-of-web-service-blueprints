#!/bin/sh
docker-compose exec mysql bash -c "chmod 775 docker-entrypoint-initdb.d/init-database.sh"
docker-compose exec mysql bash -c "./docker-entrypoint-initdb.d/init-database.sh"