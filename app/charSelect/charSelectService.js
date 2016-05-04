(function(){
	angular
		.module('app.charSelect')
		.factory('randomize', randomize);

	function randomize() {
		var service = {
			arraySelect: arraySelect
		};
		return service;
		//////////////////////////
		function arraySelect(array, arrayCutSize) {
			var randomizedArray =[];
			for (var i=0;i<arrayCutSize;i++) {
				var index = Math.floor(Math.random()*array.length);
				(randomizedArray).push(array[index]);
				array.splice(index,1);
			};
			return randomizedArray;
		};


	};






})();