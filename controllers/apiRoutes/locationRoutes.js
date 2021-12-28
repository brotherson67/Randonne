require('dotenv').config;
const router = require('express').Router;
// ADD REFERENCE TO MAP CONTAINER HERE
import MapBoxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

// CREATE geocoder object
const geocoder = new MapBoxGeocoder ({
    accessToken: process.env.MAPBOX_API_TOKEN, 
    mapboxgl: mapboxgl
})

// Translate location to latitude/longitude



/*
NOTES
    * geolocating works through two endpoints, I will need to use 
        Ex. https://api.mapbox.com/geocoding/v5/mapbox.places/springville.json?access_token=pk.eyJ1IjoibWl0Y2hicm9kZXYiLCJhIjoiY2t4aDZneTVrMjZoNzJya3lodmpsYnQzMSJ9.vYeLQf6nI3N9Zq6Y2ejDIA


*/
