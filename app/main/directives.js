(function(){
	'use strict';
	angular
		.module('app')
		.directive('sceneStart', function() {
			return {
				restrict: 'E',
				templateUrl: 'app/start/startView.html'
				// Controller: StartCtrl
			}
		});
	angular
		.module('app')
		.directive('charSelect', function() {
			return {
				restrict: 'E',
				templateUrl: 'app/charSelect/charSelectView.html'
				// Controller: CharSelectCtrl
			}
		});
	angular
		.module('app')
		.directive('intro', function() {
			return {
				restrict: 'E',
				templateUrl: 'app/intro/introView.html'
				// Controller: IntroCtrl
			}
		});
	angular
		.module('app')
		.directive('scene1', function() {
			return {
				restrict: 'E',
				templateUrl: 'app/scene1/scene1View.html'
				// Controller: IntroCtrl
			}
		});
})();