import React, { useState } from 'react'
import Chatbox from '../Chatbox/Chatbox'
import './Chats.css'
import { useSelector } from 'react-redux'


const Chats = () => {
    
    var receivername = useSelector((state) => state.user.receivername);

    const [massage, setmassage] = useState('');
    const userid = (
        <div className='userid'>
            <div className='userprofil'>
                <img
                src={require('../../img/logo.jpg')}
                alt="description"
                className='userprofilimg'
                />
            </div>
            <div className='usernamelive'>
                {receivername}
            </div>
        </div>
    )

    var handlesendmassage = (event) => {
        console.log(massage);
    }

    const textbox = (
        <form className='f2' onSubmit={handlesendmassage}>
            <input type='text' className="i2" name='text' onChange={(e) => setmassage(e.target.value)}></input>
            <button type="submit" className="submit s">Send</button>
        </form>
    )

    return (
        <div className='chatlive'>
            {userid}
            <Chatbox/>
            {textbox}
        </div>
    )
}

export default Chats