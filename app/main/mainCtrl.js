(function(){
	'use strict';

	angular
		.module('app')
		.controller('MainCtrl',MainCtrl);

	MainCtrl.$inject = ['mainService'];
	function MainCtrl(mainService) {
		/*jshint validthis: true */
		var vm = this;
		vm.sceneNo = 'start';
		vm.nextScene = nextScene;
		vm.character =  "";
		vm.setCharacter = setCharacter;

		////////////////////////////////////////
		function nextScene(destinationScene) {
			vm.sceneNo = destinationScene;
			console.log('Currently on vm.sceneNo: '+ vm.sceneNo);
		}
		function setCharacter(setChar) {
			vm.character = setChar.toString();
			console.log('Set Character to '+ vm.character)
		}


	}
})();