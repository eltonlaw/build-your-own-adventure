'use strict';
describe('MainCtrl', function(){
	var $controller,scope;
	beforeEach(function() {
		module('app');
		inject(function(_$controller_) {
			$controller = _$controller_('MainCtrl', {});
		});
	});

	it('should have default scene be "start"', function() {
		expect($controller.sceneNo).toBe('start');
	});
});