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

app.controller("TrailShowController", function($scope, fourteenerService, $routeParams){
  fourteenerService.getFourteener($routeParams.id).then(function(payload){
  fourteenerService.getTrails($routeParams.id).then(function(payload2) {
    $scope.trails = payload2.data;
    $scope.singleFourteener = payload.data[0];
  }, function(error){
    console.log("an error occurred");
    });
  })
});
