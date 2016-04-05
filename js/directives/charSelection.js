// Creates the char-sel element
app.directive('charSel', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: 'js/directives/charSelection.html'
	}
});