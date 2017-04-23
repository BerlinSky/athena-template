import { validate } from "validate.js";
import { prop, isNil, always, ifElse } from 'ramda';

export const validateRequired = (key, value, msg) => {
  const constraint = { [key]: {
    presence: { message: `^${msg}` }
  }};
  return validate( {[key]: value}, constraint );
}

export const readValidationMsg = (key, messageList) => {
  return ifElse(isNil, always(""), prop(key))(messageList);
}

