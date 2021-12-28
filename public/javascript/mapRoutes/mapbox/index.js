var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1IjoibWl0Y2hicm9kZXYiLCJhIjoiY2t4aDZneTVrMjZoNzJya3lodmpsYnQzMSJ9.vYeLQf6nI3N9Zq6Y2ejDIA';
var map = new mapboxgl.Map({
container: 'PUT THE DIV ID FOR OUR MAP HERE',
// WE CAN CONTROL THE TYPE OF VIEW USING THIS. 
style: 'mapbox://styles/mapbox/streets-v11',
center: 'USER GEOLOCATION',
zoom: 11
});

// I FOUND A WAY TO MAKE A 3D TERRAIN MAP. 
// WE CAN ALSO ADD VECTOR TILE STYLE MAPS