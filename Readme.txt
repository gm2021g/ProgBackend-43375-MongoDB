abrir:     carpeta D:\4.- Programación Backend\DESAFIOS\Desafío nro 3\ServidorConExpress
ejecutar:  npm install   (la primera vez) 
ejecutar:  nodemon src/index.js

--> sale Servidor arriba y escuchando puerto 8080!!

entrar a localhost:8080 en el navegador



Ejemplos: 

http://localhost:8080/api/products    --> trae todos los productos

http://localhost:8080/api/products?limit=3    --> trae 3 productos por página

http://localhost:8080/products?page=1

http://localhost:8080/products?page=1&limit=3

http://localhost:8080/products?page=4&limit=3&sort=asc



en 1:48 explica sort
http://localhost:8080/products?page=3&limit=3&sort=1