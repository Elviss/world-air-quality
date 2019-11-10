angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http, $timeout) {

  $scope.url = "https://api.waqi.info/feed/here/?token=5fe61f8baca8b461cc3fa8be1bda672393041ca1";

  $scope.infos = {};

  $http.get($scope.url)
      .success(function(response){
        console.log(response);

        $scope.infos = response.data;

      })
      .error(function(){
        console.log('error');
      });

  $scope.doRefresh = function() {

    console.log('Refreshing!');

    $timeout( function() {

      $http.get($scope.url)
        .success(function(response){
          console.log(response);

          $scope.infos = response.data;

        })
        .error(function(){
          console.log('error');
        });

      $scope.$broadcast('scroll.refreshComplete');

    }, 1000);

  }

})

.controller('ChatsCtrl', function($scope, $http) {

  $scope.infos = {
    data: []
  };
  $scope.a = {};
  $scope.retorno = false;
  $scope.status = null;

  $scope.buscar = function() {

    $scope.infos = {};

    var cidade = $scope.a.buscar;

    $scope.url = "https://api.waqi.info/feed/" + cidade + "/?token=5fe61f8baca8b461cc3fa8be1bda672393041ca1";

    $http.get($scope.url)
      .success(function (response) {

          $scope.status = response.status;

          $scope.infos = response.data;

      })
      .error(function () {
        console.log('error');
      });
  }
});
