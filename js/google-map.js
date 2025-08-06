let map;
let center =  { lat: 40.69847032728747, lng: -73.9514422416687 };

let mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 7,

    // The latitude and longitude to center the map (always required)
    center,

    // How you would like to style the map.
    scrollwheel: false,
    styles: [
        {
            "featureType": "administrative.country",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "simplified"
                },
                {
                    "hue": "#ff0000"
                }
            ]
        }
    ]
};

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), mapOptions);

    addMarker();
}

async function addMarker() {
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const marker = new AdvancedMarkerElement(
        {
            map,
            position: center,
        }
    );
}

initMap();