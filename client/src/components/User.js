import React from 'react'
import './User.css'

const user = (
  <div className='user'>
    <div className='userlogo'>
      <img
        src={require('../img/logo.jpg')}
        alt="description"
        className='userimg'
      />
    </div>
    <div className='username'>
      Sujit 
    </div>
  </div>
) 


const User = () => {
  return (
    <>
      <div className='users'> 
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
        {user}
      </div>
    </>
  )
}

export default User