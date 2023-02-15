function debugAjax(){
	
	fetch("data/MegaCities.geojson", init)
		.then(function(response){
			return response.json();
		})
		.then(debugCallback(response))
};

function debugCallback(response){
	document.querySelector("#mydiv").insertAdjacentHTML('beforeend', 'GeoJSON data: ' + JSON.stringify(response))
};

