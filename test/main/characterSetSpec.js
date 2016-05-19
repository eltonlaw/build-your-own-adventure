'use strict';
describe('characterSet service', function() {
var $rootScope,characterSet;

	beforeEach(function() {
		module('app.main');
		inject(function(_$rootScope_,_characterSet_){
			$rootScope = _$rootScope_;
			characterSet = _characterSet_;
		});
	});

	it('hello test', function() {
		expect('hello').toEqual('hello'); 
	});

	it('characterSet exists',function(){
		expect(characterSet).toExist;
	});

	it('Set character to Barkington',function(){
		characterSet.setCharacter('Barkington');
		expect($rootScope.character).toEqual('Barkington');
	});



});