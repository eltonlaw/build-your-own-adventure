var characters = [pig, dog, turtle, crow, fish];

var charsAvailable = [];

var isInArray = function(value, array) {
	return array.indexOf(value) > -1;
}

// Randomly picks a character from the characters array and pushes that to charsAvailable 
//if it's not already in the array charsAvailable
var randomizeChars = function() {
	while(charsAvailable.length < 4) {
		var x = Math.random() * characters.length;
		var y = Math.floor(x);
		var result = characters[y];
		if (isInArray(result, charsAvailable)) {
			continue;
		} else {
			charsAvailable.push(result);
		}
	}
}

//Appends a div.container and h2.title inside #storyboard. Appends a div.inner_row into div.container
//Each character object contains html,a character div. Loops through the charsAvailable array and appends the html to the div.inner_row 
var addChar = function(charArray) {
	var container = document.createElement("div");
	container.setAttribute("class", "container");
	document.getElementById("storyboard").appendChild(container);
		
		var title = document.createElement("h2");
		title.innerHTML = "Choose your hero";
		container.appendChild(title);

		var innerRow = document.createElement("div");
		innerRow.setAttribute("class", "inner row");
		container.appendChild(innerRow);

		for (var i = 0; i < charsAvailable.length; i++) {
			var currentCharacter =charsAvailable[i];
			innerRow.appendChild(currentCharacter.html);
		}
}

function startGame() {
	randomizeChars();
	addChar(charsAvailable);
}
startGame();







