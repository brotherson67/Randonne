// IMPORT ENV

// IMPORT MAP OBJECT
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// here the geolocated/latitude and longitude

 
// CREATE 2D MAP OBJECT
mapboxgl.accessToken = MAPBOX_API_TOKEN;
var map = new mapboxgl.Map({
container: 'PUT THE DIV ID FOR OUR MAP HERE',
// WE CAN CONTROL THE TYPE OF VIEW USING THIS. 
style: 'mapbox://styles/mapbox/streets-v11',
center: 'USER GEOLOCATION',
zoom: 11
});

// CREATE 3D MAP OBJECT
const map = new mapboxgl.Map({
    container: 'map',
    zoom: 13.1,
    center: [-114.34411, 32.6141],
    pitch: 85,
    bearing: 80,
    style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
    });