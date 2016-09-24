(function() {
  var app = angular.module('question', []);

  app.controller('DataController', ['$http', function($http) {
    //this.questions = ask;
    var blog = this;
    blog.questions = [];

    $http.get('/activities').success(function(data) {
      blog.questions = data;
      console.log('data is' + data);
      console.log('activity is' + data);
    });


  }]);

  app.controller('AnswerController', ['$http', function($http) {
    this.answer = {};

    var formInput = {
      "personalText": 'personalText',
      "professionalText": 'professionalText',
      "otherText": 'otherText'
    };

    var data = JSON.stringify(formInput);

    $http.post('/activities', {
      param: data
    });

  // this.addAnswer = function(ask) {
  //   ask.answers.push(this.answer);
  //   this.answer = {};
  // };
  }]);
})();
