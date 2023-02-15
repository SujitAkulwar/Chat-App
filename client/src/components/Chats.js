import React from 'react'
import Chatbox from './Chatbox'
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
        <div className='usernamelive'>
            Sujit 
        </div>
    </div>
)



const textbox = (
    <form className='f2'>
      <input type={Text} className="i2" name='text'></input>
      <input type={'submit'} className="submit s"></input>
    </form>
)

// const send = (val) =>{
//         <div>
//             val
//         </div>
//     }
const Chats = () => {
    
    return (
        <div className='chatlive'>
            {userid}
            <Chatbox/>
            {textbox}
        </div>
    )
}

export default Chats