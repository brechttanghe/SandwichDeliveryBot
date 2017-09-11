angular.module('sandwichbot', ['ngRoute']).config(config);

function config($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'angular-app/bot/bot.html',
            controller: BotController,
            controllerAs: 'vm'
        });
}