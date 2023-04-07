'use strict';
mapboxgl.accessToken = 'pk.eyJ1IjoiMTE2NTUyNDY3OSIsImEiOiJjbGc1NzBibTcwMDU4M2ZvMWtzbWZ4cHRhIn0.fq_sCeFbafR7CPv2WXdbsQ';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
});
const point = new mapboxgl.Point();
map.setCenter([point, 15]);
map.scrollZoom.setWheelZoomRate(1 / 450);
map.addControl(new mapboxgl.OverviewMapControl());
map.addControl(new mapboxgl.MapTypeControl());
map.addControl(new mapboxgl.NavigationControl());
var opts = { offset: new mapboxgl.Size(90, 30) }
map.addControl(new mapboxgl.ScaleControl(opts));

const geolocate = new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    },
    trackUserLocation: true
});
map.addControl(geolocate);

geolocate.on('trackuserlocationstart', () => {
    console.log('A trackuserlocationstart event has occurred.');
});

geolocate.on('trackuserlocationend', () => {
    console.log('A trackuserlocationend event has occurred.');
});

geolocate.on('geolocate', () => {
    console.log('A geolocate event has occurred.');
});