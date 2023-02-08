function initialize() {
	addTable(cityPop)
	addColumns(cityPop);
	addEvents();
};

var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

function addTable(cityPop){
	//create a table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    //add city column to header row
    var cityHeader = document.createElement("th");
    cityHeader.innerHTML = "City";
    headerRow.appendChild(cityHeader);

    //add population column to header row
    var popHeader = document.createElement("th");
    popHeader.innerHTML = "Population";
    headerRow.appendChild(popHeader);

    //add the header row
    table.appendChild(headerRow);

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        var tr = document.createElement("tr");

        var city = document.createElement("td");
        city.innerHTML = cityPop[i].city;
        tr.appendChild(city);

        var pop = document.createElement("td");
        pop.innerHTML = cityPop[i].population;
        tr.appendChild(pop);

        table.appendChild(tr);
    };

    //add the table to the div in index.html
    var mydiv = document.getElementById("mydiv");
    mydiv.appendChild(table);
};


function addColumns(cityPop){
    // Selecting table rows to iterate over
    document.querySelectorAll("tr").forEach(function(row, i){
		// If the header row
    	if (i == 0){
			// Add City Size column header
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {

    		var citySize;
			// City is small if population is less than 100000
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
			// City is medium if population is greater than 100000 and less than 500000
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
			// City is large if population is greater than 500000
    		} else {
    			citySize = 'Large';
    		};
			// Adds the city size table cell
			row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    	};
    });
};

function addEvents(){
	// Adds event while mouse is hovering over table
	document.querySelector("table").addEventListener("mouseover", function(){
		// Begins the changing of color style for the table
		var color = "color:rgb(";
		// For loop to check if rgb string will be ending soon
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random + '';

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			}
		};
		// Changes the tables color style to the randomized color
		document.querySelector("table").style = color;

	});

	
	function clickme(){
		// Creates pop-up
		alert('Hey, you clicked me!');
	};
	// Creates event that calls clickme function when table is clicked
	document.querySelector("table").addEventListener("click", clickme)
};

window.onload = initialize();