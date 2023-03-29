import React from 'react'

function Validation(values){
let error={}
const email_pattern=/^([A-Za-z0-9$])+\@([a-z])+\.([a-z])+$/
const password_pattern=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

if(values.email===""){
  error.email="Email should not be empty"
}

else if(!email_pattern.test(values.email))
{
error.email="Email does not match"
}
else{
  error.email=""
}
if(values.password==="")
{
  error.password="Password should not be empty"
}
else if(!password_pattern.test(values.password))
{
error.password="password does not match"
}
else{
  error.password=""
}
return error
}
export default Validation;