import React from 'react'
import './Chatbox.css'
import { useSelector } from 'react-redux';

const Chatbox = () => {

    var userid = useSelector((state) => state.user.userid);
    var chats = useSelector((state) => state.user.chats)

    // const text = "font-family: 'Roboto', sans-serif;"


// const receiver = (
//     <div className='text1'>
//         <img
//             src={require('../../img/logo2.png')}
//             alt="description"
//             className='userimg'
//         />
//         <div className='msg m1'>
//              {text}
//         </div>
//     </div>
// )

// const sender = (
//     <div className='text2'>
//         <div className='msg m2'>
//             {text}
//         </div>
//         <img
//             src={require('../../img/logo.jpg')}
//             alt="description"
//             className='userimg'
//         />
//     </div>
// )

    if (chats === null) {
        return <div className='chatbox'>  </div>
    }

    var chat = null;
    chat = chats.map((item, index) => (
        userid === item.sender_id ? (
            <div className='text2' key={index}>
                <div className='msg m2'>
                    {item.message}
                </div>
                <img
                    src={require('../../img/logo.jpg')}
                    alt="description"
                    className='userimg'
                />
            </div>
        ) : (
            <div className='text1' key={index}>
                <img
                    src={require('../../img/logo2.png')}
                    alt="description"
                    className='userimg'
                />
                <div className='msg m1'>
                    {item.message}
                </div>
            </div>
        )
        
    ));
    
    return (
        <div className='chatbox'>
            {chat}
        </div>
    )
}

export default Chatbox