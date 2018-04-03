function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 50.4501, lng: 30.5234},
      zoom: 12,
      mapTypeId: 'roadmap'
    });
    var infoWindow = new google.maps.InfoWindow({map: map});

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Ваше місцезнаходження визначено.');
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Помилка. Не вдалося визначити місцезнаходження.' :
                          'Помилка. Ваш браузер не підтримує визначення місцезнаходження.');
  }
    var iconBase = 'static/img/';
    var icons = {
      parking: {
        name: 'Parking',
        icon: iconBase + 'parking_lot_maps.png'
      },
      library: {
        name: 'Library',
        icon: iconBase + 'library_maps.png'
      },
      info: {
        name: 'Info',
        icon: iconBase + 'logoGoogle.png'
      }
    };

    var features = [
      {
        position: new google.maps.LatLng(50.45925, 30.42491),
        type: 'info'
      }, {
        position: new google.maps.LatLng(50.45881, 30.48637),
        type: 'info'
      }, {
        position: new google.maps.LatLng(50.43607, 30.54508),
        type: 'info'
      }, {
        position: new google.maps.LatLng(50.44919, 30.62164),
        type: 'info'
      }, {
        position: new google.maps.LatLng(50.40764, 30.62198),
        type: 'info'
      }, {
        position: new google.maps.LatLng(50.43651, 30.36209),
        type: 'info'
      }, {
        position: new google.maps.LatLng(50.43782, 30.45169),
        type: 'info'
      }, {
        position: new google.maps.LatLng(50.39494, 30.49461),
        type: 'info'
      }, {
        position: new google.maps.LatLng(50.43389, 30.50903),
        type: 'info'
      }, {
        position: new google.maps.LatLng(50.42776, 30.47504)
      }
    ];

    // Create markers.
    features.forEach(function(feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map
      });
    });
}


