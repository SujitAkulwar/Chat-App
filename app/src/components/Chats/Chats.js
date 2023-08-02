import React, {  useState } from 'react'
import Chatbox from '../Chatbox/Chatbox'
import './Chats.css'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import { useraction } from '../../store/store';

const Chats = () => {
    
    var receivername = useSelector((state) => state.user.receivername);

    const [message, setmessage] = useState('');


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

    var receiver_id = useSelector((state) => state.user.receiverid);
    var user_id = useSelector((state) => state.user.userid);
    const dispatch = useDispatch();

    var values = {
        id1: user_id,
        id2: receiver_id,
        message: message
    }

    const loadchats = () => {
        axios.post("http://localhost:5001/loadchats", values)
            .then(res => {
                console.log(res.status);
                if (res.status === 200) {
                    dispatch(useraction.setchats(res.data));
                    setmessage("");
                } else {
                alert("no record found")
                }
            })
            .catch(err => console.log(err));
    }
 
    var handlesendmassage = () => {
        console.log(values);
        axios.post("http://localhost:5001/sendmessage", values)
        .then(res => {
            console.log(res.status);
            if (res.status === 200) {
                loadchats();
            } else {
                alert("error");
            }
        })
        .catch(err => console.log(err));
    }

    const textbox = (
        <div className='f2'>
            <input type='text' className="i2" name='text' onChange={(e) => setmessage(e.target.value)} value={message}></input>
            <button className="submit s" onClick={()=>{handlesendmassage()}}>Send</button>
        </div>
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