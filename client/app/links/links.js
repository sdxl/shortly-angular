angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};
  $scope.data.links = [];


  $scope.getLinks = function(){
    Links.getLinks()
    .then(function(data){
      for (var key in data) {
        console.log(data);
        $scope.data.links.push(data[key])
      }
    })
  };


  $scope.counts = function(index){
    console.log(index)
    $scope.data.links[index].visits ++;
  }

  $scope.getLinks();
});
