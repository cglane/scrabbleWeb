(function () {
  angular
    .module('focus')
    .controller('FocusController', function ($scope,FocusService,$routeParams) {
      console.log('routeParams',$routeParams.focusId);
      $scope.currentWord = $routeParams.focusId;
      $scope.score = FocusService.scores($routeParams);
      FocusService.definition($routeParams.focusId).success(function(data){
        $scope.definitions = data;
      });
      $scope.onAddSearch = function(word){
        var returnedArray = FocusService.getLikedWords()
          console.log('word',returnedArray)
          if(!_.contains(returnedArray,word)){
            FocusService.onAddSearch(word);
          }
        };
    });
})();
