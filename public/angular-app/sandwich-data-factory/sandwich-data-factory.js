angular.module('sandwichbot').factory('sandwichDataFactory', sandwichDataFactory);

function sandwichDataFactory($http){
    return {
        sandwichList : sandwichList
    }

    function sandwichList(){
        return $http.get('/api/sandwiches').then(complete).catch(failed);
    }

    function complete(response){
        return response;
    }

    function failed(error){
        console.log(error.statusText);
    }
}