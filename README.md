### .ENV

1. Crear el archivo .env en la raiz del proyecto y agregar esta variable dentro VITE_API_URL = https://admindev.inceptia.ai/api/v1/ (Paso importante para poder interactuar con la api)

### PASOS PARA CORRER EL PROYECTO

1. Clonar el repositorio
2. Instalar las dependencias con el comando `npm install`
3. Ejecutar el proyecto con el comando `npm run dev'

### PASOS PARA CORRER EL PROYECTO CON DOCKER

## Requisitos

1. Docker <!--https://docs.docker.com/engine/install/-->
2. Docker Compose <!-- DOCS https://docs.docker.com/compose/install/ -->

## Levantar el contenedor

1. Clonar el repositorio
2. Instalar las dependencias con el comando `npm install`
3. Ejecutar el comando 'npm run compose:dev'para la version de desarrollo o 'npm run compose:prod' para levantar la version productiva del proyecto
