
//GOOGLE-MAPS-KONTAKTU
var map2;
var egglabs2 = new google.maps.LatLng(50.450924, 30.480936);
var mapCoordinates2 = new google.maps.LatLng(50.450924, 30.480936);
var marker;

function initialized2() {
    var map2Options = {
        zoom: 16,
        disableDefaultUI: true,
        center: mapCoordinates2,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
            {
                "stylers": [
                    { "saturation": 0 }
                ]
            }
        ]
    };
    map = new google.maps.Map(document.getElementById('map-contact'),map2Options);

    var marker = new google.maps.Marker({
        position: mapCoordinates2,
        map: map,
        title:"Hello World!"
    });
}
google.maps.event.addDomListener(window, 'load', initialized2);