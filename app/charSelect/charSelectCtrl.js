(function(){
	'use strict';
	angular
		.module('app.charSelect')
		.controller('CharSelectCtrl',CharSelectCtrl);

	CharSelectCtrl.$inject=['mainService','randomize'];

	function CharSelectCtrl(mainService, randomize) {
		var vm = this;
		vm.characterList = [];
		vm.availableCharacters = [];

	/////////////////////////

		vm.characterList = [
		{
			name: "Porkus the Fat", 
			description:"Porkus hails from a land far away. Not much is known about this enigmatic fellow, but we do know one thing...he likes to eat.",
			image:"assets/img/characters/pig.jpg",
			id:"Porkus"
		},
		{
			name:"Barkington the Loyal",
			description:"Barkington's fame is spread wide and far, the mere mention of him is known to send his enemies into a fit of terror. In addition he is extremely proficient at digging up bones and burying them.",
			image:"assets/img/characters/dog.gif",
			id:"Barkington"
		},
		{
			name:"Wiley the Steady", 
			description: "Ol' Wiley's always talking crazy, mumbling on something about how he beat a rabbit in a race in his teenager years. No one believes him though.",
			image:"assets/img/characters/turtle.png",
			id:"Wiley"
		},
		{
			name:"Crowley the Cautious", 
			description:"Cunning and Intelligent, uses powerful magic to slay it's enemies.",
			image:"assets/img/characters/crow.jpg",
			id:"Crowley"
		},
		{
			name:"Fish the Dragon",
			description:"Don't be fooled by her looks, though she looks cute and tame beneath the visage is a fire-breathing dragon. No one knows why she looks like a fish.", 
			image:"assets/img/characters/fish.png",
			id:"Fish"
		}
		];

		vm.availableCharacters = randomize.arraySelect(vm.characterList,4);
	};

})();