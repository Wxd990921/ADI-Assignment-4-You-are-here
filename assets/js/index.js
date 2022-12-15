'use strict';

let map = new GMap.Map("container"); 
let point = new GMap.Point(); 
map.centerAndZoom(point, 15); 
map.enableScrollWheelZoom(true);
map.addControl(new GMap.OverviewMapControl());
map.addControl(new GMap.MapTypeControl());
map.addControl(new GMap.NavigationControl());
let opts = {offset: new GMap.Size(90, 30)}
map.addControl(new GMap.ScaleControl(opts));
let geolocation = new GMap.Geolocation();
geolocation.getCurrentPosition(function(r){
    if(this.getStatus() == GMap_STATUS_SUCCESS){
        let mk = new GMap.Marker(r.point);
        map.addOverlay(mk);
        map.panTo(r.point);
        let latCurrent = r.point.lat;
        let lngCurrent = r.point.lng;
        alert('Your position:'+r.point.lng+','+r.point.lat);
        location.href = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCVuZV7iNeZdEvd11il7HfFynuYA0ulrEc&callback=initMap" + latCurrent + "," + lngCurrent + 
        "&destination=30.4325,111.182311&mode=driving&region=adress&output=html";
    }
    else {
        alert('failed'+this.getStatus());
    }        
});