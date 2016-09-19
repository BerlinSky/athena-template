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

  // Fixed header component:

  let main = $("main");
  let header = $("header");
  let hHeight;

  function setTopHeight() {
    hHeight = header.offsetHeight;
    main.css("padding-top", hHeight + "px");
  }

  function onScroll() {
    window.addEventListener("scroll", callbackFunc);

    function callbackFunc() {
      const y = window.pageYOffset;
      if (y > 50) {
        header.addClass("scroller");
      } else {
        header.removeClass("scroller");
      }
    }
  }

  window.onload = function() {
    setTopHeight();
    onScroll();
  };

  window.onresize = function() {
    setTopHeight();
    onScroll();
  };
});


  
  


  




