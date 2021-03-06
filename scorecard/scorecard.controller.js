(function () {
  angular
    .module('scorecard')
    .controller('ScoreCardController', function ($scope,ScoreCardServices,$routeParams) {
      console.log($routeParams.focusId);
      $scope.score = localStorage.getItem('total');
      console.log($scope);
      $scope.arrayScores = ScoreCardServices.scoreObject($routeParams.focusId);
      $scope.sum = 0;
      //add up initial sum
      _.each($scope.arrayScores,function(el){
        $scope.sum += el.score
      })
      //set initial total
      if(parseInt(localStorage.getItem('total'))){
        $scope.score = parseInt(localStorage.getItem('total'));
      }else{
        $scope.score = 0;
        localStorage.setItem('total',0);
      }
      console.log('score',typeof($scope.score))

      $scope.change=function(){
        var sum = 0;
        _.each($scope.arrayScores,function(el){
        sum += el.score;
      });
      $scope.sum = sum;
    };
      console.log('arrayScore',$scope.arrayScore);

      $scope.addToTotal = function(number){
      var total =  parseInt(localStorage.getItem("total"));
      var newTotal = total + number;
      localStorage.setItem('total',newTotal)
      console.log('total type',typeof(parseInt(total)));
      $scope.score = localStorage.getItem('total');
    };

      $scope.clearScore=function(){
        var zero = 0;
        localStorage.setItem('total',zero);
        $scope.score = localStorage.getItem('total');
      };
    })
})();
