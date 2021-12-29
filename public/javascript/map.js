
// async function mapHandler(event) {
//     event.preventDefault();

   
// }


mapboxgl.accessToken = 'pk.eyJ1IjoibWl0Y2hicm9kZXYiLCJhIjoiY2t4aDZneTVrMjZoNzJya3lodmpsYnQzMSJ9.vYeLQf6nI3N9Zq6Y2ejDIA';

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
    console.log(`User lat ${userCurrLat}`)
    coordinates.longitude = position.coords.longitude;
    console.log(`User long ${userCurrLong}`)
};

function errorLocation(position){
    console.log("error")
    console.log(position);
}

// create inital streetview map object
// CANT GET THE ACCESSTOKEN TO WORK USING .env
const map2D = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [coordinates.longitude, coordinates.latitude],
zoom: 4
});

console.log(map2D);
// add geocoding control
map2D.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    })
);

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