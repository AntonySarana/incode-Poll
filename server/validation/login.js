const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  /*if(!Validator.isLength(data.email, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 to 30 chars';
  }

  if(Validator.isEmpty(data.email)) {
    errors.name = 'Name field is required';
  }*/
   if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = 'Email is required';
  }


  if(!Validator.isLength(data.password, {min: 6, max: 30})) {
    errors.password = 'Password must have 6 chars';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

 
  return {
    errors,
    isValid: isEmpty(errors)
  }
}