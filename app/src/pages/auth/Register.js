import Nav from '../../components/Nav/Nav'
import './auth.css';
import { useSelector,useDispatch } from 'react-redux'
import { Link, Navigate, useNavigate } from "react-router-dom"
import { useraction } from '../../store/store';
import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  
  var name = useSelector((state) => state.user.username);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var Registerform;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const values = {
    username: username,
    password: password
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);

    axios.post("http://localhost:5001/register", values)
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          dispatch(useraction.setuser(username));
          navigate('/');
        } else {
          alert("error");
        }
      })
      .catch(err => console.log(err));
  };

  if (name == null) {
    Registerform = (
    <form onSubmit={handleSubmit} className="f1">
      <label> Email : </label><input type="email" className="i1" name='name' onChange={(e) => setUsername(e.target.value)}></input>
      <label> Password : </label><input type="password" className="i1" name='pass' onChange={(e) => setPassword(e.target.value)}></input>
      <button type='submit' className="submit">Register</button>
      <Link to='./login' className='registerlink'>
        Already User Login here !!
      </Link>
    </form>
    );
  } else {
    Registerform = <Navigate to="/" replace/>
  }
  
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