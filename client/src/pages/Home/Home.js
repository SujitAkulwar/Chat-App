import React from 'react'
import Nav from '../../components/Nav/Nav'
import './Home.css'

const home = (
  <div className='home'>
    <div className='hometext'>
      <div className='hometitle'>
        Share the world with your friends
      </div>
      <div className='homesubtitle'>
        Chat App lets you connect with the world
      </div>
      <button className='homelink'>
        <a href="/Register" >Get started</a>
      </button>
    </div>
    <div className='homeimgbox'>
      <img
        src={require('../../img/home.jpg')}
        alt="description"
        className='homeimg'
      />
    </div>
  </div>
)

const Home = () => {
  return (
    <>
      <Nav/>
      {home}
    </>
  )
}

export default Home