import React from 'react'
import './User.css'

const User = () => {
  return (
    <>
      <div className='users'> 
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
      </div>
    </>
  )
}

export default User