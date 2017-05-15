import $ from 'jquery';

export const formDataMap = [{
  formKey: "sampleForm",
  inputList: [
    {
      elemKey: "js-firstName",
      messages: { "isRequired": "Please enter a valid first name" }
    },
    {
      elemKey: "js-lastName",
      messages: { "isRequired": "Please enter a valid last name" }
    },
    {
      elemKey: "js-subject",
      messages: { "isRequired": "Please enter a required value country" }
    },
    {
      elemKey: "js-description",
      messages: { "isRequired": "Please enter some required text here." }
    },
    {
      elemKey: "js-agreement",
      messages: { "isRequired": "Checkbox is required" }
    },
    {
      elemKey: "js-email",
      messages: {
        "isRequired": "Please enter a valid email address",
        "email": "Only valid email address is allowed."
      }
    },
    {
      elemKey: "js-favNumber",
      formatPattern: "[0-9]{5}",
      messages: {
        "isRequired": "Please enter a valid email address",
        "pattern": "Please enter a numeric and 5 digits long.",
        "email": "Only valid email address is allowed."
      }
    },
    {
      elemKey: "js-password",
      messages: {
        "isRequired": "Please enter a secure password"
      }
    },
    {
      elemKey: "js-passwordVerify",
      partner: "js-password",
      messages: {
        "isRequired": "Please enter a secure password",
        "partner": "Password values need to match."
      }
    }
  ]},
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
			  elemKey: "js-subject",
			  messages: { "isRequired": "Please select a topic." }
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
		  },
      {
        elemKey: "js-password",
        messages: {
          "isRequired": "Please enter a secure password"
        }
      },
      {
        elemKey: "js-passwordVerify",
        partner: "js-password",
        messages: {
          "isRequired": "Please enter a secure password",
          "partner": "Password values need to match."
        }
      }
	  ]
  },
  {
    formKey: "subscribeStep2Form",
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
        elemKey: "js-gender",
        messages: { "isRequired": "Please select a gender." }
        },
      {
        elemKey: "js-country",
        messages: { "isRequired": "Please select a country." }
      },
      {
        elemKey: "js-zipcode",
        messages: { "isRequired": "Please enter a valid zipcode." }
      },
      {
        elemKey: "js-city",
        messages: { "isRequired": "Please enter a city." }
      },
      {
        elemKey: "js-address",
        messages: { "isRequired": "Please enter your address." }
      },
      {
        elemKey: "js-state",
        messages: { "isRequired": "Please select a state." }
      }
    ]
  },
  {
	  formKey: "resetPasswordForm",
	  inputList: [{
      elemKey: "js-email",
      messages: {
        "isRequired": "Please enter a valid email address.",
        "email": "Only valid email address is allowed."
      }
    }]
  }
];

export const currentForm = $(`form.js-FormValidation`);

export const formKey = $(currentForm).attr('id');

export const formInputList = $(currentForm).find(`input[type=text], input[type=number], input[type=email], input[type=password], select, input[type=checkbox], textarea`);

export const formOptionList = $(currentForm).find(`select, input[type=checkbox]`);

export const formInputStatusList = () => $(currentForm).find(`input[valid-input="false"], textarea[valid-input="false"], select[valid-input="false"]`);


