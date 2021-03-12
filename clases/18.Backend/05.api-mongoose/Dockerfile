#Descargar versión de node 14
FROM node:14 

WORKDIR /usr/src/app 
#Ruta donde Docker guardará la aplicación /
#/opt/app

#Copia los package y muevelos al WORKDIR
COPY package*.json ./ 

#Aquí instalo todas las dependencias de mi proyecto
RUN npm install 

#Instalamos nodemon de manera global
RUN npm install nodemon -g

#Voy a copiar el resto de los archivos al WORKDIR
COPY . . 

#Expone el puerto 3000 para que nos podamos conectar, el mismo que configuramos en el servidor de express
EXPOSE 3000 


#Entrypoint: Punto de entrada es la linea principal que ejecuta o inicia el container
# Configuración de nodemon especial para backend de NodeJS en docker:
# nodemon -L --watch . server.js
# Indicamos a Nodemon que vaya a buscar los cambios a otra imagen, ya que el código fuente y nodemon estan separados
# -L, --legacy-watch .... use polling to watch for changes (tipically needed when watching over a network/Docker)
CMD ["nodemon","-L","--watch",".","server.js"]

#Va a ejecutar el comando: node server.js
#CMD ["node", "server.js"] 