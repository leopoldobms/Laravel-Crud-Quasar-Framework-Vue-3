#!/bin/sh

mkdir ./.mysql-data/
cd .mysql-data
mkdir ./db
cd ..
chmod 777 app/storage/logs/laravel.log
rm \-R app/storage/framework/views/
mkdir app/storage/framework/views/
chmod 777 app/storage/framework/views/ \-R
chmod 777 app/bootstrap/ \-R
rm \-R app/storage/framework/cache/
mkdir app/storage/framework/cache/
mkdir app/storage/framework/cache/data
chmod 777 \-R app/storage/framework/cache/
docker-compose build
docker-compose up \-d
docker-compose run composer install
docker-compose run artisan migrate:install
docker-compose run artisan migrate
cd front-end
docker-compose run npm install
npx quasar dev


