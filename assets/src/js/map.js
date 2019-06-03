function initMap() {     
	var myLatlng = new google.maps.LatLng(56.8822528,53.2603734);
	var myOptions = {
		zoom: 15,
		center: myLatlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById("modal_map"), myOptions); 
}