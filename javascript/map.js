// IMPORT ENV
// require('dotenv').config();
// IMPORT MAP OBJECT
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// here the geolocated/latitude and longitude


// // get user geolocation
// navigator.geolocation.getCurrentPosition(success, err, {
//     enableHighAccuracy: true
// })

// // get coordinates from location
// const success = curruserCoord => {
//     console.log(curruserCoord);
//     let latitude = position.coords.latitude;
//     let longitude = position.coords.longitude;
// }


// mapboxgl.accessToken = "pk.eyJ1IjoibWl0Y2hicm9kZXYiLCJhIjoiY2t4aDZneTVrMjZoNzJya3lodmpsYnQzMSJ9.vYeLQf6nI3N9Zq6Y2ejDIA"
// // CREATE 2D MAP OBJECT
// const map2 = new mapboxgl.Map({
// container: 'map',
// // WE CAN CONTROL THE TYPE OF VIEW USING THIS. 
// style: 'mapbox://styles/mapbox/streets-v11',
// center: [0, 0],
// zoom: 11
// });

// CANT GET THE ACCESSTOKEN TO WORK USING .env
mapboxgl.accessToken = 'pk.eyJ1IjoibWl0Y2hicm9kZXYiLCJhIjoiY2t4aDZneTVrMjZoNzJya3lodmpsYnQzMSJ9.vYeLQf6nI3N9Zq6Y2ejDIA';
const map2D = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [0, 0],
zoom: 4
});



// // CREATE 3D MAP OBJECT
// const map3D = new mapboxgl.Map({
//     container: 'PUT THE DIV ID FOR OUR MAP HERE',
//     zoom: 13.1,
//     center: [-114.34411, 32.6141],
//     pitch: 85,
//     bearing: 80,
//     style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
// });

// modules.export = map;