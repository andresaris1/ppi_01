# Hola Bici Maps - Informe 3

## ¿Qué encontrará en este branch? 
En esta rama del repositorio se encuentra un primer vistazo de como podría lucir la página de inicio de la aplicación, aún le
falta mucho y muchos de sus botones y links no funcionan, únicamente los que llevan al repositorio principal en GitHub se encuentran
funcionando.

### ¿Entonces qué fue lo que hicimos?
1. Generamos el mapa del Valle de Aburrá en Python haciendo uso de la libreria [Folium](https://python-visualization.github.io/folium/)
  + Para esto primero hicimos uso de una [base de datos](MunicipiosVeredas.json) que nos permitío mapear con exactitud los municipios del Valle de Aburrá
  + Con ayuda de las librerias [Pandas](https://pandas.pydata.org), [Geopandas](https://geopandas.org/en/stable/), [Numpy](https://numpy.org), manipulamos la base de datos para realizar los polígonos
  + Agregamos estos polígonos al mapa generado con Folium, y guardamos este mapa como un archivo .html
  + Recordemos que Folium genera las visualizaciones de los mapas como archivos .html apoyado en [OpenStreetMaps](https://www.openstreetmap.org/#map=5/-1.099/-74.509).

2. Creamos nuestro index provisional
  + Con ayuda de [HTML](https://developer.mozilla.org/es/docs/Web/HTML) y [CSS](https://developer.mozilla.org/es/docs/Web/CSS), logramos darle un poco de forma a lo que sería nuestra página principal
  + Creamos un pequeño logo y una barra de navegación que con suerte ampliará su contenido
  + Tomamos el archivo del mapa .html y con ayuda de un [<iframe>](https://developer.mozilla.org/es/docs/Web/HTML/Element/iframe) lo pusimos dentro de nuestra página principal para que siguiera siendo interactivo.
  + El resto son modificaciones que obedecen a caprichos visuales.
  


