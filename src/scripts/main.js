import $ from 'jquery';
import { validateTextInputs } from './form/validation';

$(function () {
	const submitForm = $('form.js-campaignForm');

	$(submitForm).submit(function( event ) {
		event.preventDefault();

		const inputList = $(`.js-campaignForm input[type=text],
												 .js-campaignForm input[type=password],
												 .js-campaignForm input[type=email],
												 .js-campaignForm input[type=number]`);
		validateTextInputs(inputList);

		// const validateMessage = validateInput(testInput);
		// if (validateMessage) {
		//   inputErrorSpan.html(validateMessage);
		//   event.preventDefault();
		// }

		event.preventDefault();

	});

	$('.js-toggleMobileMenu').click(function(e) {
		e.preventDefault();

		const mobileMenu = $('.js-mobileMenuContainer');
		mobileMenu.toggle("slow");
	})

	const menuWrapper = document.querySelector('.js-menuWrapper');

	const showSearchPanel = document.querySelector('.js-showSearchPanel');
	showSearchPanel.addEventListener('click', (e) => {
		e.preventDefault();

		menuWrapper.classList.add('showSearchPanel');
	})

	const hideSearchPanel = document.querySelector('.js-hideSearchPanel');
	hideSearchPanel.addEventListener('click', (e) => {
		e.preventDefault();

		menuWrapper.classList.remove('showSearchPanel');
	})

});
