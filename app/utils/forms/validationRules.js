const validation = (value, rules, form) => {
  let valid = true;

  for (let rule in rules) {
    switch (rule) {
      case 'isRequired':
        valid = valid && validateRequired(value);
        break;
      case 'isEmail':
        valid = valid && validateEmail(value);
        break;
      case 'minLength':
        valid = valid && validateMinLength(value, rules[rule]);
        break;
      case 'maxLength':
        valid = valid && validateMaxLength(value, rules[rule]);
        break;
      case 'confirmPass':
        valid = valid && validateConfirmPass(value, form[rules.confirmPass].value);
        break;
      default:
        valid = true;
    }
  }

  return valid;
};

const validateRequired = v => !!v;

const validateEmail = value => {
  const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(value).toLocaleLowerCase());
};

const validateMinLength = (value, ruleValue) => value.length >= ruleValue;

const validateMaxLength = (value, ruleValue) => value.length <= ruleValue;

const validateConfirmPass = (confirmPass, pass) => confirmPass === pass;

export default validation;
