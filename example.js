function retrieved(results) {

	var dropdown = document.getElementById("engines");
 	for (let searchEngine of results) {
	
		var name = searchEngine.name;
		var el = document.createElement("option");
		el.textContent = name;
    		el.value = name;
    		dropdown.appendChild(el);
	}
}


window.addEventListener('DOMContentLoaded', function(){

	var button = document.getElementById("search");
	var textarea = document.getElementById("query");
	var dropdown = document.getElementById("engines");

	
	browser.search.get().then(retrieved);
	
	
	button.addEventListener('click', function(){

		 browser.search.search({
   			query: textarea.value,
	  		engine: dropdown.value
  		});
	
	});


	
});