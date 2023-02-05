import React from 'react'

const Index = () => {
  return (
      <div className='indexul'>
        <div>
              <img
                  src={require('../img/logo.jpg')}
                  alt="description"
                  className='logoimg'
              />
        </div>
        <div>
            <a href='/' className='indexli'>
                HOME
            </a>
            <a href='/chat' className='indexli'>
                CHAT
            </a>
            <a href='/login' className='indexli'>
                LOGIN
            </a>
            <a href='/register' className='indexli'>
                REGISTER
            </a>
        </div>
    </div>
  )
}

export default Index