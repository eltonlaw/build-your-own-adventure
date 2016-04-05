app.controller('Characters', ['$scope', function($scope) {
	$scope.title = "Choose your hero";
	
//Total character list
	var characterList = [
	{
		name: "Porkus the Fat", 
		description:"Porkus hails from a land far away. Not much is known about this enigmatic fellow, but we do know one thing...he likes to eat.",
		image:"img/characters/pig.jpg"
	},
	{
		name:"Barkington the Loyal",
		description:"Barkington's fame is spread wide and far, the mere mention of him is known to send his enemies into a fit of terror. In addition he is extremely proficient at digging up bones and burying them.",
		image:"img/characters/dog.gif"
	},
	{
		name:"Wiley the Steady", 
		description: "Ol' Wiley's partially crazy, he's always talking about how he beat a rabbit in a race in his younger days",
		image:"img/characters/turtle.png"
	},
	{
	name:"Crowley the Cautious", 
	description:"Cunning and Intelligent, uses powerful magic to slay it's enemies.",
	image:"img/characters/crow.jpg"
	},
	{
		name:"Fish the Dragon",
		description:"Don't be fooled by her looks, though she looks cute and tame beneath the visage is a fire-breathing dragon. No one knows why she looks like a fish.", 
		image:"img/characters/fish.png"
	}
	];

//Randomly generates array containing four characters
	var randomizeChars = function() {
		var charArray = [];
		var x;
		var randomChar;
		while (charArray.length < 4) {
			x = Math.floor(Math.random() * characterList.length);
			randomChar = characterList[x];
			if(charArray.contains(randomChar)){
				continue;
			} else {
				charArray.push(randomChar);
			}
		}
		return charArray
	};
//Assigns randomly generated available character array to scope
	$scope.availableCharacters = randomizeChars();
}]);