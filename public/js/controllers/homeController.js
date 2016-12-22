angular.module('sampleApp').controller('homeCtrl', homeCtrl);
homeCtrl.$inject = ['$location','$routeParams','$window','$mdToast','$mdDialog'];

function homeCtrl($location,$routeParams,$window,$mdToast,$mdDialog) {
    var vm = this;



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