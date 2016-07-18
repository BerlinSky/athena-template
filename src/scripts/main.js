import $ from 'jquery';
import 'chosen';

$(function () {
	console.log("Here!");

	$(".chosenSelect").chosen({
		max_selected_options: 1
	})

	console.log("There!");
});



  




