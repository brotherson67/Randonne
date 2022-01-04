
// async function mapHandler(event) {
//     event.preventDefault();

   
// }
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
// require('dotenv').config();

const mapboxToken =  document.getElementById("map_api").value;
console.log(mapboxToken);
mapboxgl.accessToken = mapboxToken;

// mapboxgl.accessToken = '';

// use local storage to store the mapbox token and then have it save to the sessions

let coordinates = {
    latitude: "",
    longitude: ""
}
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position){
    console.log(position);
    coordinates.latitude = position.coords.latitude;
    // console.log(`User lat ${userCurrLat}`)
    coordinates.longitude = position.coords.longitude;
    // console.log(`User long ${userCurrLong}`)
};

function errorLocation(position){
    console.log("error")
    console.log(position);
}

function initMap(lngLat) {
    const map2D = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
        center: [coordinates.longitude, coordinates.latitude],
        zoom: 6
        });
        map2D.addControl(
            new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
            })
        );
};

  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(e => {
        initMap([e.coords.longitude, e.coords.latitude])
      })
  } else {
      // sets default location to utah -- still need to search exact location from search bar
    initMap([ 39.3210, 111.0937 ]);
  }


// create inital streetview map object
// CANT GET THE ACCESSTOKEN TO WORK USING .env
// const map2D = new mapboxgl.Map({
// container: 'map',
// style: 'mapbox://styles/mapbox/streets-v11',
// center: [coordinates.longitude, coordinates.latitude],
// zoom: 4
// });

// console.log(map2D);
// add geocoding control
// map2D.addControl(
//     new MapboxGeocoder({
//     accessToken: mapboxgl.accessToken,
//     mapboxgl: mapboxgl
//     })
// );

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