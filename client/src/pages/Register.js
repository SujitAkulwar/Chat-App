// import React,{useState} from 'react'
// import { ReactDOM } from 'react';
import Nav from '../components/Nav'
import './auth.css';

const Register = () => {

  // const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (event) => {
    console.log("ok");
  };
  
  const Registerform = (
    <form onSubmit={handleSubmit} className="f1">
      <label> Email : </label><input type={Text} className="i1" name='name'></input>
      <label> Password : </label><input type={Text} className="i1" name='pass'></input>
      <input type={'submit'} className="submit"></input>
      <a href='./login' className='registerlink'>
        Already User Login here !!
      </a>
    </form>
  );
 
  
  
  
  return (
    <>
      <Nav/>
      <div>
        <div className='c'>
          Register
        </div>
        <div className='d'> 
          {Registerform}
        </div>
      </div> 
    </>
  );
}
export default Register;