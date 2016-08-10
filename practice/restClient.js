$(document).ready(function() {
    $.ajax({
    	type: "GET",
    	dataType: "json",
        url: "http://rest-service.guides.spring.io/greeting",
        success: function(data){
			$('.greeting-id').append(data.id);        	
			$('.greeting-content').append(data.content);        	
    	},
    	error: function(status){
    		console.log('error occurred calling endpoint' + status);
    	}
	});
})

// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  
  $.get('http://rest-service.guides.spring.io/greeting', function(dreams) {
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('ul#dreams');
    });
  });

  $('form').submit(function(event) {
    event.preventDefault();
    dream = $('input').val();
    $.post('http://demo7866447.mockable.io/awdesh-post/?' + $.param({dream: dream}), function() {
      $('<li></li>').text(dream).appendTo('ul#dreams');
      $('input').val('');
      $('input').focus();
    });
  });

});


     
