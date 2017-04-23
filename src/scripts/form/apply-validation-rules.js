import { validate } from "validate.js";
import { prop } from 'ramda';

export const validateRequired = (key, value, msg) => {
  const constraint = { [key]: {
    presence: { message: `^${msg}` }
  }};
  return validate( {[key]: value}, constraint );
}

export function readValidationMsg(key, messageList) {
  if(messageList) {
    return prop(key, messageList);
  }
}

