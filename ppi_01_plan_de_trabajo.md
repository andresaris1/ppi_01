# Plan de trabajo
## informe 03: viernes 24 de marzo.

- [ ]  Primera visualización de la página principal de la aplicación web [frontend bicimaps](https://judhenaoma.github.io/ppi-01/#) con un mapa interactivo del Valle de Aburrá , en donde luego se tendrá una vista priliminar de todas las ciclo rutas del Valle de Aburrá
- [ ] Configuración del ambiente de trabajo para el desarrollo del back-end
- [ ] Creación de la funcionalidad en el back-end de registro de usuarios de la aplicación, logeo y recuperación de información de un usuario dado. Esto se hará mediante el uso de Django y Django Rest Framework
- Para visualizar las funcionalidades listadas anteriormente ingresar a este link [backend bicimaps](https://bicimaps.herokuapp.com/api/login/). En donde se tienen los siguientes end-points:
    - Registrarse: https://bicimaps.herokuapp.com/api/sign-up/

    - Logearse: https://bicimaps.herokuapp.com/api/login/

    - Ver info del usuario logeado : https://bicimaps.herokuapp.com/api/user-detail/
    
- [ ] Creación del modelo relacional que soportará la persistencia de datos de la aplicación en Postgres SQL
- [ ] Creación de los modelos de las tablas del modelo relacional en GeoDjango y migración a la base de datos
- [ ] Integración del backend preliminar con la base de datos de la aplicación.


## informe 04: 13 horas del viernes 31 de marzo.
En la entrega 04 se busca diseñar e iniciar la creacion de una base de datos, en conjunto con una RESTfull API que soportará las siguientes funcionalidades:
- [ ] Limpieza y depurado de las capas usadas en la aplicación (ciclovías, etc.)
- [ ] Funcionalidad para creación de las reseñas por los usuarios mediante la API
- [ ] Funcionalidad para obtención de las reseñas de todos los usuarios mediante la API
- [ ] Funcionalidad para creación de rutas de un usuario mediante la API
- [ ] Funcionalidad para creación de rutas de un usuario mediante la API
- [ ] Obtención e integración de la API de EnCicla para conocer disponibilidad de bicicletas de cada estación.

End-points creados hasta el momento en la API:
- Registrarse: https://bicimaps.herokuapp.com/api/sign-up/

- Logearse: https://bicimaps.herokuapp.com/api/login/

- Ver info del usuario logeado : https://bicimaps.herokuapp.com/api/user-detail/

- Crear una reseña por un usuario: https://bicimaps.herokuapp.com/api/create-review/

- Recuperar todas las reseñas realizadas en la aplicación: https://bicimaps.herokuapp.com/api/reviews/

- Crear una ruta por un usuario autenticado:
https://bicimaps.herokuapp.com/api/create-route/

- Crear una ciclovía por un usuario admin: https://bicimaps.herokuapp.com/api/create-bike-way/

## informe 05: 13 horas del viernes 14 de abril.
- [ ] Implementación de la funcionalidad en el back-end de enrutamiento: cuando un usuario  decida ir a un lugar específico en el Valle de Aburrá se permitirá obtener la ruta óptima según OSRM (Open Source Routing Machine) para ir a dicha ruta, mediante un archivo tipo GeoJSON. Se guardarán dichas rutas en el historial del usuario.
  
  

## informe 06: 13 horas del viernes 21 de abril.
- [ ] Despliegue completo de la RESTfull API (back-end)
- [ ] Configuración del ambiente de trabajo para el frontend.
  
  

## informe 07: 13 horas del viernes 28 de abril.
En la entrega 07 se busca empezar a implementar las funcionalidades de la app en el front-end a partir del consumo de la API desarrollada. Se tendrán estas funcionalidades para que el usuario interactue con ellos:
- [ ] Registro de usuarios, creación de cuentas y contraseñas
- [ ] Guardar información de usuarios.


## informe 08: 13 horas del viernes 5 de mayo.
En la entrega 08 se planea ya tener desplegado en la aplicación para el cliente lo siguiente: 
- [ ] Navegación en el mapa
- [ ] Acceso a funcionalidades básicas de la aplicación sin registro (público en general)
- [ ] Marcar la ruta para ir de un destino a otro
- [ ] Marcadores de sitios importantes en el mapa (Estaciones EnCicla, talleres ...)
- [ ] Visualización de las estaciones de EnCicla.

## informe 09: 13 horas del viernes 12 de mayo.
En la entrega 09 ya tendríamos el borrador de lo que sería la aplicación final.
- [ ] Integrar con API del clima o contaminación
- [ ] Mejoras con el feedback de las entregas
- [ ] Funcionalidades avanzadas para usuarios registrados: Permitir hacer reseñas en las rutas y ver reseñas de otros usuarios para ciertos puntos y rutas ...
- [ ] Avisos y alertas acerca de las rutas, permitir almacenar feedback de usuarios
- [ ] Pruebas y resultados de la aplicación
- [ ] Descripción general de lo que puede hacer la app y cuales son sus limitantes
- [ ] Descripción de requerimientos mínimos para el uso de la aplicación para su correcto funcionamiento.

## informe 10: 13 horas del viernes 26 de mayo.
En la entrega 10 se hará la entrega definitiva de la app.
- [ ] Implementar feedback del informe 09
- [ ] Entrega final.
