# Plan de trabajo

## informe 03: viernes 23 de marzo.

- [ ]  Primera visualización de la página principal de la aplicación web con un mapa interactivo del Valle de Aburrá [(link a la rama)](https://github.com/andresaris1/ppi_01/tree/holaBiciMaps), en donde luego se tendrá una vista priliminar de todas las ciclo rutas del Valle de Aburrá.
- [ ] Creación de la funcionalidad en el back-end de registro de usuarios de la aplicación y recuperación de información de un usuario dado. Esto se hará mediante el uso de Django y Django Rest Framework.
- [ ] Creación del modelo relacional que soportará la persistencia de datos de la aplicación en Postgres SQL.
- [ ] Creación de los modelos de las tablas del modelo relacional en GeoDjango y migración a la base de datos.
- [ ] Integración del backend preliminar con la base de datos de la aplicación.
  

## informe 04: 13 horas del viernes 31 de marzo.
- [ ] Implementación completa de la RESTfull API (back-end)  de las siguientes funcionalidades empleando Django, GeoDjango, Django Rest Framework y PostGIS (Extensión de Postgres SQL)
     - [ ] Creación de rutas en el Valle de Aburrá a partir de archivos tipo GeoJSON, permitiendo su almacenamiento en la base de datos mediante (WKB).
     - [ ] Recuperación de todas las ciclovías almacenadas en la base de datos
     - [ ] Creación de reseñas en rutas y estaciones encicla, bici-parqueaderos, bici-reparaderos, por un usuario dado  en el Valle de Aburrá por.
     - [ ] Creación de Estaciones de Encicla en el Valle de Aburrá
     - [ ] Recuperación de todas las estaciones de encicla en el Valle de Aburrá
     - [ ] Creación de cici-parqueaderos 
     - [ ] Recuperación de todos los biciparqueaderos
     - [ ] Creación de lugares a los que un usuario quiera ir en bicicleta 
     - [ ] Recuperación de todos los lugares a los que un usuario ha ido
     - [ ] Creación de puntos donde se preste servicio de ciclo-parqueadero y ciclo-reparaderos.
     - [ ] Recuperación de todos los puntos donde se preste servicios de ciclo-parqueadero y ciclo-reparaderos.
  


## informe 05: 13 horas del viernes 14 de abril.
- Implementación de la funcionalidad en el back-end de enrutamiento: Cuando un usuario  decida ir a un lugar específico en el Valle de Aburrá se permitirá obtener la ruta óptima según OSRM (Open Source Routing Machine) para ir a dicha ruta, mediante un archivo tipo GeoJSON. Se guardarán dichas rutas en el historial del usuario.
  
  

## informe 06: 13 horas del viernes 21 de abril.
- Desplegue completo de la RESTfull API (back-end)
- Configuración del ambiente de trabajo para el frontend 
  
  

## informe 07: 13 horas del viernes 28 de abril.
En la entrega 07 se busca empezar a implementar las funcionalidades de la app en el front-end a partir del consumo de la API desarrollada. Se tendrán estas funcionalidades para que el usuario interactue con ellos:
- [ ] Registro de usuarios, creación de cuentas y contraseñas
- [ ] Guardar información de usuarios


## informe 08: 13 horas del viernes 5 de mayo.
En la entrega 08 se planea ya tener desplegado en la aplicación para el cliente lo siguiente: 
- [ ] Navegación en el mapa.
- [ ] Acceso a funcionalidades básicas de la aplicación sin registro (público en general)
- [ ] Marcar la ruta para ir de un destino a otro.
- [ ] Marcadores de sitios importantes en el mapa (Estaciones encicla, talleres ...)
- [ ] Visualización de las estaciones de encicla

  
  
## informe 09: 13 horas del viernes 12 de mayo.
En la entrega 09 ya tendríamos casi todo terminado desde el lado del usuario final.
- [ ] Integrar con API del clima o contaminación
- [ ] Mejoras con el feedback de las entregas
- [ ] Funcionalidades avanzadas para usuarios registrados: Permitir hacer reseñas en las rutas y ver reseñas de otros usuarios para ciertos puntos y rutas ...
- [ ] Avisos y alertas acerca de las rutas, permitir almacenar feedback de usuarios.

## informe 10: 13 horas del viernes 26 de mayo.