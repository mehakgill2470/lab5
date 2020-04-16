function initMap() {

    let college = {
        lat: 44.4121016,
        lng: -79.6667645
    };

    let house = {
        lat: 44.3909634,
        lng: -79.6792909
    };

    let div = document.querySelector('div');

    let map = new google.maps.Map(div, {
        zoom: 14,
        house: house
    });

    var marker2 = new google.maps.Marker({
        position: college,
        map: map,
        title: 'College!'
    });

    var marker2 = new google.maps.Marker({
        position: house,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        title: 'House!'
    });


}