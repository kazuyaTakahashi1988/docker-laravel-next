docker-compose.yml ファイルがある場所でターミナルを開き、以下のコマンドを叩く　　

※　ポート番号　3000　/　8000　/　3030　をそれぞれ使用します
```
$ docker-compose up -d　
```
　　　　　↓↓↓↓
     
# Open "[http://localhost:3030](http://localhost:3030/)" in your browser　
アイパス『 root 』でphpMyAdminにログインできます。

DB『 api_db 』を作成、照合順序は『 utf8_general_ci 』としてください。

　　　　　↓↓↓↓　　
     
再度 docker-compose.yml ファイルがある場所でターミナルを開き、以下のコマンドを順に叩く

```
$ mv api/.env.example api/.env
$ docker exec -it api /bin/sh
$ cd ../api
$ composer install
$ php artisan storage:link
$ chmod -R 777 storage
$ php artisan migrate
$ php artisan db:seed
```

　　　　　↓↓↓↓
# Open "[http://localhost:3000](http://localhost:3000/)" in your browser　
