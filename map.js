
var initialize = function() {
	var mapOptions = {
		center: { lat: 59.332382, lng: 18.0645235 },
		zoom: 18,
		tilt: 45,
		disableDefaultUI:true

	};
map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
};


var zoom = function(num) {	
	var zoom = map.getZoom();
	map.setZoom(zoom + num);
}

var pan = function(a, b){
	var pan = map.panBy(a, b);
}

google.maps.event.addDomListener(window, 'load', initialize);