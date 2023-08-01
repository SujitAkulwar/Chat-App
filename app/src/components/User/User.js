import React from 'react'
import './User.css'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useraction } from '../../store/store';


  
 const User = () => {

  var receiver = useSelector((state) => state.user.receiverids);
  var userid = useSelector((state) => state.user.userid);
  var username = useSelector((state) => state.user.username);

  const dispatch = useDispatch();

  const openchats = (item) => {
    dispatch(useraction.setreceiver(item.username));
    dispatch(useraction.setreceiverid(item.id));
    const values = {
      id1: userid,
      id2: item.id 
    }
    axios.post("http://localhost:5001/loadchats", values)
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          dispatch(useraction.setchats(res.data));
        } else {
          alert("no record found")
        }
      })
      .catch(err => console.log(err.message));
   }
   
   if (receiver === null) {
     return <div>loading .... </div>
   }

  var users = null;
  users  = receiver.map((item, index) => (
        username === item.username ? (
          console.log()
        ): (
        <div className='user' id={item.id} key={index} onClick={() => openchats(item)}>
          <div className='userlogo'>
            <img
              src={require('../../img/logo2.png')}
              alt="description"
              className='userimg'
            />
          </div>
          <div className='username'>
            {item.username}
          </div>
        </div >
        )
      ));

  return (
    <>
      <div className='users'> 
        {users}
      </div>
    </>
  )
}

export default User