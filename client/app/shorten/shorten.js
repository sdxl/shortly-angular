angular.module('shortly.shorten', ['shortly.links'])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function(){
    Links.createLink($scope.link)
      .then(function(code){
        $scope.link.code = code;
      })
  };

});
