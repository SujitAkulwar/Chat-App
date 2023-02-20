// import React,{useState} from 'react'
// import { ReactDOM } from 'react';
import Nav from '../components/Nav'
import './auth.css';

const Login = () => {

  // const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (event) => { 
    console.log("ok");
  };
  
  const loginform = (
    <form onSubmit={handleSubmit} className="f1" >
      <label> Email : </label><input type={Text} className="i1" name='name'></input>
      <label> Password : </label><input type={Text} className="i1" name='pass'></input>
      <input type={'submit'} className="submit"></input>
      <a href='./register' className='registerlink'>
        New user register here !!
      </a>
    </form>
  ); 
  
  return (
    <>
      <Nav/>
      <div>
        <div className='c'>
          Login
        </div>
        <div className='d'> 
          {loginform}
        </div>
      </div> 
    </>
  );
}
export default Login;