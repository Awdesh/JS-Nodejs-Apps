(function() {
  var app = angular.module('question', []);

  app.controller('DataController', function() {
    this.questions = ask;
  });

  app.controller('AnswerController', function() {
    this.answer = {};

    this.addAnswer = function(ask) {
      ask.answers.push(this.answer);
      this.answer = {};
    };
  });

  var ask = [
    {
      title: "What is the weather for next week?",
      text: 'It is raining these days a lot, How about weather for the next week?',
      tags: 'weather',
      author: 'awdesh@outlook.com',
      answered: true,
      isQuestion: false,
      answers: [
        {
          stars: 5,
          body: 'Yes',
          author: 'awdesh.sharma1@gmail.com'
        },
        {
          stars: 3,
          body: 'Not sure',
          author: 'demo@gmail.com'
        }
      ]
    },
    {
      title: 'How many monday in an year?',
      text: 'monday being quite infamous already, just curious to kknwo how many depressed days are in an year',
      tags: 'year',
      author: 'awdesh@outlook.com',
      answered: false,
      isQuestion: false,
      answers: [
        {
          stars: 5,
          body: '52',
          author: 'awdesh.sharma1@gmail.com'
        },
        {
          stars: 1,
          body: '50',
          author: 'demo@gmail.com'
        }
      ]
    }
  ];
})();
