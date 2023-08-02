import React, { useEffect } from 'react'
import Nav from '../../components/Nav/Nav'
import Chats from '../../components/Chats/Chats'
import User from '../../components/User/User'
import './Chat.css'
import { useSelector,useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import { useraction } from '../../store/store';

function Chat() {

  const user = useSelector((state) => state.user.username);
  const userid = useSelector((state) => state.user.userid);
  const dispatch = useDispatch();
  var showchat;


  useEffect(() => {
    const value = {
      id: userid 
    };
    axios.post("http://localhost:5001/chat",value)
      .then(res => {
        console.log(res.status);
        if (res.status === 200) {
          console.log(res.data,"hi");
          dispatch(useraction.setreceiverids(res.data));
        } else {
          alert("no record found")
        }
      }) 
      .catch(err => console.log(err));
  }, [dispatch,userid]);

  if (user == null) {
    showchat = <Navigate to="/Login" replace/>
  } else {
    showchat = (
      <>
        <Nav/>
        <div className='flex'>
          <User />
          <Chats />
        </div>
      </>
    )
  }

  return (
    <>
      {showchat}
    </>
  )
}

export default Chat