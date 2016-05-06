(function(window){

    var searchEl = document.querySelector("#input");
	var labelEl = document.querySelector("#label");

    
	labelEl.addEventListener("click",function(){
		if (classie.has(searchEl,"focus")) {
			classie.remove(searchEl,"focus");
			classie.remove(labelEl,"active");
		} else {
			classie.add(searchEl,"focus");
			classie.add(labelEl,"active");
		}
	});

	document.addEventListener("click",function(e){
		var clickedID = e.target.id;
		if (clickedID != "search-terms" && clickedID != "search-label") {
			if (classie.has(searchEl,"focus")) {
				classie.remove(searchEl,"focus");
				classie.remove(labelEl,"active");
			}
		}
	});
}(window));