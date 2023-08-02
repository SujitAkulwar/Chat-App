import React, { useEffect, useMemo } from 'react'
import './Chatbox.css'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useraction } from '../../store/store';

const Chatbox = () => {
    var userid = useSelector((state) => state.user.userid);
    var chats = useSelector((state) => state.user.chats)
    var receiverid = useSelector((state) => state.user.receiverid);
    const dispatch = useDispatch(); 

    const values = useMemo(() => ({
        id1: userid,
        id2: receiverid
    }), [userid,receiverid]);

    useEffect(() => {
        const fetchData = () => {
            if (userid !== null && receiverid !== null) {
                axios.post("http://localhost:5001/loadchats", values)
                    .then(res => {
                        console.log(res.status,receiverid);
                        if (res.status === 200) {
                            dispatch(useraction.setchats(res.data));
                        } else {
                            alert("no record found")
                        }
                    })
                    .catch(err => console.log(err));
            }
        };
    
        const intervalId = setInterval(fetchData, 10000);
        return () => {
          clearInterval(intervalId);
        };
      }, [dispatch,receiverid,userid,values]);

    if (chats === null) {
        return <div className='chatbox'>  </div>
    } else {
        
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