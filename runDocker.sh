#!/bin/bash

# Baixa as imagens
docker pull mariadb
docker pull mongo

# Remove o container, se existir
docker stop node-sequelize-sql node-sequelize-mongo
docker container rm node-sequelize-sql node-sequelize-mongo

# Gera o container
docker run --name node-sequelize-sql -p 3307:3306 -e MYSQL_ROOT_PASSWORD=123456 -e MYSQL_DATABASE=node_sequelize -d mariadb
docker run --name node-sequelize-mongo -p 27017:27017 -d mongo
