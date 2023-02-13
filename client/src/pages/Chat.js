import React from 'react'
import Nav from '../components/Nav'
import Chats from '../components/Chats'
import User from '../components/User'
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