const mapTiles = Object.freeze(
    {
        default : {
            name : "Predeterminado",
            url : "https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=X5b3jIXLMhNqludN1m6R",
            attribution : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',

        },

        imagery : {
            name : "World Imagery" ,
            url : "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            attribution : "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"

        },
        positron : {
            name : "Positron",
            url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
            attribution : '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>' 
        }
})

export { mapTiles }