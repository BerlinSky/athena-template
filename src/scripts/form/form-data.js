import $ from 'jquery';

export const formDataMap = [{
  formKey: "contactForm",
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
      elemKey: "js-email",
      messages: {
        "isRequired": "Please enter a valid email address",
        "email": "Only valid email address is allowed."
      }
    }
  ]}
];

export const currentForm = $(`form.js-FormValidation`);

export const formKey = $(currentForm).attr('id');

export const formInputList = $(currentForm).find(`input[type=text], input[type=email]`);

export const formInputStatusList = $(currentForm).find(`input[valid-input="false"], textarea[valid-input="false"], select[valid-input="false"]`);

