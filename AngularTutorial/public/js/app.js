(function() {
  var app = angular.module('question', []);

  app.controller('DataController', ['$http', function($http) {
    //this.questions = ask;
    var blog = this;
    blog.questions = [];

    $http.get('/questions').success(function(data) {
      blog.questions = data;
      console.log('data is' + data);
      console.log('activity is' + data);
    });
  }]);

  app.controller('AnswerController', ['$http', function($http) {
    var questions = this;
    questions.answers = [];
    console.log('calling post');

    $http.get('/questions').success(function(data) {
      questions.answers = data;
      console.log('data is' + data);
      console.log('activity is' + data);
    });
  }]);

  app.controller('questionController', function($scope, $http) {
    $scope.askedQuestion = {};

    $scope.processQuestionForm = function() {
      console.log('posting question now');
      console.log($scope.askedQuestion);
      $http({
        url: 'http://localhost:8000/askQuestion',
        method: "POST",
        data: JSON.stringify($scope.askedQuestion)
      }).success(function(data) {
        console.log(data);
      });
    };
  });
})();
