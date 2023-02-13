import React from 'react'
import './Chats.css'

const userid = (
    <div className='userid'>
        <div className='userprofil'>
            <img
              src={require('../img/logo.jpg')}
              alt="description"
              className='userprofilimg'
            />
        </div>
        <div className='username'>
            Sujit 
        </div>
    </div>
)

const Chats = () => {
    return (
        <>
            {userid}
            <div className='chatbox'>
                
            </div>
        </>
        
    )
}

export default Chats