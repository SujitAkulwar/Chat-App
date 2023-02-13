// import React,{useState} from 'react'
// import { ReactDOM } from 'react';
import Nav from '../components/Nav'
import './Login.css';

const Login = () => {

  // const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (event) => {
    console.log("ok");
  };
  
  const loginform = (
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