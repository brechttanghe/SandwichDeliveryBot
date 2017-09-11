var app = angular.module('sandwichbot').controller('botController', BotController);

function BotController($scope,sandwichDataFactory){
    var vm = this;
    var yesno = false; 
    var address = false;
    vm.messages = ['[BOT] : Welcome to the SandwichDelivery bot! Do you want to order a sandwich?(yes/no)'];
    

    sandwichDataFactory.sandwichList().then(function(response){
        vm.sandwiches = response.data;
    })

    vm.test = function(){
        vm.messages.push("[CLIENT] : " + $scope.message);

        if($scope.message.toLowerCase() === 'yes'){
            vm.messages.push("[BOT] : choose a number");
            for(var i = 0; i < vm.sandwiches.length;i++ ){
                vm.messages.push("   " + (i + 1) + ". " + vm.sandwiches[i].name + " : " + vm.sandwiches[i].description);
            }
            yesno = true; 
        }

        if(address){
            vm.messages.push("[BOT] : your order will be delivered! ");
        }

        if($scope.message >= 1 && $scope.message <= vm.sandwiches.length && yesno){
            vm.messages.push("[BOT] : you have chosen " + vm.sandwiches[$scope.message - 1].name);
            vm.messages.push("[BOT] : Can you please enter your address ? ");
            yesno = false;
            address = true;
        }




        $scope.message = "";
    }

}
    

