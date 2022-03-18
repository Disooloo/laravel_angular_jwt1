# Авторизация laravel + Angular + JWT

> <a href="https://youtu.be/TK9dFTmKJRE">Видео обзор</a> <br/>

![img_5.png](info/img_5.png)
![img_1.png](info/img_1.png)
![img_6.png](info/img_6.png)
![img_7.png](info/img_7.png)
![img_8.png](info/img_8.png)

# Установка

> Frontend 

`cd frontend` `npm install`

> Backend

`cd backend` `composer install` 

`npm install` или `yarn` (Смотри папку **node_modules**)

Изменить `.env.example` на `.env`

Генерация APP_KEY
`php artisan key:generate`


## Подключение к DataBase `.env`
```
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=Имя бд
DB_USERNAME=Имя пользователя 
DB_PASSWORD=Пароль пользователя
```

## Выполнение Миграций
```
php artisan migrate
```

## Генерация JWT ключа
```
php artisan jwt:secret
```

![img_3.png](info/img_3.png)

## Запуск
Laravel -> backend `php arisan serve` <br>
Angular -> frontend `ng s -o` <br>



