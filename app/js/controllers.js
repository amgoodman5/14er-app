app.controller("MainController", function($scope, $http, fourteenerService){
   // no instance variables here....
});

app.controller("14erIndexController", function($scope, fourteenerService){
  fourteenerService.getFourteeners().then(function(payload){
    $scope.fourteener_collection = payload.data;
  }, function(error){
    console.log("an error occurred");
  });
});

app.controller("14erShowController", function($scope, fourteenerService, $routeParams){
  the_id = $routeParams.id;
  fourteenerService.getFourteener(the_id).then(function(payload){
    $scope.singleFourteener = payload.data[0];
  }, function(error){
    console.log("an error occurred");
  });
});
