app.service("fourteenerService", function($http){
  var 14erService = {};

  fourteenerService.getFourteeners = function(){
    return $http.get("http://localhost:3000/14er", {method: "jsponp"});
    // return $http.get("https://frozen-badlands-34577.herokuapp.com/cats", {method: "jsonp"});
  }

  fourteenerService.getFourteener = function(fourteener_id){
    return $http.get("http://localhost:3000/14er/"+fourteener_id);
    // return $http.get("https://frozen-badlands-34577.herokuapp.com/cats/"+cat_id, {method: "jsonp"});
  }

  return fourteenerService;
});
