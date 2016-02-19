function Character(name, description, img) {
	this.name = name
	this.description = description
	this.img = img
}

var pig = new Character("Porkus the Fat", 
	"Porkus hails from a land far away. Not much is known about this enigmatic fellow, but we do know one thing...he likes to eat.",
	"img/characters/pig.jpg")

var dog = new Character("Barkington the Loyal",
	"Barkington's fame is spread wide and far, the mere mention of him is known to send his enemies into a fit of terror. In addition he is extremely proficient at digging up bones and burying them.",
	"img/characters/dog.gif")

var turtle = new Character("Wiley the Steady", 
	"The legend goes that a long, long time ago old Wiley prevailed against a mighty foe from the Rabbit Clan with the power of his will", 
	"img/characters/turtle.png")

var crow = new Character("Crowley the Cautious", 
	"Cunning and Intelligent, uses powerful magic to slay it's enemies.",
	"img/characters/crow.jpg")

var fish = new Character ("Fish the Dragon",
	"Don't be fooled by her looks, though she looks cute and tame beneath the visage is a fire-breathing dragon. No one knows why she looks like a fish.", 
	"img/characters/fish.png")

var characters = [pig, dog, turtle, crow, fish];

var charsAvailable = [];

var isInArray = function(value, array) {
	return array.indexOf(value) > -1;
}

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
randomizeChars();

// Add randomized character to a grid/the selection area
function createEl(elName, tag, attr, attrName, parentNode ) {
	var elName = document.createElement(tag);
	elName.setAttribute(attr, attrName);
	var parent = parentNode;
	parent.appendChild(elName);
}

var addChar = function(charArray) {
	createEl("container", "div", "class", "container", 'document.getElementById("storyboard")')
	// var container = document.createElement("div");
	// container.setAttribute("class", "container");
	// document.getElementById("storyboard").appendChild(container);
		
		var title = document.createElement("h2");
		title.innerHTML = "Choose your hero";
		container.appendChild(title);

		var innerRow = document.createElement("div");
		innerRow.setAttribute("class", "inner row");
		container.appendChild(innerRow);


	for (var i = 0; i < charsAvailable.length; i++) {
		var character = document.createElement("div");
		character.setAttribute("class", "character col-xs-6");
		innerRow.appendChild(character);
			var img = document.createElement("img");
			img.setAttribute("src", charsAvailable[i].img);
			character.appendChild(img);

			var name = document.createElement("h4");
			name.innerHTML = charsAvailable[i].name;
			character.appendChild(name);

			var desc = document.createElement("p");
			desc.innerHTML = charsAvailable[i].description;
			character.appendChild(desc);

	}
}
addChar(charsAvailable);

// Remove the HTML from the index.html

function nextStep() {
	var sb = document.getElementById("storyboard");
	console.log(sb)
	sb.innerHTML = "";
}






