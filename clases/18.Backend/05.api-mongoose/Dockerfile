#Descargar versión de node 14
FROM node:14 

WORKDIR /usr/src/app #Ruta donde Docker guardará la aplicación /
#/opt/app

#Copia los package y muevelos al WORKDIR
COPY package*.json ./ 

#Aquí instalo todas las dependencias de mi proyecto
RUN npm install 

#Voy a copiar el resto de los archivos al WORKDIR
COPY . . 

#Expone el puerto 3000 para que nos podamos conectar, el mismo que configuramos en el servidor de express
EXPOSE 3000 

#Entrypoint: Punto de entrada es la linea principal que ejecuta o inicia el container
#Va a ejecutar el comando: node server.js
CMD ["node", "server.js"] 
