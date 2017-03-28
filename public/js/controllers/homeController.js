angular.module('sampleApp').controller('homeCtrl', homeCtrl);
homeCtrl.$inject = ['$location','$routeParams','$window','$mdToast','$mdDialog','$interval'];

function homeCtrl($location,$routeParams,$window,$mdToast,$mdDialog,$interval) {
    var vm = this;

    vm.angularCounter = 0;
    vm.nodeCounter = 0;
    vm.reactCounter = 0;

    $interval(function() {
        vm.angularCounter += 2.5;
        vm.nodeCounter += 2.5;
        vm.reactCounter += 2.5;

        if (vm.angularCounter > 80) vm.angularCounter = 80;
        if (vm.nodeCounter > 65) vm.nodeCounter = 65;
        if (vm.reactCounter > 45) vm.reactCounter = 45;

    }, 100, 0, true);

    vm.showEmail = function(){
        console.log("aahh");
        $mdToast.show(
            $mdToast.simple()
                .toastClass('md-toast-error')
                .textContent('You can send me a message to ernestopm20@gmail.com')
                .position('bottom right')
                .parent("#content")
                .hideDelay(3000)
        );

        $mdDialog.show($mdDialog.alert()
            .parent(angular.element(document.body))
            .clickOutsideToClose(true)
            .title('Error')
            .textContent("holi")
            .ariaLabel('Alert Dialog Demo')
            .ok('Got it!')
        );
    }

}