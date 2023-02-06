import React from 'react'
import Nav from '../components/Nav'
import './Home.css'

const Home = () => {
  return (
    <>
      <Nav/>
        <div className='home'>
          <div className='hometext'>
            <div className='hometitle'>
              Share the world with your friends
            </div>
            <div className='homesubtitle'>
              Chat App lets you connect with the world
            </div>
            <button className='homelink'>
              Get started
            </button>
          </div>
          <div className='homeimgbox'>
            <img
              src={require('../img/home.jpg')}
              alt="description"
              className='homeimg'
            />

          </div>
        </div>
    </>
  )
}

export default Home