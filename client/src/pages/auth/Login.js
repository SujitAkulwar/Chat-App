import Nav from '../../components/Nav/Nav'
import './auth.css';
import { useSelector } from 'react-redux'
import { Redirect,Link } from "react-router-dom"

const Login = () => {
  
  var name = useSelector((state) => state.user.username);
  var loginform;
  // const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (event) => { 
    console.log("ok");
  };
  

  if (name == null) {
    loginform =(
    <form onSubmit={handleSubmit} className="f1" >
      <label> Email : </label><input type={Text} className="i1" name='name'></input>
      <label> Password : </label><input type={Text} className="i1" name='pass'></input>
      <input type={'submit'} className="submit"></input>
      <Link to='./register' className='registerlink'>
        New user register here !!
      </Link>
    </form>
    );
  } else {
     loginform = <Redirect to="/Register" />
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