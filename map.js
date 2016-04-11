var initialize = function() {
	var mapOptions = {
		center: {lat: 59.346580, lng: 18.073250},
		zoom: 15,
		tilt: 45,
		mapTypeId: google.maps.MapTypeId.HYBRID,
		disableDefaultUI: true
	};

map = new google.maps.Map(document.getElementById('map'), mapOptions);