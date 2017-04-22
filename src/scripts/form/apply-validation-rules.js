import { validate } from "validate.js";
import { forEach, prop, isNil, isEmpty } from 'ramda';

export const validateRequired = (key, value, msg) => {
  const constraint = { [key]: {
    presence: { message: `^${msg}` }
  }};
  return validate( {[key]: value}, constraint );
}

export function validationMsg(key, messageList) {
  if(messageList) {
    return prop(key, messageList);
  }
}

