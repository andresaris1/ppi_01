# %%
import pandas as pd
import folium
import locale


#df=(pd.ExcelFile("EstacionesEnCicla_DatosAbiertos2.xls")).parse('Hoja1')
df=(pd.ExcelFile("map/EstacionesEnCicla_DatosAbiertos2.xls")).parse('Hoja1')
del df["#"]


# %%

#Genera un mapa localizado en medellin

city_map= folium.Map(location=(6.263,-75.578),tiles="OpenStreetMap",zoom_start=16)

locale._override_localeconv["thousands_sep"] = "."
locale._override_localeconv["decimal_point"] = ","
for estacion in range(len(df)):
    coordenada = df.iloc[estacion]["COORDENADAS"].split(";")
    coordenada = [locale.atof(x) for x in coordenada]
    nombre = df.iloc[estacion]["NOMBRE ESTACION"]
    direccion = df.iloc[estacion]["DIRECCION"]
    referencia = df.iloc[estacion]["REFERENCIA DE UBICACION"]
    municipio = df.iloc[estacion]["MUNICIPIO"]
    tipo = df.iloc[estacion]["TIPO"]
    anclajes = df.iloc[estacion]["TOTAL ANCLAJES"]
    folium.vector_layers.Marker(location=[coordenada[0],coordenada[1]],tooltip=nombre).add_to(city_map)
    
city_map.save('city_map.html')
# %%
city_map.show_in_browser()