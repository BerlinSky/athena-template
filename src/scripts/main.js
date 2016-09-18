import $ from 'jquery';
import 'chosen';

$(function () {
	console.log("Here!");

	$(".chosenSelect").chosen({
		max_selected_options: 1
	})

	console.log("There!");

  $('.actionForm .input-group input').focusout(function() {
    
    const text_val = $(this).val();
    
    if(text_val === "") {
      $(this).removeClass('has-value');
    } 
    else {
      $(this).addClass('has-value');
    }
    
  });

});


  
  


  




