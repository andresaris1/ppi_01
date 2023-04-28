Leaflet Routing Machine / TomTom
================================

Extends [Leaflet Routing Machine](https://github.com/perliedman/leaflet-routing-machine) with support for [TomTom](http://developer.tomtom.com/io-docs).

Some brief instructions follow below, but the [Leaflet Routing Machine tutorial on alternative routers](http://www.liedman.net/leaflet-routing-machine/tutorials/alternative-routers/) is recommended.

## Installing

Install nodejs/iojs, clone this repository and execute:

```sh
npm install
./scripts/dist.sh
```

Put the script after Leaflet and Leaflet Routing Machine has been loaded.

To use with for example Browserify:

```sh
npm install --save lrm-tomtom
```

## Using

There's a single class exported by this module, `L.Routing.TomTom`. It implements the [`IRouter`](http://www.liedman.net/leaflet-routing-machine/api/#irouter) interface. Use it to replace Leaflet Routing Machine's default OSRM router implementation:

```javascript
var L = require('leaflet');
require('leaflet-routing-machine');
require('lrm-tomtom'); // This will tack on the class to the L.Routing namespace

L.Routing.control({
    router: new L.Routing.TomTom('your TomTom API key', options),
}).addTo(map);
```

Note that you will need to pass a valid TomTom API key to the constructor.

## Options

Some of the available options from [TomTom Online Routing](https://developer.tomtom.com/online-routing/online-routing-documentation) are supported:

* routeType: string (fastest, shortest, eco, thrilling)
* language: string (en-GB)
* instructionsType: string (coded, text, tagged)
* traffic: boolean
* avoid: string / array (tollRoads, motorways, ferries, unpavedRoads, carpools, alreadyUsedRoads)
* travelMode: string (car, truck, taxi, bus, van, motorcycle, bicycle, pedestrian)
* vehicleMaxSpeed: int (in km/h)
* vehicleWeight: int (in kg)
* vehicleAxleWeight: int (in kg)
* vehicleLength: int (in m)
* vehicleWidth: int (in m)
* vehicleHeight: int (in m)
* departAt: string (YYYY-MM-DD\THH:mm:ss, i.e. 2017-03-20T20:00:15)
* arriveAt: string (YYYY-MM-DD\THH:mm:ss)
* vehicleCommercial: boolean

See [TomTom Online Routing Documentation](https://developer.tomtom.com/online-routing/online-routing-documentation) for further informations.