(function() {
  var app = angular.module('question', []);

  app.controller('DataController', ['$http', function($http) {
    //this.questions = ask;
    var blog = this;
    blog.questions = [];

    $http.get('/api/v1/getQuestions').success(function(data) {
      blog.questions = data;
      console.log('data is' + data);
      console.log('activity is' + data);
    });
  }]);

  app.controller('AnswerController', ['$http', function($http) {
    var questions = this;
    questions.tags = [];
    console.log('calling post');

    $http.get('/api/v1/getQuestions').success(function(data) {
      questions.title = data.title;
      questions.body = data.body;
      console.log('data is' + data);
      console.log('question is' + questions.body);
      console.log('activity is' + data);
    });
  }]);

  app.controller('questionController', function($scope, $http) {
    $scope.askedQuestion = {};

    $scope.processQuestionForm = function() {
      console.log('posting question now');
      console.log($scope.askedQuestion);
      $http({
        url: 'http://localhost:8000/api/v1/askQuestion',
        method: "POST",
        data: JSON.stringify($scope.askedQuestion)
      }).success(function(data) {
        console.log(data);
      });
    };
  });
})();
