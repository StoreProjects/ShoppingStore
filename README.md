<h1 align="center">ShoppingStore</h1>
<p align="center">Frontend + Backend</p>
<p align="center">⚛ Aplicación en construcción 🚧</p>

## 🚀 Instrucciones
Una vez has clonado el repositorio en tu computador:

### 🔥 Enciende el backend
Dirígete a la carpeta de backend e instala las dependencias:
```bash
cd src/backend && npm install
```
Crea el archivo `.env` para las variables de entorno:
```
MONGODB_URI=mongodb://localhost/ShoppingStore
PORT=4000
```
Enciende el servidor backend:
```bash
node index.js
```
Entonces deberías ver el siguiente mensaje:
```bash
Server on port <xxxx>
Database is connected
```
Donde `<xxx>` representa el puerto del servidor. Por defecto `4000`.
### 🎨 Lanza el frontend
Dirígete a la carpeta principal del proyecto e instala las dependencias:
```bash
npm install
```
Inicia el servidor frontend:
```bash
npm start
```
### 💻 Empieza a desarrollar
Resultado esperado:

![Screenshot](https://github.com/StoreProjects/ShoppingStore/raw/master/screenshot.png)

## 🐛 Problemas frecuentes
**¿Tienes un error al instalar las dependencias de NodeJS?** Elimina `package.json`, luego instálalas de nuevo utilizando `npm install`.

## ☝ Tips
Recuerda iniciar el proceso **MongoDB** utilizando:
```bash
mongodb
```

## 🖐 Desarrolladores
* [David Saavedra](https://github.com/ProgrammingGeek02)
* [Marcelo Arias](https://github.com/360macky)
