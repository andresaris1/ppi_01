# Importar las librerias folium, pandas, geopandas y numpy
import folium
import geopandas as gpd

# Leer la base de datos
municipios = gpd.read_file("/Users/marianahernandez/biciMaps/MunicipiosVeredas.json")
# Realizar una copia para agregar index
municipios_index = municipios.copy()
municipios_index = municipios_index.set_index("MPIO_CNMBR")
# Eliminar columnas innecesarias
municipios = municipios.drop(columns=["MPIO_CCNCT", "MPIO_CCDGO"])
# Municipios de antioquia
municipios_ant = municipios[municipios["DPTO_CCDGO"] == "05"]
# Sacar los municipios del Valle de Aburra
municipios_valle = municipios_index[municipios_index["DPTO_CCDGO"] == "05"]
municipios_valle = municipios_valle.loc[
    [
        "MEDELLÍN",
        "ENVIGADO",
        "SABANETA",
        "ITAGÜÍ",
        "CALDAS",
        "LA ESTRELLA",
        "COPACABANA",
        "BELLO",
        "BARBOSA",
        "GIRARDOTA",
    ]
]
municipios_valle = municipios_valle.reset_index()
print(municipios_valle.head())

# Crear mapa locacion, estilo, zoom
m = folium.Map(location=[6.2, -75.5], tiles="cartodbpositron", zoom_start=10)

# Ciclo for para mapear cada uno de los municipios del valle
for _, r in municipios_valle.iterrows():
    # Simplificar la tolerancia para que el mapa se muestre
    sim_geo = gpd.GeoSeries(r["geometry"]).simplify(tolerance=0.001)
    geo_j = sim_geo.to_json()
    # Dar formato al poligono
    geo_j = folium.GeoJson(data=geo_j, style_function=lambda x: {"fillColor": "green"})
    # Agregar pop-up con el nombre del municipio
    folium.Popup(r["MPIO_CNMBR"]).add_to(geo_j)
    # Agregar poligono al mapa
    geo_j.add_to(m)
m.save("mapaValle")