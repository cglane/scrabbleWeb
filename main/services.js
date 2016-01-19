(function () {
  "use strict";
  angular
    .module('scrabble')
    .factory('MainService',function($http){
      var url = 'http://tiny-tiny.herokuapp.com/collections/scrabble1';

      var page ={
        dictionary:function(word){
          var urls="/definition/"+word;
          var urls2 = 'http://api.wordnik.com/v4/word.json/'+word+'/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';
          return $http.get(urls2);
        },
        alertMe:function(){
              console.log("hello everyone!");
        },
        //tally up all scrabble scores with
        scores:function(array){
          var myMap = [];
          _.each(array,function(el){
            var currentScore = 0;
            var word = el;
            _.each(el,function(letter){
              switch(letter){
              case "a": currentScore+=1;
              break;case "b":currentScore+=3;
              break;case "c":currentScore+=3;
              break;case "d":currentScore+=2;
              break;case "e":currentScore+=1;
              break;case "f":currentScore+=4;
              break;case "g":currentScore+=2;
              break;case "h":currentScore+=4;
              break;case "i":currentScore+=1;
              break;case "j":currentScore+=8;
              break;case "k":currentScore+=5;
              break;case "l":currentScore+=1;
              break;case "m":currentScore+=3;
              break;case "n":currentScore+=1;
              break;case "o":currentScore+=1;
              break;case "p":currentScore+=3;
              break;case "q":currentScore+=10;
              break;case "r":currentScore+=1;
              break;case "s":currentScore+=1;
              break;case "t":currentScore+=1;
              break;case "u":currentScore+=1;
              break;case "v":currentScore+=4;
              break;case "w":currentScore+=4;
              break;case "x":currentScore+=8;
              break;case "y":currentScore+=4;
              break;case "z":currentScore+=10;
              break;
              default: 0
              break;
           }
            });
            var obj = {score:currentScore, scrabbleWord: word};
            myMap.push(obj);
            })
            return myMap;
        }

      };
      var insertChar = function(array,index,char){
        var localArray = array.slice();
        localArray.splice(index,0,char);
        return localArray;
      };
      var rmvChar = function(array,index){
        var localArray = array.slice();
        localArray.splice(index,1);
        return localArray;
      };
      var pushToArray = function(array,str){
        if(array.indexOf(str) <= -1 && Englishwords.indexOf(str)> -1){
      array.push(str)
    }
  };
  //inserts removed character into different position in substring
      var scramble = function(array,word){
        var localArray = word.split('')
        if(word.length > 0) {
          var curWord = word;
          for (var i = 0; i < word.length; i++) {
              var substr = rmvChar(localArray,i)
              var insLet = word[i];
              for (var j = 0; j < substr.length + 1; j++) {
                var currIt = insertChar(substr,j,insLet)
                var newWord = currIt.join("")
        pushToArray(array,newWord);//add all the permutations to array if not already there
      }
    }
  }
}
//decrements number of characters to be re-ordered
      var scrambleRe = function(array,word){
        for (var i = 0; i < word.length; i++) {
          for (var j = 0; j < word.length; j++) {
            var a = i
            var b = j;
            if(a > b){
              var nWord = word[i]+word[j];
            }else{
              var nWord = word.substr(i,j+1);
            }
      scramble(array,nWord);
    }
  }
  return page.scores(array);
}

      return{
        alertMe:page.alertMe,
        scrabbleMap : scrambleRe,
        definition : page.dictionary,
      };
    })
})();
