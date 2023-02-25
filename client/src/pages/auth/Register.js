import Nav from '../../components/Nav/Nav'
import './auth.css';
import { useSelector } from 'react-redux'
import { Redirect } from "react-router-dom"

const Register = () => {
  
  var name = useSelector((state) => state.user.username);
  var Registerform;
  // const [errorMessages, setErrorMessages] = useState({});

  const handleSubmit = (event) => {
    console.log("ok");
  };

  if (name == null) {
    Registerform = (
    <form onSubmit={handleSubmit} className="f1">
      <label> Email : </label><input type={Text} className="i1" name='name'></input>
      <label> Password : </label><input type={Text} className="i1" name='pass'></input>
      <input type={'submit'} className="submit"></input>
      <a href='./login' className='registerlink'>
        Already User Login here !!
      </a>
    </form>
    );
  } else {
    Registerform = <Redirect to="/" />
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