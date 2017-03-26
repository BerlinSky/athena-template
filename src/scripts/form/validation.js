import R from 'ramda';

export function buildConstraints(inputId, errorMsg) {
  return {
    [inputId]: {
      presence: { message: `^${errorMsg}` }
    }
  };
}

export function getErrorMessage(inputId, validdateResult) {
  return R.prop(inputId, validdateResult);
}
