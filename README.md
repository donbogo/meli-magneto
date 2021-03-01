# meli-magneto

Clonar o descargar el proyecto:
- Clone: https://github.com/donbogo/meli-magneto.git
- Download zip: https://github.com/donbogo/meli-magneto/archive/main.zip
___

### Instalación
Este es un proyecto desarrollado para ser ejecutado bajo Node.js, antes de instalarlo, descargar e instalar [Node.js](https://nodejs.org/en/download/). Node.js 10.X o superior.

Una vez clonado o descargado el proyecto, ubicarse en el directorio: **./meli-magneto**
> $ ./meli-magneto>

Para la instalación del proyecto ejecutar el comando:
> $ npm install

<br>
___

### Cómo usar

##### Local
Localmente el proyecto puede ser ejecutado o probado por línea de comandos o levantando un servidor [express](https://www.npmjs.com/package/express).

- Línea de Comandos:

 `$ node run <secuencia adn>`
 
 `<secuencia adn>`: ["ATGT","CATT","TTAT","TGAZ"]

- Servidor Express

 `$ npm start`
 
 El servidor se levanta por el puerto 3008. Y expone el servicio web: 
 http://localhost:3008/api/mutant
 
![](https://raw.githubusercontent.com/donbogo/meli-magneto/main/ws-mutant.jpg)

`{"adn": ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]}`

##### Docker

- Crear imagen

 ```bash
 docker build -t <username>/magneto-mutant:0.1.0 .
 ```
- Correr imagen

 ```bash
  docker run -d -p 3008:3008 <username>/magneto-mutant:0.1.0
  ```
 El servidor se levanta por el puerto 3008. Y expone el servicio web: 
 http://localhost:3008/api/mutant
 
 ![](https://raw.githubusercontent.com/donbogo/meli-magneto/main/ws-mutant.jpg)
 
 `{"adn": ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]}`

<br>
___
### Test-Automáticos, Code coverage
Para correr las pruebas, primero instalar las dependencias y luego ejecutar:
 
 > $ npm install
 
 > $ npm test

<br>