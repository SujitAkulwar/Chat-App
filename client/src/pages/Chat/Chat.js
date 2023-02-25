import React from 'react'
import Nav from '../../components/Nav/Nav'
import Chats from '../../components/Chats/Chats'
import User from '../../components/User/User'
import './Chat.css'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

function Chat() {

  const user = useSelector((state) => state.user.username);
  var showchat;

  if (user == null) {
    showchat = <Redirect to="/Login"/>
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