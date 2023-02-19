import React from 'react'
import './Chatbox.css'


const Chatbox = () => {
    const text = "font-family: 'Roboto', sans-serif;"
    const ny = (
        <div className='text1'>
            <img
                src={require('../img/logo2.png')}
                alt="description"
                className='userimg'
            />
            <div className='msg m1'>
                 {text}
            </div>
        </div>
    )

    const y = (
        <div className='text2'>
            <div className='msg m2'>
                {text}
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
            {ny}
            {y}
            {ny}
            {y}
            {ny}
            {y}
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