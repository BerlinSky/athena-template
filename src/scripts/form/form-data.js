import $ from 'jquery';

export const formDataMap = [{
  formKey: "js-FormValidation",
  inputList: [
    {
      elemKey: "js-userName",
      messages: { "isRequired": "Please enter a valid user name" }
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

export const formInputList = $(`.js-FormValidation input[type=text], .js-FormValidation input[type=email]`);

export const formInputStatusList = () => {
  const list = $(`.js-FormValidation input[valid-input="false"],
                                        .js-FormValidation textarea[valid-input="false"],
                                        .js-FormValidation select[valid-input="false"]`);

  return list;
}
