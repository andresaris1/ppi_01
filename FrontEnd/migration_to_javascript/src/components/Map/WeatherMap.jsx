import React, { useState, useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const openWeatherMapAPIKey = "4a3b40c79ef5b8cfcef33f8656a55b32";

// Weather map component
const WeatherMap = () => {
  const mapInstance = useMap();

  // Add weather layers
  useEffect(() => {
    if (!mapInstance) return;

    // Overlay layers
    const precipitationLayer = L.tileLayer(
      `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${openWeatherMapAPIKey}`,
      {
        attribution: `Map data &copy; <a href="https://openweathermap.org">OpenWeatherMap</a> contributors`,
        maxZoom: 18,
        opacity: 1,
      }
    );

    const temperatureLayer = L.tileLayer(
      `https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${openWeatherMapAPIKey}`,
      {
        attribution: `Map data &copy; <a href="https://openweathermap.org">OpenWeatherMap</a> contributors`,
        maxZoom: 18,
        opacity: 0.5,
      }
    );

    const cloudsLayer = L.tileLayer(
      `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${openWeatherMapAPIKey}`,
      {
        attribution: `Map data &copy; <a href="https://openweathermap.org">OpenWeatherMap</a> contributors`,
        maxZoom: 30,
        opacity: 1,
      }
    );

    // Base layers
    const defaultLayer = L.tileLayer(
      "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=X5b3jIXLMhNqludN1m6R",
      {
        attribution: `Map data &copy; <a href="https://openstreetmap.org">OpenStreetMap</a> contributors`,
        maxZoom: 18,
        opacity: 1,
      }
    );

    const sateliteLayer = L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      {
        attribution:
          "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
      }
    );

    const minimalistLayer = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      }
    );

    // Group overlay layers
    var overlayMaps = {
      Precipitaciones: precipitationLayer,
      Temperatura: temperatureLayer,
      Nubes: cloudsLayer,
    };

    // Group base layers
    var baseMaps = {
      Predeterminado: defaultLayer,
      Satelite: sateliteLayer,
      Minimalista: minimalistLayer,
    };

    // Add layer control
    const layerControl = L.control
      .layers(baseMaps, overlayMaps)
      .setPosition("topleft")
      .addTo(mapInstance);

      layerControl.getContainer().className += ' weather_map_container';
    // Remove duplicated layer control
    return () => {
      mapInstance.removeControl(layerControl);
    };
  }, [mapInstance]);

  return null;
};

export { WeatherMap };
