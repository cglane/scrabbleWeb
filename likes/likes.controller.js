(function () {
  angular
    .module('likes')
    .controller('LikesController', function ($scope,LikesServices) {
        $scope.data = LikesServices.getLikes();
        console.log($scope.data,'data');
        $scope.score = LikesServices.getScore();
    })
})();
