(function(){
	angular
		.module('app.start')
		.controller('StartCtrl', StartCtrl);

	// StartCtrl.$inject = ['$scope'];
	StartCtrl.$inject = [];
	function StartCtrl(){
		/*jshint validthis: true */
		var vm = this;
		vm.options = [];
		vm.sceneNo = 0;
	/////////////////////////////
	
		var options = [
		{
			'name':'Play',
		},
		{
			'name':'Options',
		},
		{
			'name':'Credits',
		}

		];
		vm.options = options;
	};
})();