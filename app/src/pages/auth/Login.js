import Nav from '../../components/Nav/Nav'
import './auth.css';
import { useSelector,useDispatch } from 'react-redux'
import {  Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from 'react';
import axios from "axios";
import { useraction } from '../../store/store';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  var name = useSelector((state) => state.user.username);
  // var userid = useSelector((state) => state.user.userid);

  const values = {
    username: username,
    password: password
  };

  const handleSubmit = (event) => { 
    event.preventDefault();
    console.log(values);
    axios.post("http://localhost:5001/login", values)
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          console.log(res.data[0].id);
          dispatch(useraction.setuser(username));
          dispatch(useraction.setuserid(res.data[0].id));
          navigate('/');
        }else {
          alert("no record found")
        }
      })
      .catch(err => console.log(err));
  };
  
  let loginform; 

  if (name == null) {
    loginform =(
    <form onSubmit={handleSubmit} className="f1" >
      <label> Email : </label><input type="email" id='username' value={username} className="i1" name='name' onChange={(e) => setUsername(e.target.value)}></input>
      <label> Password : </label><input type="password" id='password' value={password} className="i1" name='pass' onChange={(e) => setPassword(e.target.value)}></input>
      <button type='submit' className="submit">submit</button>
      <Link to='./register' className='registerlink'>
        New user register here !!
      </Link>
    </form>
    );
  } else {
    loginform = <Navigate to="/Register" replace/>
  }
  
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