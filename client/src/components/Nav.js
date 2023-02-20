import React from 'react'

const Index = () => {
  return (
      <div className='indexul'>
          <div>
            <a href='/'>
                <img
                  src={require('../img/logo.jpg')}
                  alt="description"
                  className='logoimg'
                  />
            </a>
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