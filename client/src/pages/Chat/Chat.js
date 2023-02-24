import React from 'react'
import Nav from '../../components/Nav/Nav'
import Chats from '../../components/Chats/Chats'
import User from '../../components/User/User'
import './Chat.css'

function Chat() {
  return (
    <>
      <Nav/>
      <div className='flex'>
        <User />
        <Chats />
      </div>
    </>
  )
}

export default Chat