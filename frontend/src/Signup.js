import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Signupvalidation'
import axios from 'axios';
const Signup = () => {
  const [values, Setvalues] = useState({})
  const navigate = useNavigate();
  const [errors, SetErrors] = useState({})
  


  const handleSubmit = () => {
    // event.preventDefault();
    const formErrors = Validation(values);
    SetErrors(formErrors);
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0){
      axios.post('http://localhost:8081/signup', values).then(res => {
        console.log(res);
        navigate('/')
      }).catch(err => console.log(err));
    }
  }

  const handleinput = (event) => {
    Setvalues(prev => ({
      ...prev, [event.target.name]: event.target.value
    }))
  }
  return (
    <div className=' d-flex justify-content-center align-items-center bg-info vh-100'>
      <div className='bg-white p-5 rounded w-25'>
        <h2 className='text-center'>Sign-up</h2>
        {/* <form action="" onSubmit={handleSubmit}> */}
          <div className='mb-3'>
            <label htmlFor='Name'><strong>Name</strong></label>
            <input type="text" placeholder='Enter Name' className='form-control' name="userName" onChange={handleinput} value={values.userName} />
            <span className='text-danger'>{errors.userName}</span>
          </div>
          <div className='mb-3'>
            <label htmlFor='email'><strong>Email</strong></label>
            <input type='text' placeholder='Enter Email' className='form-control ' name="email" onChange={handleinput} value={values.email} />
            <span className='text-danger'>{errors.email}</span>
          </div>
          <div className='mb-3'>
            <label htmlFor='Password'><strong>Password</strong></label>
            <input type="password" placeholder='Enter Password' className='form-control ' name="password" onChange={handleinput} value={values.password} />
            <span className='text-danger'>{errors.password}</span>
          </div>
          <button type="submit" className='btn btn-success w-100' onClick={handleSubmit} ><strong>Signup</strong></button>
          <p>You are agree to your terms and condition</p>
          <Link to="/" className='btn btn-default border w-100 bg-danger text-white text-decoration-none'><strong>Login</strong></Link>
        {/* </form> */}
      </div>
    </div>
  )
}

export default Signup
