(function(){
	'use strict';

	angular
		.module('app.scene1')
		.controller('Scene1Ctrl',Scene1Ctrl);

	// Scene1Ctrl.$inject = ['',''];

	function Scene1Ctrl() {
		var vm = this;
		console.log('Scene1Ctrl Working!');
		vm.link = "app/main/selectedChar.html";
	};


})();