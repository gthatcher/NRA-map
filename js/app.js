(function () {

    // set default map positioning
    var map = L.map('map').setView([40.7607793, -111.89104739999999], 8);

    // create base map
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Developed by <a href="#" target="_blank">Jade Allen Cook</a> & <a href="#" target="_blank">Geoffery Thatcher</a> for <a href="#" target="_blank">Deseret News</a>',
        maxZoom: 18,
        id: 'mapbox.dark',
        accessToken: 'pk.eyJ1IjoiamFkZWFsbGVuY29vayIsImEiOiJjamU3cTA5ZDgwNTNnMnFvMWRjdnI1aXYzIn0.63_s4EQVQur7r670eBY3DA',
        style: 'mapbox://styles/mapbox/dark-v9'
    }).addTo(map);

    // add map to container
    L.geoJSON(geojson4H, {
        onEachFeature: function() {
            console.log(true);
        }
    }).addTo(map);
})();
