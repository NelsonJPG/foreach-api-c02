
# Foreach
API para cálculo de emision de C02 para la empresa BANK.

| Nombre de Tecnología | Versión |
| ---------- | ---------- |
| NodeJS   | v10.16.3   |
| Express   | v4.16.1   |
| NPM   | v6.9.0   |
| YARN   | v1.10.1   |

## Requerimientos del Sistema
- NodeJS >= v10.16.3
- ExpressJS >= v4.16.1
- YARN >= v1.22.4
- NPM >= v6.9.0

## Configuración de la API
1. Crea la Base de datos con el admin de tu base datos, para ello ejecutamos el comando `mongo` o `mongo -u MI_USER -pMI_PASSWORD` en el terminal.
2. Creamos la base de datos personalizada.
```
use nombre_de_mi_basededatos
```
3. Creamos el usuario con permisos en la base de datos.
```
db.createUser({ user: "mi_usuario", pwd: "mi_password", roles: [ { role: "readWrite", db: "nombre_de_mi_basededatos" }]})
```
4. Renombra el archivo `env-example` a `.env`.
5. Configuramos las variables de entorno en el archivo `.env`.
```
APP_NAME=nombre_de_la_app
PORT=puerto_del_servidor
DB_HOST=host_de_la_basededatos
DB_PORT=puerto_de_la_basededatos
DB_NAME=nombre_de_la_basededatos
DB_USER=nombre_del_usuario_basededatos
DB_PASS=clave_del_usuario_basededatos
```
6. Instalamos los paquetes mediante `yarn` o `npm`.
- instalacion NPM
```
    npm install
```
- instalacion YARN
```
yarn install
```

## Despliegue
### Despliegue Desarrollo
- **NPM**
```
npm run dev
```
- **YARN**
```
yarn run dev
```

### Despliegue Producción
1. se debe preparar el build (empaquetado mejorado) de la aplicación.
- **NPM**
```
npm run build
```
- **YARN**
```
yarn build
```

2. Se ejecuta la aplicación.
- **NPM**
```
npm start
```
- **YARN**
```
yarn start
```