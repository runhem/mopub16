
var initialize = function() {
	var mapOptions = {
		zoom: 15,
		tilt: 45,
		disableDefaultUI:true,
		mapTypeControl: true

	};

	var marker_1 = createMarker({lat: 59.346580, lng: 18.073250}, 'DRAG ME', true);
	var marker_2 = createMarker({lat: 59.346322, lng: 18.071251}, 'You cannot drag me :(', false);
	var marker_josmol = createMarker({lat:57.891418 , lng: 16.712319}, 'Månberget', false);
	var marker_alex = createMarker({lat:59.339032 , lng: 18.035438}, 'Här bor Alex', false);
	var marker_frida = createMarker({lat:59.301081 , lng: 18.009304}, 'Här bor Frida', false);


	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

 	marker_1.setMap(map);
 	marker_2.setMap(map);
    marker_josmol.setMap(map);
    marker_alex.setMap(map);
    marker_frida.setMap(map);
    geoloco(map);	

    map.setTilt(45);

    google.maps.event.addListener(marker_josmol, 'click', function(event){
      infoWind(marker_josmol, 'josmol');
      map.setCenter(event.latLng);
      });

    google.maps.event.addListener(marker_alex, 'click', function(event){
      infoWind(marker_alex, 'alex');
      map.setCenter(event.latLng);
      });

    google.maps.event.addListener(marker_frida, 'click', function(event){
      infoWind(marker_frida, 'frida');
      map.setCenter(event.latLng);
      });

    google.maps.event.addListener(marker_1, 'click', function(event){
      markerWithPos(event.latLng, marker_1);
      });


};


var zoomfunc = function(num) {	
	var zoom=map.getZoom();
	map.setZoom(zoom + num);
}

var pan = function(a, b){
	map.panBy(a, b);
}

function createMarker(location, markerTitle, isDraggable){
	var marker = new google.maps.Marker({
		position: location,
		title: markerTitle,
		draggable: isDraggable,
		animation: google.maps.Animation.DROP
	});
	return marker;
}

function markerWithPos(location, marker){
    var infowindow = new google.maps.InfoWindow({
        content: 'Latitude: ' + location.lat() +
        '<br>Longitude: ' + location.lng()
        });
    map.setCenter(location);
    infowindow.open(map,marker);
}

function infoWind(marker, person){
	if(person == 'josmol'){
		var infowindow = new google.maps.InfoWindow({
		content: 'Månberget. En fin plats dit du gärna vill åka. Njut av månen på ett berg.'
		});
	}

	else if (person == 'alex'){
		var infowindow = new google.maps.InfoWindow({
		content: 'Om du vill hälsa på Alexandra, åk hit'
		});
	}
	else if(person == 'frida'){
		var infowindow = new google.maps.InfoWindow({
		content: 'Om du vill hälsa på Frida, åk hit'
		});

	}
	infowindow.open(map,marker);
}

function center(name){
	if(name == 'josmol'){
		map.setCenter({lat: 57.89569424850929,lng: 16.714324951171875});
	}
	else if(name == 'alex'){
		map.setCenter({lat:59.339032 , lng: 18.035438});
	}
	else if(name == 'frida'){
		map.setCenter({lat:59.301081 , lng: 18.009304});
	}
}
 
function geoloco(map){
	var infoWindow2 = new google.maps.InfoWindow({map: map});

	 if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow2.setPosition(pos);
      infoWindow2.setContent('Location found.');
      map.setCenter(pos);
    },function() { var pos = {
        lat:59.293474,
        lng:18.083293
    };
    infoWindow2.setPosition(pos);
    map.setCenter(pos);
    infoWindow2.setContent('No location found, so we put you in Globen');
  	})
} else {
  	    var pos = {
        lat:59.293474,
        lng:18.083293
    };
    infoWindow2.setPosition(pos);
    map.setCenter(pos);
    infoWindow2.setContent('Loremipsum');

   
  }
}



google.maps.event.addDomListener(window, 'load', initialize);

