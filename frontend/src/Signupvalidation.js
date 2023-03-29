import React from 'react'

function Validation(values){
let error={}
const email_pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const password_pattern=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

if(!values.userName){
  error.userName="Name should not be empty"
}

if(!values.email){
    error.email="Email should not be empty"
  }
else if(!email_pattern.test(values.email))
{
error.email="Email Not a valid format"
}

if(!values.password)
{
  error.password="Password should not be empty"
}
else if(!password_pattern.test(values.password))
{
error.password="password Not a valid format"
}

return error;
}
export default Validation;