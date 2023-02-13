// import React,{useState} from 'react'
// import { ReactDOM } from 'react';
import Nav from '../components/Nav'
import './Register.css';

const Register = () => {

  // const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (event) => {
    console.log("ok");
  };
  
  const Registerform = (
    <form onSubmit={handleSubmit}>
      <label> Email : </label><input type={Text} className="name" name='name'></input>
      <label> Password : </label><input type={Text} className="name" name='pass'></input>
      <input type={'submit'} className="submit"></input>
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