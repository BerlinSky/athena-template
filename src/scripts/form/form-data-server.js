import $ from 'jquery';

export const formDataMap = [

  {
	  formKey: "contactForm",
	  inputList: [
		  {
			  elemKey: "js-firstName",
			  messages: { "isRequired": "Please enter a valid first name." }
		  },
		  {
			  elemKey: "js-lastName",
			  messages: { "isRequired": "Please enter a valid last name." }
		  },
		  {
			  elemKey: "js-email",
			  messages: {
				  "isRequired": "Please enter a valid email address.",
				  "email": "Only valid email address is allowed."
			  }
		  },
			{
			  elemKey: "js-description",
			  messages: { "isRequired": "Please enter some required text here." }
			}
	  ]
  },

  {
	  formKey: "newsLetterForm",
	  inputList: [
		  {
			  elemKey: "js-country",
			  messages: { "isRequired": "Please select a country." }
		  },
		  {
			  elemKey: "js-zipcode",
			  messages: { "isRequired": "Please enter a valid zipcode." }
		  },
		  {
			  elemKey: "js-email",
			  messages: {
				  "isRequired": "Please enter a valid email address.",
				  "email": "Only valid email address is allowed."
			  }
		  },
	    {
	      elemKey: "js-agreement",
	      messages: { "isRequired": "Checkbox is required" }
	    },
		  {
			  elemKey: "js-tos",
			  messages: { "isRequired": "Please agree to the Terms and Conditions." }
		  },
      ]
  },

  {
	  formKey: "loginForm",
	  inputList: [
		  {
			  elemKey: "js-password",
			  messages: { "isRequired": "Please enter your password." }
		  },
		  {
			  elemKey: "js-email",
			  messages: {
				  "isRequired": "Please enter a valid email address.",
				  "email": "Only valid email address is allowed."
			  }
		  }
	  ]
  },

  {
	  formKey: "resetPasswordForm",
	  inputList: [
		  {
			  elemKey: "js-email",
			  messages: {
				  "isRequired": "Please enter a valid email address.",
				  "email": "Only valid email address is allowed."
			  }
		  }
	  ]
  },

  {
	  formKey: "updatePasswordForm",
	  inputList: [
		  {
			  elemKey: "js-password",
			  messages: { "isRequired": "Please enter a valid password." }
		  },
		  {
			  elemKey: "js-passwordVerify",
			  messages: { "isRequired": "Please re-enter your password." }
		  },
		  {
			  elemKey: "js-userName",
			  messages: { "isRequired": "Please enter your user name." }
		  },
	  ]
  }

];

export const currentForm = $(`form.js-FormValidation`);

export const formKey = $(currentForm).attr('id');

export const formInputList = $(currentForm).find(`input[type=text], input[type=email], select, input[type=checkbox], textarea`);

export const formOptionList = $(currentForm).find(`select, input[type=checkbox]`);

export const formInputStatusList = () => $(currentForm).find(`input[valid-input="false"], textarea[valid-input="false"], select[valid-input="false"]`);

