
## BukaShuttle           
Bukalapak Bootcamp TEP Hackathon        

1. Clone and run composer install:

```
git clone git@github.com:rizqirizqi/bukashuttle.git
cd bukashuttle
composer install
cp .env.example .env
```
2. Modify .env file
```
nano .env
```
Add/modify these lines:
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=shuttler_dev
DB_USERNAME=root
DB_PASSWORD=
```
3. Setup database
```
mysql -u root -p

> CREATE DATABASE shuttle_dev;
> \q 
```
4. Generate key and migrate

```
php artisan key:generate
touch database/database.sqlite
php artisan migrate
```
5. Webpack
```
npm install
npm run watch
```
6. Run Laravel in another tab
```
php artisan serve
```
