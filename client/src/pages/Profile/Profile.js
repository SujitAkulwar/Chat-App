import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useraction } from '../../store/store'
import "./Profile.css"
import { Redirect } from "react-router-dom"

const Profile = () => {

  const name = useSelector((state) => state.user.username);
  const dispatch = useDispatch();

  var data;

  if (name == null) {
    data = <Redirect to="/" />
  } else {
    data = (
      <>
        <div className='profilename'>
          Name : {name}
        </div>
        <button onClick={() => dispatch(useraction.removeuser())}>
          LOGOUT
        </button>
      </>
    )
  }


  return (
    <>
      {data}
    </>
  )
}

export default Profile