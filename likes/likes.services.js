(function () {
  "use strict";
  angular
    .module('focus')
    .factory('LikesServices',function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/scrabble1';
      var getLikes = function(el){
        if(!localStorage.getItem('words')){
          return [];
        }else{
          var storedNames = JSON.parse(localStorage['words']);
          return storedNames
        }
      }
      var getScore = function(){
        if(!localStorage.getItem('score')){
          return 0;
        }else{
          return parseInt(localStorage.getItem('score'))
        }
      };

    return{
    getLikes:getLikes,
    getScore:getScore,
  };
    });
})();
