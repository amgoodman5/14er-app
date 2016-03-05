app.service("fourteenerService", function($http){
  var fourteenerService = {};

  fourteenerService.getFourteeners = function(){
    return $http.get("http://localhost:3000/14ers", {method: "jsponp"});
    return $http.get("https://api-14er.herokuapp.com/14ers", {method: "jsonp"});
  }

  fourteenerService.getFourteener = function(fourteener_id){
    return $http.get("http://localhost:3000/14ers/"+fourteener_id);
    return $http.get("https://api-14er.herokuapp.com/14ers/"+fourteener_id, {method: "jsonp"});
  }

  return fourteenerService;
});
