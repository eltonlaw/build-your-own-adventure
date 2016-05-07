(function() {
	'use strict';

	angular
		.module('app.main')
		.factory('mainService', mainService);

	mainService.$inject=['$rootScope'];

	function mainService($rootScope) {
		var service = {
			setCharacter: setCharacter,
			getCharInfo: getCharInfo
		};

		return service;
		///////////////////////////////////////
		function setCharacter(character){
			console.log('mainService.setCharacter is running')
			$rootScope.character = character;
			console.log('Set $rootScope.character to ' + character);
			return character;
		}

		function getCharInfo(character) {
			console.log("Showing info of current character:" + character);
			switch (character) {
				case "Barkington":
					return {
						ability : "Dig"
					}
				case "Porkus":
					return {
						ability: "Eat"
					}
				case "Fish":
					return {
						ability: "Breathe Fire"
					}
				case "Wiley":
					return {
						ability: "Defend"
					}
				case "Crowley":
					return {
						ability: "Electric Shock"
					}








			}
 		}



	}
})();