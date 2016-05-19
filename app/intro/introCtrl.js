(function(){
	'use strict';

	angular
		.module('app.intro')
		.controller('IntroCtrl',IntroCtrl);

	// Scene1Ctrl.$inject = ['',''];

	function IntroCtrl() {
		var vm = this;
		console.log('IntroCtrl Working!');
		vm.selectedCharE = "app/main/selectedChar.html";
	};


})();