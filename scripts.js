function Character(name, description, img) {
	this.name = name
	this.description = description
	this.img = img
}

var pig = new Character("Porkus the Fat", 
	"Porkus hails from a land far away. Not much is known about this enigmatic fellow, but we do know one thing...he likes to eat.",
	"../img/characters/pig.jpg")

var dog = new Character("Barkington the Loyal",
	"Barkington's fame is spread wide and far, the mere mention of him is known to send his enemies into a fit of terror. In addition he is extremely proficient at digging up bones and burying them.",
	"../img/characters/dog.gif")

var turtle = new Character("Wiley the Steady", 
	"The legend goes that a long, long time ago old Wiley prevailed against a mighty foe from the Rabbit Clan with the power of his will", 
	"../img/characters/turtle.png")

var crow = new Character("Crowley the Cautious", 
	"Cunning and Intelligent, uses powerful magic to slay it's enemies.",
	"../img/characters/crow.jpg")

var fish = new Character ("Fish the Dragon",
	"Don't be fooled by her looks, though she looks cute and tame beneath the visage is a fire-breathing dragon. No one knows why she looks like a fish.", 
	"../img/characters/fish.png")

var characters = [pig, dog, turtle, crow, fish];

var charsAvailable = [];

var isInArray = function(value, array) {
	return array.indexOf(value) > -1;
}

var randomizeChars = function() {
	while(charsAvailable.length < 4) {
		var x = Math.random() * characters.length;
		var y = Math.floor(x);
		var result = characters[y].name;
		if (isInArray(result, charsAvailable)) {
			continue;
		} else {
			charsAvailable.push(result);
		}
	}
}
randomizeChars();

// Add randomized character to a grid/the selection area
var addChar = function(charArray) {
	for (var i = 0; i < charsAvailable.length; i++) {
		//Create each div, image, name, description
		//Append it to the HTML doc inside the class inner
	}
}

addChar(charsAvailable);



