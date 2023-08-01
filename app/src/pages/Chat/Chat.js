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
  const dispatch = useDispatch();
  var showchat;


  useEffect(() => {
    axios.post("http://localhost:5001/chat")
      .then(res => {
        console.log(res.status);console.log("chat");
        if (res.status === 200) {
          console.log(res.data);
          dispatch(useraction.setreceiverids(res.data));
        } else {
          alert("no record found")
        }
      })
      .catch(err => console.log(err));
  }, [dispatch]);

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