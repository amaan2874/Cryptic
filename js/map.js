 // Tumhari location (longitude, latitude) - Change kar sakte ho
 var lon = 77.751367;
 var lat = 20.931801;

 // OpenLayers Map
 var map = new ol.Map({
     target: 'map',
     layers: [
         new ol.layer.Tile({
             source: new ol.source.XYZ({
                     url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}' // Standard Google Maps
                 })
         })
     ],
     view: new ol.View({
         center: ol.proj.fromLonLat([lon, lat]), // Convert kar raha hai projection me
         zoom: 16
     })
 });

 // Location Marker
 var marker = new ol.Overlay({
     position: ol.proj.fromLonLat([lon, lat]), // Position set kar raha hai
     positioning: 'center-center',
     element: document.createElement('div'),
     stopEvent: false
 });

 marker.getElement().style.width = '15px';
 marker.getElement().style.height = '15px';
 marker.getElement().style.background = 'red';
 marker.getElement().style.borderRadius = '50%';
 marker.getElement().style.border = '2px solid black';

 map.addOverlay(marker); // Marker ko map me add kar raha hai