(function() {
  angular
    .module('app.main')
    .controller('ModalCtrl', ModalCtrl);

    ModalCtrl.$inject=['$rootScope','characterSet','$uibModal','$log'];

    function ModalCtrl ($rootScope, characterSet,$uibModal, $log) {
      var vm = this;
      vm.character = $rootScope.character;
      vm.charInfo = characterSet.getCharInfo(vm.character);

    vm.animationsEnabled = true;

    vm.open = function (size) {

      var modalInstance = $uibModal.open({
        animation: vm.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        windowTopClass: "margin-top10",
        resolve: {
          charInfo: function () {
            return vm.charInfo;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    vm.toggleAnimation = function () {
      vm.animationsEnabled = !vm.animationsEnabled;
    };

  };

  // Please note that $uibModalInstance represents a modal window (instance) dependency.
  // It is not the same as the $uibModal service used above.

  angular
    .module('app.main')
    .controller('ModalInstanceCtrl', ModalInstanceCtrl);

  ModalInstanceCtrl.$inject = ['$uibModalInstance','charInfo']

  function ModalInstanceCtrl($uibModalInstance, charInfo) {
    var vm =this;
    vm.charInfo = charInfo;
  };

})();