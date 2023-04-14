import pandas as pd
import locale
import os
import folium
from folium import plugins

m = folium.Map(location=[6.2, -75.5], tiles="cartodbpositron", zoom_start=10)
df=(pd.ExcelFile("BackEnd/docs/EstacionesEnCicla_DatosAbiertos2.xls")).parse('Hoja1')
del df["#"]

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
    #color #5F9EA0
    left_col_color = "#5f9ea0"
    right_col_color = "#ffffff"
    html = folium.Html(
            f"""
            <!DOCTYPE html>
            <html>
            <head>
            <h4 style="margin-bottom:10"; width="200px">{nombre}</h4>
            </head>
                <table style="height: 126px; width: 350px;">
            <tbody>
            <tr>
            <td style="background-color: """+ left_col_color +""";"><span style="color: #ffffff;">Dirección</span></td>
            <td style="width: 150px;background-color: """+ right_col_color +""";">{}</td>""".format(direccion) + """
            </tr>
            <tr>
            <td style="background-color: """+ left_col_color +""";"><span style="color: #ffffff;">Referencia</span></td>
            <td style="width: 150px;background-color: """+ right_col_color +""";">{}</td>""".format(referencia) + """
            </tr>
            <tr>
            <td style="background-color: """+ left_col_color +""";"><span style="color: #ffffff;">Municipio</span></td>
            <td style="width: 150px;background-color: """+ right_col_color +""";">{}</td>""".format(municipio) + """
            </tr>
            <tr>
            <td style="background-color: """+ left_col_color +""";"><span style="color: #ffffff;">Tipo</span></td>
            <td style="width: 150px;background-color: """+ right_col_color +""";">{}</td>""".format(tipo) + """
            </tr>
            <tr>
            <td style="background-color: """+ left_col_color +""";"><span style="color: #ffffff;">Cantidad de Anclajes</span></td>
            <td style="width: 150px;background-color: """+ right_col_color +""";">{}</td>""".format(anclajes) + """
            </tr>
            </tbody>
            </table>
            </html>
            """,script=True)
    
    popup= folium.Popup(html,max_width=600,max_height=600)
    folium.vector_layers.Marker(location=[coordenada[0],coordenada[1]],popup=popup,tooltip=nombre,icon=plugins.BeautifyIcon(icon='bicycle',border_color='#0074BC',text_color='#7DB82A',inner_icon_style='margin-top:0;')).add_to(m)
    
m.save("mapaValle.html")