var marker;

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 50.360938, lng: 18.857516},
    disableDefaultUI: true,
});

function pinSymbol(color) {
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#b4b4b4',
        strokeWeight: 1,
        scale: 1,
    };
}

marker = new google.maps.Marker({
    map: map,
    draggable: true,
    icon: pinSymbol("#265884"),
    animation: google.maps.Animation.DROP,
    position: {lat: 50.360938, lng: 18.857516}
});
    marker.addListener('click', toggleBounce);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}