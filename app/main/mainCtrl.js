(function(){
	'use strict';

	angular
		.module('app')
		.controller('MainCtrl',MainCtrl);

	MainCtrl.$inject = ['$rootScope','mainService', '$uibModal'];
	function MainCtrl($rootScope, mainService, $uibModal) {
		/*jshint validthis: true */
		var vm = this;
		vm.sceneNo = 'start';
		vm.nextScene = nextScene;
		vm.character =  "";
		vm.setCharacter = setCharacter;
		vm.charInfo = charInfo;
		vm.displayCharInfo = displayCharInfo;

		////////////////////////////////////////
		function nextScene(destinationScene) {
			vm.sceneNo = destinationScene;
			console.log('Currently on vm.sceneNo: '+ vm.sceneNo);
		};
		function setCharacter(character) {
			vm.character = mainService.setCharacter(character);
			console.log('Set Character to '+ vm.character);
		};
		function charInfo() { 
			return mainService.getCharInfo(vm.character);
		};
		function displayCharInfo() {

		};

	}
})();