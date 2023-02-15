import React from 'react'
import './Chatbox.css'


const Chatbox = () => {
    const ny = (
        <div className='text1'>
            <img
                src={require('../img/logo.jpg')}
                alt="description"
                className='userimg'
            />
            <div className='msg'>
                 sans-serif;font-family: 'Roboto', sans-serif;font-family: 'Roboto', sans-serif;
            </div>
        </div>
    )

    const y = (
        <div className='text2'>
            <div className='msg'>
                padding: 10px;padding: 10px;padding: 10px;padding: 10px;padding: 10px;padding: 10px;
            </div>
            <img
                src={require('../img/logo.jpg')}
                alt="description"
                className='userimg'
            />
        </div>
    )


    return (
        <div className='chatbox'>
            {ny}
            {y}
            {ny}
            {y}
            {ny}
            {y}
        </div>
    )
}

export default Chatbox