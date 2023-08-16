Abrir projecto
Ejecutar:  npm install (la primera vez) 
Ejecutar:  nodemon src/index.js

--> sale Servidor arriba y escuchando puerto 8080!!

Acceder en el navegador: http://localhost:8080/api/products 

Ejemplos: 

http://localhost:8080/api/products    --> trae todos los productos

http://localhost:8080/api/products?limit=3    --> trae 3 productos por página

http://localhost:8080/products?page=1

http://localhost:8080/products?page=1&limit=3

http://localhost:8080/products?page=4&limit=3&sort=asc
