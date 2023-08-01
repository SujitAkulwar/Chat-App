import React from 'react'
import Nav from '../../components/Nav/Nav'
import './Home.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Home = () => {
  const user = useSelector((state) => state.user.username);
  var NEWUSER;
  if (user == null) {
    NEWUSER = <Link to="/Register" >Get started</Link>
  } else {
    NEWUSER = <Link to="/Chat" > Chats</Link>
  }

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
          { NEWUSER }
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

  return (
    <>
      <Nav/>
      {home}
    </>
  )
}

export default Home