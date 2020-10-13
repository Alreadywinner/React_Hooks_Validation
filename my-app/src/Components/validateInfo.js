export default function validateInfo(values) {
    let errors = {};
  
    if (!values.your_name.trim()) {
      errors.your_name = 'Username required';
    }
    if(!values.your_check){
        errors.your_check = 'Please select I Accept';
    }
  
    if (!values.your_email) {
      errors.your_email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.your_email)) {
      errors.your_email = 'Email address is invalid';
    }
    if (!values.your_pass) {
      errors.your_pass = 'Password is required';
    } 
  
    if (!values.your_pass2) {
      errors.pass2 = 'Password is required';
    } else if (values.your_pass2 !== values.your_pass) {
      errors.your_pass2 = 'Passwords do not match';
    }
    return errors;
  }