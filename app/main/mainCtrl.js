(function(){
	'use strict';

	angular
		.module('app')
		.controller('MainCtrl',MainCtrl);

	MainCtrl.$inject = ['characterSet', '$uibModal'];
	function MainCtrl(characterSet, $uibModal) {
		/*jshint validthis: true */
		var vm = this;
		vm.sceneNo = 'start';
		vm.nextScene = nextScene;
		vm.character =  "";
		vm.setCharacter = setCharacter;
		vm.charInfo = charInfo;

		////////////////////////////////////////
		function nextScene(destinationScene) {
			vm.sceneNo = destinationScene;
			console.log('Currently on vm.sceneNo: '+ vm.sceneNo);
		};
		function setCharacter(character) {
			vm.character = characterSet.setCharacter(character);
			console.log('Set Character to '+ vm.character);
		};
		function charInfo() { 
			return characterSet.getCharInfo(vm.character);
		};

	}
})();