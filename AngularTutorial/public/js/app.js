(function() {
  var userList = [
    {
      name: 'Awdesh Sharma',
      role: 'Engineer',
      points: '100'
    },
    {
      name: 'Awdesh Sharma',
      role: 'Engineer',
      points: '100'
    },
    {
      name: 'Awdesh Sharma',
      role: 'Engineer',
      points: '100'
    }
  ];

  var app = angular.module('question', []);
  app.controller('DataController', function() {});

  app.controller('userController', function() {
    console.log('Inside users');
    this.users = userList;
  });

  app.controller('questionController', ['$http', '$scope', function($http, $scope) {
    $scope.askedQuestion = {};
    var questionsCollection = this;
    questionsCollection.questions = [];

    $scope.processQuestionForm = function() {
      $http({
        url: 'http://localhost:8000/api/v1/askQuestion',
        method: "POST",
        data: JSON.stringify($scope.askedQuestion)
      }).success(function(data) {
        console.log(data);
      });
      $scope.initFirst();
      $scope.askedQuestion = {};
    };

    $scope.initFirst = function() {
      console.log('calling get');

      $http.get('/api/v1/getQuestions').success(function(data) {
        questionsCollection.questions = data;
        console.log(questionsCollection.questions.length);
        console.log('data is' + $scope.askedQuestion.title);
      });
    };
  }]);
})();
