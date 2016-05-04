(function(){
	angular
		.module('app.start')
		.controller('StartCtrl', StartCtrl);

	// StartCtrl.$inject = ['$scope'];
	StartCtrl.$inject = ['mainService']
	function StartCtrl(mainService){
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