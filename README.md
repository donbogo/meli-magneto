# meli-magneto

Antes de empezar se debe clonar o descargar el proyecto:
- Clone: https://github.com/donbogo/meli-magneto.git
- Download zip: https://github.com/donbogo/meli-magneto/archive/main.zip
___
### Instalación
Este es un proyecto desarrollado para ser ejecutado bajo Node.js, antes de instalarlo, descargar e instalar [Node.js](https://nodejs.org/en/download/). Node.js 10.X o superior.

Una vez clonado o descargado el proyecto se debe ubicar en el directorio:
> $ ./meli-magneto>

La instalación del proyecto se realiza utilizando el comando:
> $ npm install

<br>
### Cómo usar

##### Local
Localmente el proyecto puede ser ejecutado o probado por línea de comandos o levantando un servidor [express](https://www.npmjs.com/package/express).
- Línea de Comandos:

 `$ node run <secuencia adn>`
 
 `<secuencia adn>`: ["ATGT","CATT","TTAT","TGAZ"]

- Servidor Express

 El servidor se levanta por el puerto 3008.
 Y se expone el servicio web: http://localhost:3008/api/mutant
 
 body: {"adn":["ATGT","CATT","TTAT","TGAZ"]}
 
 `$ npm start`

##### Docker

- Crear imagen

 ```bash
 docker build -t <username>/magneto-mutant:0.1.0 .
 ```
- Correr la imagen

 Una vez la imagen este corriendo se levanta un servidor por el puerto 3008.
  Y se expone el servicio web: http://localhost:3008/api/mutant
 
 body: {"adn":["ATGT","CATT","TTAT","TGAZ"]}
 ```bash
  docker run -d -p 3008:3008 <username>/magneto-mutant:0.1.0
  ```
  <br>

### Test-Automáticos, Code coverage
Para correr las pruebas, primero instalar las dependencias y luego ejecutar:
 >$ npm install
 $ npm test

<br>
<br>